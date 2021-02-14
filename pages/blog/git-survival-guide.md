import BlogPost from '../../components/BlogPost';

export const meta = {
  published: true,
  publishedAt: '2021-02-14',
  title: 'Git Survival Guide',
  summary:
    'Learn the basics on working with Git so you can survive in the wild',
  image: '/images/blog.jpeg'
};

export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>;

![blog writing](/images/git_survival.jpeg)

If you are relatively new to git or even have some experience gained over the years, you know mastering git is not an easy task.
[Git](https://en.wikipedia.org/wiki/Git) is an awesome, very powerful source control tool to handle large projects, born in the heart of [Linux](https://en.wikipedia.org/wiki/Linux) development, created by Linus Torvalds himself.

As complex as it is (or as it needs to be). We need to understand some basics and identify the most common scenarios to survive the steep part of the curve, go to the wild and survive, so we can then continue to mastery!.

Let’s begin our survival guide with the common tasks we’ll face in the wild.

## Where am I?

At any time you’d want to know what’s the status of the changes you’re doing, the current branch, what’s on stage or in working directory. The first command for this endeavor is naturally `status`,

```
git status
```

This will show the changes made in the current directory and staging area.

Then we have `log`,

```
git log
```

This command will show you a list of committed snapshots. You can include the following modifiers,

- -n: Where n is the number of commits to show in screen.
- -p: Where p is for path of the changes in each commit.
- `<file>`: To specify the file on which you want to show its commit log history.

## Init and clone a repository

This is perhaps the first thing you’ll need to do. Git can be seen as a file-system with VCS capabilities, that takes snapshots of the changes we’re doing. So the first we need is to initialize a local repository. We can start a new project in a directory and init a repository as follows,

```
git init
```

On the other hand, we might need to just start working with an existing project or template in a server repository like [GitHub](https://github.com/). In this case, we can clone the repository into a local directory,

```
git clone <repo>
```

and then change our working directory to (`cd repo`).

## Add and commit changes

There is a difference between adding and committing in git. By adding changes you’re just caching changes into a mutable index (staging area) data structure in preparation for a commit. In contrast, committing is the process to “take a snapshot” of the contents of the staging area and save it into the Commit History, as illustrated in the following image
From now and on I’ll use “stage”, “staging area” and “staged snapshot” interchangeably.

Then, the usual cases are,

### Add changes to stage

- `git add <files>`: to add files to the staging area.
- `git add -A` or `git add .`: to add all the changes in the working directory to the staged snapshot.

### Commit changes

- `git commit`: Commits the changes in the staged snapshot. You can add `-m <comment>` to include a comment as part of the commit.
- `git commit -a`: To add all the changes from working directory into the staged snapshot and also commit the changes.

## Revert commited changes

If you want to revert committed changes there are 2 choices, you can go with `git reset` or can use `git revert`. Let's see the difference between them,

### `git reset`

This command is used to move along the commit history, so we can return to a previous commit before we introduced some issue by,

```
git reset HEAD~1
```

Or by any number of commits by setting the number after `~`.

By default `git reset` changes the staged snapshot in addition to moving the commit pointer in the commit history. But we can use the following modifiers to alter also working directory and stage,

- `--soft`: Only change the pointer to the commit in the history, but leaves the staged snapshot and working directory intact.
- `--mixed`: Default option. Staged snapshot gets updated but the working directory is left intact.
- `--hard`: The staged snapshot and the working directory are updated to the specified commit.

### Revert staged changes

As we saw before, to undo changes in the sating area, we can use `git reset` with `--mixed` (default) or `--hard` modifiers.

### Clean working directory

For just cleaning up the working directory, the best option we got is git clean. We can proceed as follows,

`git clean -n` to show what files are being removed, without actually deleting them.
`git clean -f` to remove the unstaged files. Note this action is not reversible.

### Save uncommited changes

n contrast, when we need to save uncommitted changes, there are 2 possibilities. If we want to commit changes, just do `git commit`.
If we don't want to commit, but still want to save staged changes, for later use, like local configurations files, we can stash these changes,

```
git stash save
```

This command will save changed in the staging area into a stack and clean stage.
To get back stashed changes,

```
git stash pop
```

*Note that if we want to save temporary files for later, we always need to add them to stage with `git add`

## Who to blame?

Another useful command it Git is `git blame <file>`. It lets you know who made the changes over an specific file.

## Create new branch

In Git, we create new branches for any change we need to do, from a completely new feature to just fix a small bug. What it does is creating a new pointer to an existing commit.

To create a new branch we use `git branch <new-branch>`. This creates a new branch, but only that, it does not check out to that branch.
To checkout to the previously created branch: `git checkout <new-branch>`.
We can also use `-b` with `git checkout` to create a new branch and check out the branch in a single step. So we can go with,

```
git branch <new-branch> git checkout <new-branch>
```

or

```
git checkout -b <new-branch>
```

## Merging changes

When you’ve started working on a new feature or fixing a bug, as we saw, the git way is creating a new branch. When we are done with the changes in our branch, we can merge the branch to the original master or perhaps we need to take new additions from the original master branch into our branch. Whatever the case is, we have to options, “git merging” or “git rebasing”.

### Merge branches

The easiest of the two. The git operation of merge takes 2 different lines of development or branches with separate commit histories and combines them into a single new commit.
*Note as the commit histories combine, it also populates the log history with the commits from both branches.

Let’s suppose we want to incorporate changes from master branch into our branch,

```
git checkout <feature> git merge master
```

Or, in a single line:

```
git merge master <feature>
```

### rebase branches

Rebase is the process of taking the commits from our branch, find the common commit from both branches and add them right after. Thus keeping a single commit history, in contrast with the combined history we get with `git merge`.
To rebase our `<feature>` branch onto master,

```
git checkout <feature> git rebase master
```

*Note that rebasing might generate more conflicts when master includes changes in the same files as our branch.

## Loading data from remote server

When you need to load changes from remote servers, there’s basically 2 commands useful, `git fetch` and `git pull`.

- `git fetch <remote>`: Or just git fetch when you want to import from master. This command imports commits from the remote server into your local commit history at your local repository. However it doesn't updates the staged snapshot nor the working directory. This is perfect to just review what other's people changes are and how is the impact on yours.

- `git pull <remote>`: Similar to fetch, it also imports commits from remote server, but this time updates the staged snapshot and working directory all at once. This is useful when you want to be up to date with everyone else's changes.

## Saving changes to remote server.

Finally, to save all the commits you’ve made in your local repository to remote server, the command to use is `git pull`.

`git commit`: Commits the changes from your local repository to the remote server you're looking at, or more generally,

`git commit <remote> <brach>` to push the changes to remote `<branch>`

### Thank you for reading


This completes our survival guide in Git!.
Thanks for reading this post!. See you next time and keep coding!. Take care.
