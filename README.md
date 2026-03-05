🃏 Texas Hold'em Hand Evaluator - TDD Exam
Ce projet implémente un évaluateur et comparateur de mains de Texas Hold'em, développé en approche Test-Driven Development (TDD).

🛠️ Stack Technique
Langage : TypeScript (strict mode)

Testing : Vitest (pour son mode watch ultra-rapide et son support natif de l'ESM/TypeScript)

🗂️ Structure du projet
Plaintext
src/            # code source TypeScript
  ├─ Card.ts
  ├─ HandCategory.ts
  ├─ HandEvaluator.ts
  ├─ HandComparator.ts
  ├─ BestHandFromSeven.ts

tests/          # tests unitaires
  ├─ handEvaluator.test.ts
  ├─ comparator.test.ts
  ├─ bestHand.test.ts

package.json    # scripts et dépendances
tsconfig.json   # configuration TypeScript
README.md       # ce fichier
students.txt    # informations sur les participants
🚀 Installation et exécution
Bash
# Installation des dépendances
npm install

# Lancer les tests en mode interactif (TDD)
npm run test

# Lancer les tests avec le coverage
npm run coverage
🧠 Décisions d'architecture et Hypothèses (Conformité au sujet)
Conformément aux consignes de l'examen, voici les choix techniques appliqués :

1. Validité des entrées
Hypothèse : Nous partons du principe que les entrées sont valides. Le programme suppose qu'il n'y a pas de cartes en double dans les 7 cartes fournies (2 hole cards + 5 board) et que les rangs sont bien compris entre 2 et 14 (As). La validation en amont n'est pas gérée par ce module.

2. Algorithme de sélection
Pour garantir de toujours trouver la meilleure main de 5 cartes parmi 7, nous utilisons une approche par force brute mathématique :

Génération des 21 combinaisons possibles (5 parmi 7).

Évaluation de chaque combinaison (evaluate5).

Comparaison via le HandComparator pour ne conserver que la meilleure.

3. Rendu "chosen5" et ordonnancement
Le tableau chosen5 retourné contient exactement les 5 cartes qui composent la meilleure main.
Règle de tri : Pour garantir le déterminisme des tests, les cartes dans chosen5 sont systématiquement triées par ordre décroissant de rang (de la plus forte à la plus faible), indépendamment de leur appartenance à une paire ou un brelan.

4. Gestion des égalités et Kickers
Chaque main évaluée retourne un tableau rankingValues. Ce tableau contient les valeurs clés ordonnées par importance pour la catégorie (ex: pour un Full House, le rang du brelan d'abord, puis le rang de la paire). Le comparateur itère sur ce tableau pour départager les mains de même catégorie sans avoir à recompter les cartes. Note : l'As (14) est géré en tant que carte basse (5) pour le cas spécifique de la suite "Wheel" (A-2-3-4-5).