# VanillibsJS  
**VanillibsJS** is a collection of stand-alone, open-source files written by dylansward. The goal of these files is to make simple improvements to **Vanilla *(plain)* JavaScript**.  

All files in **VanillibsJS** are licensed under *MIT No Attribution (MIT-0)*. For information on this license, see the [`LICENSE`](https://github.com/dylansward/VanillibsJS/blob/main/LICENSE) file in the root directory.  

## How To Use  
Each folder within the root directory is meant to represent its own stand-alone library. This allows you to pick which libraries you want to use, and completely ignore the ones you don't.  

Each library's folder will follow the same general structure for their directory tree, making it easier for you to get code from this repository. Here is the directory tree for an fictional example, called Library:  

``` 
Library             The library's directory. It shares its name with the library.
├───Examples            A directory containing example files.
│   ├───ex1.html            An example file depicting how to use the library.
│   ├───ex2.html            Another example file, if necessary.
│   └───...                 Additional example files following the above pattern, if necessary.
├───Library.js          The library. It shares its name with the directory.
├───TUTORIAL.md         The file explaining how to use the specific library.
└───...                 Additional files, if necessary. These will be explained in TUTORIAL.md.
```

From these folders, you can download/copy the library of your choice and bring it directly into your own project. Once in your project, you can use the library as you would any other JS file.  

> **NOTE:** Some libraries are designed to work as ES6 modules. In order for these files to work correctly, you must host your project on a server. If you are using [Visual Studio Code](https://code.visualstudio.com/), I recommend Microsoft's [Live Preview extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) for creating a local server to preview pages.  

## What Libraries Does VanillibsJS Provide?  
The following are all the libraries that you can download from **VanillibsJS**:  
+ [HTMLElementBuilder](https://github.com/dylansward/VanillibsJS/tree/main/HTMLElementBuilder): Defines the `HTMLElementBuilder` class. This class is designed to be a wrapper for `HTMLElement` that allows `HTMLElement`'s methods to be called from the returns of one another. This grants users the ability to create a chain of method calls that can build a complex `HTMLElement` in a single statement.  

## Updates, Bugfixes, and New Features  
**VanillibsJS** is not a regularly developed project. Instead, it is something that I make improvements and expansions to while working on other projects. As a result, I cannot guarantee that changes will occur frequently.  

If you have a problem or suggestion, leave an issue on Github. In the meantime, however, feel free to make your own improvements and use/release them yourself.  

### Versioning  
Since VanillibsJS is a collection of stand-alone libraries, it does not have its own version. Instead, each library will have their own individual versions listed in their tutorials and their JS files. Even if a file itself does not change, its version will be updated to reflect the version of its  library.  

Versions for VanillibsJS will follow the format "Major.Minor.Patch".  