### Considerations

This folder contains tests for each one of the components used in this application. [Jest](https://jestjs.io/) has been used as testing framework and [enzyme](https://airbnb.io/enzyme/) for additional testing utilities.

It has been tested that each component will render correctly, by the use of the `shallow` function provided by enzyme. This will only render the component under testing, isolating it from its child components.

Furthermore, tests for both `Side` and `SideForm` components cover the most crucial aspects of the components. For example it will be ensured the right behavior for the `isError` and `isDisabled` functions.

Testing is one of the areas with a lot of room for improvement, limited now for the also limited knowledge of the test framework. Further improvements would definitely cover the testing part, to test the behavior of the components, rather than the single functions. Coverage would also be increased with additional tests, covering edge cases and error scenarios. An end to end test would also improve the test quality.

