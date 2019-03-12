Queue Manager App
===================
[Cloudappi][1] front-end project for management queues.

Install
---------
Install with npm and bower:

* Use: `npm install`
* Use: `bower install`

> **Functional versions:**
> - npm: 3.10.8
> - node: 6.8.1
> - bower: 1.7.9
> - gulp: CLI version 1.2.2

Getting Started
--------------------
* Use: `gulp serve`

Config
--------
The file to configure URL's path is:

* Path: `src/app/config/env.module.yaml`

```YAML
...
  api:
    BASE_URL: https://mocksvc.mulesoft.com/mocks/c4bbba2a-a0ed-492b-9656-4b65cd25fcf2/mocks/afcae4a1-5adb-4c2f-8015-2752e75169e8
    WEBSOCKET_URL: ws://52.211.248.184:3001
      });
...
```

Pages
--------

 * **/counter** -> turn list / current turns

 counter/screen/5a539548c597c018d9eff9d7/column -> todas las llamadas

 counter/screen/5a539548c597c018d9eff9d7/column/lastcall -> últimos llamados por servicio

 counter/screen/5a539548c597c018d9eff9d7/column/lastcall/fixed -> últimos llamados por servicio sin rotación

[1]: http://cloudappi.net/
