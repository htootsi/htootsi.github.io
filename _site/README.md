<img src=“assets/image/logo.png” />

Last Updated: June 5, 2014

Repository for http://www.helentootsi.com

Copyrighted Content ©

##Table of Contents

1.  [Making Edits](#edits)
2.  [Markdown Format](#markdown)
3.  [Committing Changes](#commit)
4.  [Further Information](#further)


## <a name="summary"><a/>Summary

The purpose of this document is to provide instruction and information into the structure and management of the GAR Reports.

## <a name="edits"><a/>Making Edits

To make edits to the documents, navigate through the repository above and click through the chapter name and to the document that needs editing. Once you click on the document you would like to edit you will see on the top right hand corner a panel of options where one reads "Edit." Click on "Edit" to make modifications to the document.

<img src="/_assets/readme/readme_figure_02.png" title="Edit" width="350px" />

You can work in full screen mode to make editing clearer and using bigger fonts. 

<img src="/_assets/readme/readme_figure_03.png" title="Full Screen" width="250px" />

To exit out of the full screen mode, click the *Exit Zen Mode* button on the top right hand corner.

<img src="/_assets/readme/readme_figure_04.png" title="Exit Full Screen" width="150px" />

Within the black code window, you can use the **CTRL+F** command for Windows or **⌘+F** command for Windows to Search within the document.

<img src="/_assets/readme/readme_figure_05.png" title="Search" width="450px" />

## <a name="markdown"><a/>Markdown Format

The website uses a markup called “markdown” in order to parse the content of the site.

###Headings

All headings must be separated and removed from the body text in all situations. This will allow for dynamic cross linking, consistent styling of all headings and a clear hierarchy. Under no circumstances can a Heading be simply bolded or underlined, this will mean the Heading will not show up on the Table of Contents.

At this time, only three heading levels are selected to appear in the Table of Contents. Headings are denoted by placing "#" before the heading title. The more "#", the less important the heading:

```
#Heading Level 1    = Title of the Chapter
##Heading Level 2   = Major Chapter Section
###Heading Level 3  = Sub Heading
####Heading Level 4 = Minor Heading not in TOC

And so forth through Level 6
```

###Stylistic Elements (Body text ONLY)

Some items in the text will need to be bolded and italicised. In order to **BOLD** or _Italicise_ and item, you will need to wrap the text that requires this treatment as follows:

```
**BOLD**
_Italicise_
```

###Lists (Ordered & Unordered)

Listed elements will can be denoted as follows:

####Unordered Lists
```
+   Item 1
+   Item 2
+   Item 3
```
Will return:

+   Item 1
+   Item 2
+   Item 3

####Ordered Lists
```
1.  Item 1
2.  Item 2
3.  Item 3
```
Will return:

1.  Item 1
2.  Item 2
3.  Item 3

###Additional Reading
Additional information can be found at [http://daringfireball.net/projects/markdown/basics](http://daringfireball.net/projects/markdown/basics)

## <a name="commit"><a/>Committing Changes

Once you are finished with your changes, at the bottom of the page you will see a box that says *Commit Changes*. Type in your update and and additional information you would like to make and then click on the green *Commit Changes* button. Committing the file will update the site, the changes will be saved immediately.

<img src="/_assets/readme/readme_figure_06.png" alt="Github Commit" />

If there is an error, Github will inform you via email of through a pop up when you try to commit. Instructions to fix the error will be included in this message.