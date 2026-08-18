import { useState, useEffect } from 'react';
import '../styles/forum.css';
import { useScrollEffects } from '../hooks/useScrollEffects';
import PageHeader from '../components/layout/PageHeader';
import { useForum } from '../hooks/useForum';
import { getPageHeaderVisual } from '../utils/pageHeaderVisuals';
import { showNotification } from '../utils/notifications';

const AUTHOR_KEY = 'riso-forum-author';

export default function ForumEchange() {
  useScrollEffects();

  const {
    questions,
    questionCount,
    answerCount,
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
  } = useForum();

  const [questionText, setQuestionText] = useState('');
  const [questionCategory, setQuestionCategory] = useState('');
  const [questionAuthor, setQuestionAuthor] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyAuthor, setReplyAuthor] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(AUTHOR_KEY);
    if (saved) {
      setQuestionAuthor(saved);
      setReplyAuthor(saved);
    }
  }, []);

  const saveAuthor = (name) => {
    localStorage.setItem(AUTHOR_KEY, name);
    setQuestionAuthor(name);
    setReplyAuthor(name);
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (!questionText.trim()) {
      showNotification('Veuillez écrire votre question', 'error');
      return;
    }
    if (!questionAuthor.trim()) {
      showNotification('Veuillez indiquer votre nom ou prénom', 'error');
      return;
    }
    if (!questionCategory) {
      showNotification('Veuillez sélectionner une catégorie', 'error');
      return;
    }
    saveAuthor(questionAuthor.trim());
    addQuestion(questionText.trim(), questionCategory, questionAuthor.trim());
    setQuestionText('');
    setQuestionCategory('');
  };

  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (!replyText.trim() || !replyModal) return;
    if (!replyAuthor.trim()) {
      showNotification('Veuillez indiquer votre nom', 'error');
      return;
    }
    saveAuthor(replyAuthor.trim());
    addAnswer(replyModal.id, replyText.trim(), replyAuthor.trim());
    setReplyText('');
  };

  const canDeleteQuestion = (author) => (
    questionAuthor.trim().toLowerCase() === author.trim().toLowerCase()
  );

  const handleDeleteQuestion = (question) => {
    if (!questionAuthor.trim()) {
      showNotification('Indiquez votre nom (identique à celui de la question) pour supprimer', 'error');
      setModalOpen(true);
      return;
    }
    if (!canDeleteQuestion(question.author)) {
      showNotification('Seul l\'auteur de la question peut la supprimer', 'error');
      return;
    }
    if (!window.confirm('Supprimer cette question ? Les réponses associées seront aussi supprimées.')) {
      return;
    }
    deleteQuestion(question.id, questionAuthor.trim());
  };

  const headerVisual = getPageHeaderVisual('forum');

  return (
    <>
      <PageHeader
        title="Forum d'échange"
        subtitle="Posez vos questions et obtenez des réponses de nos spécialistes en orientation"
        icon="fas fa-comments"
        backgroundImage={headerVisual.image}
        backgroundPosition={headerVisual.position}
      />

      <section className="forum-intro">
        <div className="container">
          <div className="forum-intro-inner">
            <p className="forum-intro-text">
              Échangez avec la communauté RISO sur l&apos;orientation, la formation, l&apos;emploi
              et le bilan de compétences.
            </p>
            <div className="forum-intro-stats">
              <div className="forum-intro-stat">
                <strong>{questionCount}</strong>
                <span>Question{questionCount > 1 ? 's' : ''}</span>
              </div>
              <div className="forum-intro-stat">
                <strong>{answerCount}</strong>
                <span>Réponse{answerCount > 1 ? 's' : ''}</span>
              </div>
            </div>
            <button type="button" className="btn btn-primary forum-intro-cta" onClick={() => setModalOpen(true)}>
              <i className="fas fa-plus" /> Poser une question
            </button>
          </div>
        </div>
      </section>

      <section className="forum-main">
        <div className="container">
          <div className="forum-layout">
            <aside className="forum-sidebar">
              <div className="sidebar-section">
                <h3><i className="fas fa-filter" /> Filtres</h3>
                <div className="filter-options">
                  {['orientation', 'formation', 'emploi', 'bilan'].map((value) => (
                    <label key={value} className="filter-option">
                      <input
                        type="checkbox"
                        checked={filters.includes(value)}
                        onChange={() => toggleFilter(value)}
                      />
                      <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            <main className="forum-content">
              <div className="forum-actions">
                <div className="forum-search">
                  <input
                    type="text"
                    placeholder="Rechercher une question..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button type="button" className="search-btn">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>

              <div className="questions-list">
                {questions.length === 0 ? (
                  <p className="no-questions-message">Aucune question pour le moment. Soyez le premier à en poser une !</p>
                ) : (
                  questions.map((question) => {
                  const questionAnswers = getAnswersForQuestion(question.id);
                  return (
                    <article key={question.id} className="question-card">
                      <div className="question-header">
                        <div className="question-meta">
                          <span className="question-author">
                            <i className="fas fa-user" /> {question.author}
                          </span>
                          <span className="question-date">
                            <i className="fas fa-clock" /> {getTimeAgo(question.date)}
                          </span>
                          <span className="question-category">
                            <i className="fas fa-tag" /> {question.category}
                          </span>
                        </div>
                        <div className={`question-status ${question.status}`}>
                          <i className={`fas fa-${question.status === 'answered' ? 'check-circle' : 'clock'}`} />
                          {question.status === 'answered' ? 'Résolue' : 'En attente'}
                        </div>
                      </div>
                      <div className="question-content">
                        <p className="question-text">{question.text}</p>
                      </div>
                      <div className="question-actions">
                        <button
                          type="button"
                          className="btn btn-outline"
                          onClick={() => setAnswersModal(question)}
                        >
                          Voir les réponses ({questionAnswers.length})
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => setReplyModal(question)}
                        >
                          Répondre
                        </button>
                        {canDeleteQuestion(question.author) && (
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDeleteQuestion(question)}
                          >
                            <i className="fas fa-trash-alt" /> Supprimer
                          </button>
                        )}
                      </div>
                    </article>
                  );
                })
                )}
              </div>
            </main>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="modal" style={{ display: 'block' }} onClick={() => setModalOpen(false)} role="presentation">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Poser une question</h3>
              <button type="button" className="close" onClick={() => setModalOpen(false)}>&times;</button>
            </div>
            <form className="modal-body" onSubmit={handleSubmitQuestion}>
              <div className="form-group">
                <label htmlFor="questionAuthor">Votre nom</label>
                <input
                  id="questionAuthor"
                  type="text"
                  value={questionAuthor}
                  onChange={(e) => setQuestionAuthor(e.target.value)}
                  placeholder="Prénom ou pseudo"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="questionText">Votre question</label>
                <textarea
                  id="questionText"
                  rows={4}
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="questionCategory">Catégorie</label>
                <select
                  id="questionCategory"
                  value={questionCategory}
                  onChange={(e) => setQuestionCategory(e.target.value)}
                  required
                >
                  <option value="">Sélectionnez</option>
                  <option value="orientation">Orientation</option>
                  <option value="formation">Formation</option>
                  <option value="emploi">Emploi</option>
                  <option value="bilan">Bilan de compétences</option>
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setModalOpen(false)}>
                  Annuler
                </button>
                <button type="submit" className="btn btn-primary">Publier</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {answersModal && (
        <div className="modal" style={{ display: 'block' }} onClick={() => setAnswersModal(null)} role="presentation">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Réponses ({getAnswersForQuestion(answersModal.id).length})</h3>
              <button type="button" className="close" onClick={() => setAnswersModal(null)}>&times;</button>
            </div>
            <div className="modal-body">
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>&quot;{answersModal.text}&quot;</p>
              {getAnswersForQuestion(answersModal.id).length === 0 ? (
                <p>Aucune réponse pour le moment.</p>
              ) : (
                getAnswersForQuestion(answersModal.id).map((answer) => (
                  <div key={answer.id} style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                    <small>{answer.author} — {getTimeAgo(answer.date)}</small>
                    <p>{answer.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {replyModal && (
        <div className="modal" style={{ display: 'block' }} onClick={() => setReplyModal(null)} role="presentation">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Répondre</h3>
              <button type="button" className="close" onClick={() => setReplyModal(null)}>&times;</button>
            </div>
            <form className="modal-body" onSubmit={handleSubmitReply}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>&quot;{replyModal.text}&quot;</p>
              <div className="form-group">
                <label htmlFor="replyAuthor">Votre nom</label>
                <input
                  id="replyAuthor"
                  type="text"
                  value={replyAuthor}
                  onChange={(e) => setReplyAuthor(e.target.value)}
                  placeholder="Prénom ou pseudo"
                  required
                />
              </div>
              <textarea
                rows={4}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Votre réponse..."
                required
              />
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setReplyModal(null)}>Annuler</button>
                <button type="submit" className="btn btn-primary">Publier la réponse</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
