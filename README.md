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

![add_interview](https://github.com/redouanemrabet/novy-stage/assets/106490380/b5aa7405-0abd-4601-aa4f-e663ce8c0f3a)
![add_objectif_for_a_collab](https://github.com/redouanemrabet/novy-stage/assets/106490380/f9516466-c7d4-4602-bff1-a848cf95f236)
![add_objective_for_admin](https://github.com/redouanemrabet/novy-stage/assets/106490380/be12fda9-38d8-466c-976f-f12aceabd523)
![all_interviews](https://github.com/redouanemrabet/novy-stage/assets/106490380/0a74fd78-48e9-4f60-a34a-406dd67f7317)
![all_interviewsss](https://github.com/redouanemrabet/novy-stage/assets/106490380/2e152346-b70e-480c-98ea-e27aa94992eb)
![all_objectives](https://github.com/redouanemrabet/novy-stage/assets/106490380/d4ab79af-42a5-4416-8e84-2818c5e2e52c)
![answer_questions](https://github.com/redouanemrabet/novy-stage/assets/106490380/4005169e-50fe-4756-b6db-2c61f979a810)
![filtre_objectifs](https://github.com/redouanemrabet/novy-stage/assets/106490380/92853227-4a2f-4207-a051-361ca49eb52d)
![my_interview](https://github.com/redouanemrabet/novy-stage/assets/106490380/031ac233-4a67-43da-ac98-f9775d0450e1)
![my_interviews](https://github.com/redouanemrabet/novy-stage/assets/106490380/6d265ad2-53b4-4ce2-b6c0-629d60cbfb90)

## Contact

Pour toute question ou commentaire, n'hésitez pas à nous contacter `redouanemrabet199@gmail.com`.
