# Intro to Algorithms

An algorithm is a set of specific instructions for a computer to solve a
broad class of problems.

Think about it like a recipe for making cake, where the chef follows
very specific instructions and never deviates. Computers aren't very
creative chefs, and follow recipes precisely and without deviation.

## Objectives:

### Develop a basic understanding of how to think about algorithms

#### Write some basic algorithms:

* Search for an element in an array
  * Search for an element in an array, but better, as long as it's
    sorted
* Sort an array with the most trivial algorithm
  * Sort an array with a slightly faster algorithm

### Understand how to describe some algorithms in terms of their Big-O notation

## In groups: Revisit an array of numbers

### Display all the elements of an array containing the elements: `2, 10, -1, 0, 200, -150, 1000, 1000, -2500, 35, 4`

## Let's find the index of `200` in the same array of elements

#### We'll use stickies first, and eventually progress to code.

#### What did we have to do to find the index of the element? 

## Big-O

## Let's destroy a white pages while trying to find a listing

### What is different about the white pages from the array at a fundamental level?
> These aren't the droids you're looking for:
> "One has numbers, and the other has names"

## Sorting

Let's sort the array.

### Bubble sort

Worst case: O(n^2/2)

### Insertion sort

A little better: O(n^2/4)

## So now that it's sorted, let's find an element again, but quicker

### Divide and conquer (Binary search)

#### A refresher on logarithms: 

Remember the exponent calculator function we had written for our first ever
homework? :)

The logarithm of a number is the exponent to which another value,
the base, must be raised to produce that number. 

![y = b^x <=> x = logb(y)](http://www.sciweavers.org/upload/Tex2Img_1412290201/render.png)

So, for example:

![128 = 2^{7} \Leftrightarrow 7 = log_{2}(128)](http://www.sciweavers.org/upload/Tex2Img_1412290291/render.png)

O(log n), which actually is ![O(log_{2}n)](http://www.sciweavers.org/upload/Tex2Img_1412290577/render.png) or O(lg n), but base 2 is irrelevant in practice
