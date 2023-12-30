---

layout: post
comments: true

aside: true
title:  "Git Fetch vs Pull"
date:   2023-12-29
updated-date: 2023-12-29
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "The difference between the git Fetch and Pull."
excerpt_separator: <!--more-->
name: git-fetch-pull

cover-image:
    url: /assets/img/thumb/git-fetch-pull.svg
    alt: Fetch vs Pull
    title: Fetch vs Pull
images: 
  - url: /assets/img/thumb/git-fetch-pull.svg
    alt: Fetch vs Pull
    title: Fetch vs Pull
    max-width: 250px
---

The difference between git Fetch and Pull.

<!--more-->

---
`git fetch` and `git pull` are both Git commands that involve retrieving updates from a remote repository, but they have some key differences in how they operate.

---

# What does `git fetch` do?

Fetching is the operation of retrieving new changes from a remote repository without merging them into your working branch.

When you run `git fetch`, Git contacts the remote repository and fetches any new branches or changesets.

It updates the remote tracking branches (e.g., `origin/master`) in your local repository to reflect the state of the remote repository.

It does not modify your working directory or merge any changes into your local branch.

Example:
```bash
git fetch origin
```
--- 

# What does `git pull` do?

Pulling is a combination of fetching and merging. It fetches the changes from the remote repository and automatically merges them into your current branch.

It is essentially equivalent to running `git fetch` followed by `git merge`.

If you have local changes in your working branch, `git pull` will attempt to merge the remote changes with your local changes.

If there are conflicts, you'll need to resolve them.

Example:
```bash
git pull origin master
```
---

## When should you `fetch`

If you want to see what changes are available in the remote repository without merging them into your working branch immediately, you can use `git fetch`. 

## When should you `pull`

If you want to fetch the changes and merge them into your working branch in one step, you can use `git pull`. 

---

The choice between them often depends on your workflow and whether you want more control over the merging process.


