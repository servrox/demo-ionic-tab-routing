# Demo: Ionic project with a tab based layout <br /> which shows different kinds of route definitions <br /> for lazy modules

![Live Demo](http://g.recordit.co/iTEmjAK5f9.gif)

## Explanation

The example includes **two kinds of route definition**,<br />
which are shown in *Tab One* and *Tab Two*.<br />
You can also see how to **dynamically adjust the routing** to use pages in different tabs.<br />
<br />
The normal page flow for each tab is *Tab -> Profile -> Profile Settings*.<br />
The module flow is following: *App -> Tabs -> Tab -> Profile -> ProfileSettings*.<br />
Each page is a lazy loaded module.<br />
For the navigation to the previous page I used the *ion-back-button*.<br />
Each tab is stateful, which means that displayed pages are kept at a tab change.<br />
<br />
Because the profile page can be called by tab one and tab two,<br />
there is some logic to make back and forth navigation work correctly.

### Route definition for Tab One

For *Tab One* the whole page flow is defined in one file (s. *tabs.router.module.ts*).<br />
It is also possible to move the whole routing in *app-routing.module.ts*.

### Route definition for Tab Two

For *Tab Two* there's only one one route definiton in *tabs.router.module.ts*:<br />
*TabsModule -> Tab2PageModule*.<br />
Every further route is defined in the then loaded module,<br />
for this demo it means that the modules loaded behind *Tab Two* defining two routes.<br />
<br />
First a *no-name-route* which loads the corresponding component.<br />
(For the *ProfilePageModule* that means the *ProfilePage*.)<br />
Second the page-module we can route to.<br />
(For the *ProfilePageModule* that means the *ProfileSettingsPageModule*.)

## Important tip

A common mistake is that not all continuing routes (child-routes) are defined in the children-block.<br />
If you don't define it in the child-block routing may seem to work,<br />
but things like *ion-back-button* are fucked up.

## Router Tree

![Router Tree](https://i.imgur.com/2JAZAdT.png)

## Getting Started
``` 
git clone https://github.com/servrox/demo-ionic-tab-routing.git
cd demo-ionic-tab-routing
yarn
ionic serve
```

## Built With

* [Ionic CLI](https://ionicframework.com/docs/cli/) - version 4.10.3
* [Ionic Framework](https://material.angular.io/) - @ionic/angular 4.0.1 

## Authors

* **Marcel Mayer** - 
[servrox.solutions](http://servrox.solutions)