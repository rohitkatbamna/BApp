## File structure is something to think about but following is how the file should be group and take together.

## Absences of index file makes App file the main root in theory should not be touched.

## I dont like index style of import from folder which makes folder name of the file index and all its stuff will not be used from now.

### Following how is files will be stuctured

- one main folder src will contain the four folder mentioned below and also a assets folder.

- Four folders will be thier components, screens, navigation ,styles and api that are constant and to be used every where.

## Each folder are structured to serve its purpose

- components folders will always have reusable components to be called a lot of time

- screens will have folders futher because it is to segregate screen even further this provision has to done because of web building complexity and name sugest will always have the main screens that will be preivewed on screen

- nagivation file will always contain main navigation and its nested navigation. app will just take this navigation and render it.

- styles will always contain file that will be constant color like stuff.

- api will always contain fetch api files.

## the sturture will change further if their is more stuff like Context api.

# JavaScript files that hold anything will always be camelcasing

# react components will always have two capital word this will be decided further.

# IT IS HIGHLY SUSGESTED TO USE TYPESCRIPT FOR STRONGE TYPE CHECKKING AND REDUX TOOLKIT TO MANGAGE STATE THIS TWO WILL MAKE SCALING OF THE WEB HIGHLY EASY IF NOT PROBLEM WILL OCCUR BADLY WHEN WE TRY TO SCALE IT EVEN FURTHER.
