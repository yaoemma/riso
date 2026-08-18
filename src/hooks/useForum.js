import { useState, useCallback } from 'react';
import { showNotification } from '../utils/notifications';

const INITIAL_QUESTIONS = [];

export function getTimeAgo(date) {
  const diff = Date.now() - new Date(date).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "À l'instant";
  if (minutes < 60) return `Il y a ${minutes} min`;
  const hours = Math.floor(diff / 3600000);
  if (hours < 24) return `Il y a ${hours}h`;
  const days = Math.floor(diff / 86400000);
  return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
}

export function useForum() {
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
  const [answers, setAnswers] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [answersModal, setAnswersModal] = useState(null);
  const [replyModal, setReplyModal] = useState(null);

  const getAnswersForQuestion = useCallback(
    (questionId) => answers.filter((a) => a.questionId === questionId),
    [answers]
  );

  const filteredQuestions = questions.filter((q) => {
    const matchSearch = !search || q.text.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filters.length === 0 || filters.includes(q.category);
    return matchSearch && matchFilter;
  });

  const addQuestion = (text, category, author = 'Visiteur') => {
    setQuestions((prev) => [
      {
        id: Date.now(),
        text,
        author,
        category,
        date: new Date(),
        status: 'pending',
      },
      ...prev,
    ]);
    setModalOpen(false);
    showNotification('Question publiée avec succès !', 'success');
  };

  const addAnswer = (questionId, text, author = 'Membre RISO') => {
    setAnswers((prev) => [
      { id: Date.now(), questionId, text, author, date: new Date() },
      ...prev,
    ]);
    setQuestions((prev) =>
      prev.map((q) => (q.id === questionId ? { ...q, status: 'answered' } : q))
    );
    setReplyModal(null);
    showNotification('Réponse publiée avec succès !', 'success');
  };

  const deleteQuestion = (questionId, authorName) => {
    const normalizedAuthor = authorName.trim().toLowerCase();
    const question = questions.find((q) => q.id === questionId);

    if (!question || question.author.trim().toLowerCase() !== normalizedAuthor) {
      showNotification('Vous ne pouvez supprimer que vos propres questions', 'error');
      return;
    }

    setQuestions((prev) => prev.filter((q) => q.id !== questionId));
    setAnswers((prev) => prev.filter((a) => a.questionId !== questionId));

    if (answersModal?.id === questionId) setAnswersModal(null);
    if (replyModal?.id === questionId) setReplyModal(null);

    showNotification('Question supprimée', 'success');
  };

  const toggleFilter = (value) => {
    setFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
  };

  return {
    questions: filteredQuestions,
    questionCount: questions.length,
    answerCount: answers.length,
    search,
    setSearch,
    filters,
    toggleFilter,
    modalOpen,
    setModalOpen,
    answersModal,
    setAnswersModal,
    replyModal,
    setReplyModal,
    addQuestion,
    addAnswer,
    deleteQuestion,
    getAnswersForQuestion,
    getTimeAgo,
  };
}
