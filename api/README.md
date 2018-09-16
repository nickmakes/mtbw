# mtbw

### mtbw portal

the portal to a dynasty league for fantasy baseball

## tech choices

mtbw is a generated webapp, which means it makes a few technical decisions so that everything may function properly.  some of the more prominent technical assumptions include:

* docker as a command available to the host machine
* maven as a build tool
* java 8
* spring framework (supports both webmvc & webflux)

## modifying the configuration

there exists two central sources of truth.

> FIXME: it would be great to get a single one

both `./.env` and `./pom.xml` contain information that must stay in sync.  particularly, database credentials are leveraged from both sources when launching the webapp via its many launch points.

whenever editing core webapp details (database meta, webapp meta, etc.), make sure both of these sources stay in sync, or the webapp may cease to stop functioning properly.

## local setup

### with docker compose

to launch the web application through `docker-compose`, open a terminal window and navigate to the project root directory.  from there, simply run:

```cmd
docker-compose up -d
```

### with jetty

to launch the web application through the maven jetty plugin, open a terminal window and navigate to the project's `./processor` directory.

#### with persistent db

the persistent datastore used when the application is launched with `docker-compose` is accessible with the maven jetty plugin as well.  this is useful if you find yourself wanting to debug application code (via `mvnDebug jetty:run`) against the pre-existing, local data.  before beginning, it's a good idea to (re-)build the database image:

```cmd
docker build -t mtbw_proc_db src/main/resources/META-INF/docker/db/
```

once the docker database image is built, you can launch it with:

```cmd
docker run -d --name mtbw_db --env-file ../.env -p 3306:3306 -v mtbw_data:/var/lib/mysql mtbw_proc_db
```

Give the database time to properly boot up (~5-10 seconds). after that, simply run:

```cmd
mvn jetty:run
```

#### with sandbox db

mmdb web applications backed by mysql have the option to be launched with a fresh database.  this is useful if you find yourself working with throwaway data (for testing or demonstration purposes).  to do so, simply run:

```cmd
mvn jetty:run -Dsandbox
```
