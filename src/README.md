### Considerations

This folders contains the css files for the whole application. This approach has been adopted considered the size of the project, over a more granular split and/or inlining the style in the components.

The two main folders are `components` and `tests`. This approach has been adopted to keep the components folder clean, without spec/test files. On a larger scale, it may be preferred moving the spec/test files in sub-components folders.