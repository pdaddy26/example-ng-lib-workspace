create your workspace that will contain your common library
and an sample application that will showcase how to use your library
```
ng new mycommonlib --create-application=false
cd mycommonlib/
ng generate library mycommonlib --prefix=lib
ng generate application mysampleapplication
```

To build a package that you can install in other application
once it has build and package, it will create a tgz file that
you can then install in other apps
```
ng build mycommonlib
cd dist/mycommonlib && npm pack
```

To use the simple npm install <path of the tgz file>
here is an example. 
from the root of this repo do the following command
```
ng new myapp
cd myapp
npm install ../mycommonlib/dist/mycommonlib/mycommonlib-0.0.1.tgz
```

To use the library in myapp, here is an example
Import the module into the app.module.ts
```
import { MycommonlibModule } from 'mycommonlib';

imports: [
   MycommonlibModule
]
```

To use the component form the library
add the following line into your app.component.html
```
<lib-mycommonlib></lib-mycommonlib>
```

## evertime you make a change to the library you have to build, pack and reinstall the tgz to all application using the library
