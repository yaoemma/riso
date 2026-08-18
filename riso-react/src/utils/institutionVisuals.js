/** Couleurs par ville */
export const CITY_GRADIENTS = {
  Abidjan: 'linear-gradient(135deg, #1a5276 0%, #2E78C0 100%)',
  Bouaké: 'linear-gradient(135deg, #2d6a4f 0%, #52b788 100%)',
  Korhogo: 'linear-gradient(135deg, #7b2cbf 0%, #c77dff 100%)',
  Daloa: 'linear-gradient(135deg, #bc4749 0%, #f4845f 100%)',
  Man: 'linear-gradient(135deg, #386641 0%, #6a994e 100%)',
  'San-Pédro': 'linear-gradient(135deg, #0077b6 0%, #00b4d8 100%)',
  Yamoussoukro: 'linear-gradient(135deg, #F28B2E 0%, #ffba08 100%)',
  Bondoukou: 'linear-gradient(135deg, #5c4033 0%, #a98467 100%)',
  Odienné: 'linear-gradient(135deg, #606c38 0%, #bc6c25 100%)',
  Gagnoa: 'linear-gradient(135deg, #40916c 0%, #74c69d 100%)',
  Abengourou: 'linear-gradient(135deg, #9d0208 0%, #e85d04 100%)',
  'Grand-Bassam': 'linear-gradient(135deg, #0077b6 0%, #48cae4 100%)',
  Anyama: 'linear-gradient(135deg, #5a189a 0%, #9d4edd 100%)',
  Bingerville: 'linear-gradient(135deg, #2b9348 0%, #55a630 100%)',
  Divo: 'linear-gradient(135deg, #bc6c25 0%, #dda15e 100%)',
  Séguéla: 'linear-gradient(135deg, #6a040f 0%, #dc2f02 100%)',
  Agboville: 'linear-gradient(135deg, #386641 0%, #a7c957 100%)',
  Dabou: 'linear-gradient(135deg, #023e8a 0%, #0077b6 100%)',
  Soubré: 'linear-gradient(135deg, #588157 0%, #a3b18a 100%)',
  "Côte d'Ivoire": 'linear-gradient(135deg, #2E78C0 0%, #1a5276 100%)',
  default: 'linear-gradient(135deg, #2E78C0 0%, #F28B2E 100%)',
};

export function getCityGradient(city) {
  return CITY_GRADIENTS[city] || CITY_GRADIENTS.default;
}

export function getInstitutionInitials(shortName) {
  if (!shortName) return '?';
  const cleaned = shortName.replace(/…$/, '').trim();
  if (cleaned.length <= 5 && !cleaned.includes(' ')) return cleaned.toUpperCase();
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return words.slice(0, 3).map((w) => w[0]).join('').toUpperCase();
  }
  return cleaned.slice(0, 4).toUpperCase();
}
