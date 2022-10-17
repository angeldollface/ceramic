# CERAMIC :lock: :rocket:

![GitHub CI](https://github.com/angeldollface/ceramic/actions/workflows/vue.yml/badge.svg)

***A small Vue.js 3 app to validate IMEI numbers. :lock: :rocket:***

## ABOUT :books:

Since I was trying to figure out the algorithm for validating IMEI numbers for a uni course, I thought I'd write a small app that solves this interesting problem. This little app checks whether the IMEI number of any one of your devices is valid or not by computing the check digit and comparing this to the actual check digit. The "Luhn Algorithm" is used to
do this.

## LUHN ALGORITHM IMPLEMENTATION :gear:

The implementation of the *Luhn Algorithm*, the algorithm that actually validates IMEI numbers against their check digit, can be found in the file `src/components/lib.ts`.

## QUALITY ASSURANCE :white_check_mark:

I've tested this using the IMEI number of my iPhone and some IMEIs I found online.

## DEPLOYED PROJECT ON GITHUB PAGES :rocket:

To view a live deployed version of this project, click here: [VIEW](https://angeldollface.art/ceramic)

## TRY IT FOR YOURSELF! :inbox_tray:

Make sure you have the following tools installed and available from the command line:

- Node.js
- Git

Once you have these tools installed, execute these steps:

- 1.) Get the source code:

```bash
$ git clone https://github.com/angeldollface/ceramic
```

- 2.) Change directory into the source's root directory:

```bash
$ cd ceramic
```

- 3.) Install the project's dependencies:

```bash
$ npm install
```

- 4.) Run Vue's development server:

```bash
$ npm run serve
```

- 5.) Optional: To compile this project, run this command:

```bash
$ npm run build
```


## CHANGELOG :black_nib:

### Version 1.0.0

- Initial release.
- Upload to GitHub.
- Deployment on GitHub Pages.

### Version 1.2.0

- Added input validation.
- Added an info section on IMEIs.
- Added a footer.

## NOTE :scroll:

- *Ceramic :lock: :rocket:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the MIT license.
