ARCHITECTURE INFRASTRUCTURE
Connection au serveur
La connexion au serveur se fait par le biais d’un serveur SSH avec une clé privée partagé dans le groupe de discussion, ainsi on distingue 5 profils utilisateurs :

voltronia
voltronbigdata
voltroncia
voltrondit
voltroniot
Adresse serveur SSH : groupe9.ddns.net

Services installés :
Docker : elle assure le déploiement de l’application (back, front, bd)
Base de données
MySQL
Host : groupe9.ddns.net
Port : 3306
User : admin
Pwd : voltron
Accès phpMyAdmin : groupe9.ddns.net:8081

Serveur : db
Utilisateur : admin
Mot de passe : voltron

Gitlab:
Host: http://groupe9.ddns.net:8929/
Créer un compte ensuite envoyé un message ou mail au cloud pour approuver votre inscription.
Une fois l’accès au repo vous aurez 3 dossiers :

Back :
Techno :  NextJs
host: http://groupe9.ddns.net/
port: 4000
Front:
Techno: ReactJs
Port : 5000
DevOps :
Pour tester votre code en local
PS : Lors d’un clone push si vous avez un failled remplacé http://groupe9.ddns.net:8929/ par http://20.199.50.179:8929/