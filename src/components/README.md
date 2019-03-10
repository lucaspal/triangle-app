### Considerations

The application consists of four components: `Header`, `Note`, `Side` and `SideForm`. This would make it easier to keep building this application and reuse the components. Furthermore, this encourages to have single responsibility components and isolating them for easier testing.

The `SideForm` component handles the logic to determine the type of the triangle based on the sides, that can be given as input from the user by using the `Side` component, one for each side. This component will also take care of keeping track of the state, of the sides and whether these sides can make a triangle or not.

The `Side` component, as mentioned above, only knows about its value and whether or not it is in an error state. It will notify with a callback the value to its parent component. This has been needed because of a more thorough validation, since the input element (unfortunately) does not handle gracefully the dashes for inputs of type number.

The `Header` component is a function component only containing a note as hint for the user. It has been preferred to have a component over inlining the note in `App.js` for eventual further development. 

The `Note` component is a component from the [react wrapper for the tradeshift-ui](https://github.com/Tradeshift/react-tradeshift-ui). It has been included to avoid adding an additional dependency to the project, to be removed to use the application in a production-like scenario.

