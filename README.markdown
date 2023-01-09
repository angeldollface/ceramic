# CERAMIC :lock: :rocket:

![GitHub CI](https://github.com/angeldollface/ceramic/actions/workflows/vue.yml/badge.svg)

***A small Vue.js 3 app to validate IMEI numbers. :lock: :rocket:***

## ABOUT :books:

Since I was trying to figure out the algorithm for validating IMEI numbers for a uni course, I thought I'd write a small app that solves this interesting problem. This little app checks whether the IMEI number of any one of your devices is valid or not by computing the check digit and comparing this to the actual check digit. The "Luhn Algorithm" is used to do this. A link to the library it uses in the background can be found in the section below.

## LINKS :earth_americas:

- Library implementation in ECMA Script: [VIEW](https://github.com/angeldollface/luhny)
- Library implementation in Rust: [VIEW](https://github.com/angeldollface/luhny.rs)
- Web app implementation in Yew.rs:[VIEW](https://github.com/angeldollface/ceramic.rs)

## DEPLOYED PROJECT ON GITHUB PAGES :rocket:

To view a live deployed version of this project, click here: [VIEW](https://angeldollface.art/ceramic)

## USAGE :hammer:

- 1.) Visit [this link](https://angeldollface.art/ceramic).
- 2.) Get the IMEI for your device from the instructions for your platform. (You might have to scroll a bit.)
- 3.) Copy this IMEI number or write it down.
- 4.) Put the number into the input field.
- 5.) Click "VALIDATE"!
- 6.) Receive the status of your IMEI number from the text below the "VALIDATE" button that says `IMEI valid: Enter an IMEI number!`.

Note: You can use this fake IMEI for testing: `356728113476259`

## QUALITY ASSURANCE :white_check_mark:

I've tested this using the IMEI number of my iPhone and some IMEIs I found online.

## TECHNOLOGIES USED :computer:

- [Vue.js 3](https://vuejs.org)
- [Typescript](https://typescriptlang.org)
- [Git](https://git-scm.org)

## LUHN ALGORITHM IMPLEMENTATION :gear:

The implementation of the *Luhn Algorithm*, the algorithm that actually validates IMEI numbers against their check digit, can be found in the file `src/components/lib.ts`.

## TRY THE CODE FOR YOURSELF! :inbox_tray:

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

### Version 1.1.0

- Added a footer.
- Updated documentation.
- Added input validation.
- Added usage instructions.
- Added an info section on IMEIs.

## NOTE :scroll:

- *Ceramic :lock: :rocket:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the MIT license.
