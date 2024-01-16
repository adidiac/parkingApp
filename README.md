# Parking App 


## Description
This is a parking app that allows users to find parking spots in their area. The app will allow users to search for parking spots in their area and reserve them. The app will also allow users to rent out their parking spots to other users.

## Table of Contents

### Front End

* [README](./frontend/README.md)
* [README Test](./frontend/README.TEST.md)
* Code source path: [frontend/src]()
* Code source smart contract path: [frontend/src/contracts]()

Design patterns used in the project:

* Singleton : [frontend/src/utils/consts.js]()

```javascript
const pagesDictionary = {
    "HOME": (options) => <Home/>,
    "PARKING": (options) => <Parkings />,
    "BOOKING": (options) => <MyBookings />,
    "MYPARKINGS": (options) => <MyParkings />,
}
// Singleton for pages dictionary

class PagesDictionarySingleton{

    static instance = null;
    static getInstance() {
        if (PagesDictionarySingleton.instance === null) {
            PagesDictionarySingleton.instance = pagesDictionary;
        }
        return PagesDictionarySingleton.instance;
    }

    constructor() {
        throw new Error("Cannot construct singleton");
    }
}

export const pagesDictionaryInstance = PagesDictionarySingleton.getInstance();
```

* Observator (Provider) 

With the help of Redux and React Context, we have implemented the Provider pattern. The provider pattern is used to provide the state of the application to all the components that need it. The provider and the store reducers are implemented in the folder [frontend/src/reducers](). The provider is used in [frontend/src/index.js]().

```javascript

const store=createStore(combineReducers({user,page, bookings}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TransactionsProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </TransactionsProvider>
  </React.StrictMode>
);

```
Also done for the notification system in [frontend/src/notify/index.js]()


### Back End

* [README](./backend/README.md)

### Diagrams

* Adrian Diac
* * [Sequence Diagram](./Diagrams/Adrian_Diac/DiagramaSecventa.drawio.pdf)
* * [Object Diagram](./Diagrams/Adrian_Diac/ObjectDiagram.pdf)

* Cristian Petre Ilie
* * [Package Diagram](./Diagrams/Cristian_Petre_Ilie/Package_Diagram.pdf)
* * [Communication Diagram](./Diagrams/Cristian_Petre_Ilie/Communication_Diagram.pdf)

* Grigore Rosca
* * [Arhitecture Diagram](./Diagrams/Grigore_Rosca/Arhitecture.pdf)
* * [Interaction Diagram](./Diagrams/Grigore_Rosca/Interaction.pdf)

* Mitu Cristian
* * [Activity Diagram](Diagrams/Mitu_Cristian/Activitiy.pdf)
* * [Use case admin](Diagrams/Mitu_Cristian/Use_Case_Admin.pdf)
* * [Use case user](Diagrams/Mitu_Cristian/Use_Case_User.pdf)

* Vlad Calomfirescu
* * [Component Diagram](./Diagrams/Vlad_Calomfirescu/Component.pdf)
* * [Object Diagram](./Diagrams/Vlad_Calomfirescu/Object.pdf)

Presentation: [Presentation](./Presentation.pptx)