# Express routing

    This simple example shows how to set up routes using the Express() [app] instance and how to set up routes using a Router() instance. 
    It also shows how mixing the two approaches does not work
    
    Using the app.verb way is the simpler way to do it, but as you application grows,using the router.verb way allows for tighter modularization. passing your entire app instance around your project is not best probably not the best practice in a larger application 