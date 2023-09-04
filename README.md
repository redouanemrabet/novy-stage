# Novy EAPC

Bienvenue dans le dépôt GitLab du projet Novy !
Ce projet vise à gérer les objectifs annuels et les entretiens avec les employés de l'entreprise `Novelis`.

## Présentation

Le projet Novy  est une application web qui permet de gérer efficacement les objectifs annuels des employés ainsi que leurs entretiens. Il est composé d'une partie backend développée en `Spring Boot` et d'une partie frontend développée en `Next.js`.

## Technologies Utilisées

### Backend

- Spring Boot: 2.7.13
- Java: 8
- MySQL: 8.0.28
- MapStruct: 1.4.2.Final
- Lombok

### DataBase

- DB Name: novy_eapc

### Frontend

- Next.js: 13.4.12
- MUI (Material-UI)
- @tanstack/react-query: 4.32.1
- Axios: 1.4.0

## Installation et Configuration

1. Clonez ce dépôt sur votre machine locale.
   - git clone http://gitlab.novelis.io/stage-2023/novy-eapc.git
2. Assurez-vous d'avoir Java 8, MySQL 8.0.28 et Node.js installés.
3. Configurez la base de données MySQL en modifiant les paramètres dans le fichier `application.properties` du backend.
4. Dans le dossier backend, lancez l'application Spring Boot en exécutant `./mvnw spring-boot:run` dans le terminal.
5. Dans le dossier frontend, installez les dépendances avec la commande `npm install` et lancez le frontend avec `npm run dev`.

## Utilisation

- API Backend: [http://localhost:8081/api/]
- Frontend: [http://localhost:3000]

## Captures d'écran

![add_interview](/uploads/0380ca6d7cc691ca16ef2e75f2211720/add_interview.PNG)![add_objectif_for_a_collab](/uploads/71310a03f4ed72a20d1d84c6e88f7978/add_objectif_for_a_collab.PNG)![add_objective_for_admin](/uploads/43a220216678411f71dbd6606ebdec79/add_objective_for_admin.PNG)![all_interviews](/uploads/42a0f67542240bf0e8ef604c5a051c77/all_interviews.PNG)![all_interviewsss](/uploads/2b2aeb0637b1eccd95ec63d252da8de6/all_interviewsss.PNG)![all_objectives](/uploads/3111c3cc6ae915a63a56767ff06fc076/all_objectives.PNG)![answer_questions](/uploads/0b6e7aa3a3005838ad0ab2657b53069a/answer_questions.PNG)![filtre_objectifs](/uploads/2ae6ba8dc9e727d6bab5e2b88a7a72e7/filtre_objectifs.PNG)![my_interview](/uploads/cd13d42d7195c6ba006739f743ffbea2/my_interview.PNG)![my_interview](/uploads/d48ec61ac8c7aeeb3582e5caffe9e52c/my_interview.PNG)![my_interviews](/uploads/4962292d0af770bd2939b7bf30ef0b9f/my_interviews.PNG)

## Contact

Pour toute question ou commentaire, n'hésitez pas à nous contacter `redouanemrabet199@gmail.com`.
