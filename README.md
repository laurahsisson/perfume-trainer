# perfume-trainer

Multimedia installation aimed at teaching museum/shopgoers about the basics of odor notes.

## Physical Setup

The Vue app in this repository is installed in a physical space, along with a set of numerically labelled boxes containing a variety of odorants.
The user can either learn by smelling specific boxes, and clicking them in the app to see their notes, or by selecting a note (or blend of notes) and seeing which boxes's odorants fit these labels.

The default build is available on [Smellotron.com/learn](https://smellotron.com/learn)

## Modifying the Boxes or Labels

By default, the app assumes a setup with with 12 odorants and the following labels:

* **Ambrettolide** w/ notes of "*Musky*", "*Floral*"
* **Ambroxan** w/ notes of "*Woody*", "*Musky*", "*Fresh*"
* **Citral** w/ notes of "*Citrus*", "*Fruity*", "*Green*"
* **Dihydro Eugenol** w/ notes of "*Spicy*", "*Fresh*"
* **Ethyl Maltol** w/ notes of "*Sweet*"
* **Hedione** w/ notes of "*Floral*", "*Fresh*"
* **Hexenyl Cis-3 Acetate** w/ notes of "*Green*", "*Fruity*"
* **Iso E Super** w/ notes of "*Woody*", "*Floral*"
* **Ebanol** w/ notes of "*Woody*"
* **Orange Terpenes** w/ notes of "*Citrus*", "*Fresh*"
* **Stemone** w/ notes of "*Green*"
* **Velvione** w/ notes of "*Musky*"

These can be modified in the `Edit` tab, but changes are not permanent (refreshing the page will reset them). 
If you'd like a permanent, fixed set of odorants, please reach out and we can work one out together.

## For developers

The default odorants and their notes are defined as `boxes` and `notes` respectively in `src/App.Vue`.

It is possible to build a local copy of this installation source.

*Install and setup the project:*

```sh
npm install
```

*Compile and Hot-Reload for Development*

```sh
npm run dev
```

*Compile and Minify for Production*

```sh
npm run build
```

*Lint with [ESLint](https://eslint.org/)*

```sh
npm run lint
```
