# deel-homework

## Running the project

Run `npm install` in the root folder.
Once it finishes `npm run dev` will serve the app locally.
The output of the command provides the URL for the application.

## Project structure

The `src` folder contains four subfolders.

- `components` for react components.
- `constants` for constant variables to avoid baked in magic numbers and strings in the code.
- `types` for complex types to make the code more comprehensible.
- `utils` for non-component specific utility functions.

## Architecture

Since the application itself is not too complex I backed down from the initial
thought of using the Context + Reducer pattern. Still it's worth mentioning that it could've spared me some prop drilling through components.

### Components

#### App

The `App` component is rendered in the `root`.
On mount it fetches 20 names from an external API or uses a fallback array of names should the API or the internet connection fail.
It renders a title and the `AutoCompleteSearchInput` component.

#### AutoCompleteSearchInput

This component manages a controlled input where the user is able to type its search string. Besides the input it renders the `SearchResults` component.
On change of the input's value search results refresh.

#### SearchResults

Renders the list of matching names based on the search input's value. Searching is case insensitive and it checks if the names contain the search string.
If the search yields no matches a placeholder `No Results` item is shown in the list which is not interactable.

#### SearchResultListItem

A simple list item which shows the matching names, the matching string is highlighted within the list item. All code besides the rendering is a bit convoluted logic to support case insensitve highlighting without changing the capitalization of the original name.

By clicking one of the list items the according name gets filled in the input and the results list disappears.
