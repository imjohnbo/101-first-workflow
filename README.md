# First Workflow

Hello, [Open Source 101](https://opensource101.com/events/columbia-2020/)! :wave:

## 🎯 Goal

Show GitHub Actions...in action :wink:

## 💻 Steps

#### 1. Use GitHub Actions to [lint](https://en.wikipedia.org/wiki/Lint_(software)) code using [`standard`](https://standardjs.com/).

<details><summary>Solution</summary>

```yml
# lint.yml
# This is a YAML file. Quickstart: https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes

# Name of workflow (optional)
name: Lint

# Event that triggers the workflow (eg. push, issues, pull_request)
on: [push]

# List of jobs, which run in parallel on different VMs
jobs:
  # Can be named whatever you'd like
  lint:
    # Which kind of runner to fetch
    runs-on: ubuntu-latest

    # List of steps, which run sequentially on the same VM
    steps:
    - id: checkout
      name: Checkout
      uses: actions/checkout@v2 # this uses the action at https://github.com/actions/checkout
      
    - id: standard
      name: Standard
      run: npx standard # this runs a shell command (bash is default)
```

</details>

#### 2. Become familiar with terminology and resources.

* [Documentation](https://help.github.com/en/actions)
  * [Events](https://help.github.com/en/actions/reference/events-that-trigger-workflows)
  * [Workflows](https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow)
  * [Actions](https://help.github.com/en/actions/building-actions/about-actions)
* [GitHub Marketplace](https://github.com/marketplace?type=actions)
* [Community Q&A](https://github.community/t5/GitHub-Actions/bd-p/actions)
