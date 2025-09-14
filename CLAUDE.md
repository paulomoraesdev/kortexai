# Project Overview

This project is an assistant that will be used to manage and organize all tasks and workflows i want to build to help my day

The ways the code will triggered can be:
- Through API routes. This project will provide routes that i can use to manual trigger or as webhooks
- Listeners. When the server is running, it will provide some listeners that will react to some kind of trigger (eg: Twitch.tv bot listening to my channel chat's messages)

# Code Style

- Use ES modules (import/export) syntax, not CommonJS (require())
- Destructure imports when possible (eg. import { foo } from 'bar')
- This project is 100% based on OOP
- Be sure to respect SOLID principles
- Be sure to apply design patterns from GoF when makes sense
- Use TypeScript for all new files (.ts extension)
- Implement proper typing for interfaces and classes
- Follow strict TypeScript configuration
- Follow JSDoc pattern for documentation, but document selectively:
  - Always document: public APIs, complex methods, classes with non-obvious purpose
  - Skip documentation: trivial constructors, simple getters/setters, obvious private properties
  - Keep documentation concise and functional, not educational
- Everything must be written in English. Even when the programmer is interacting with you in another languages, every word (in docs, code, .md files, etc) must be in English

# Workflow

- Be sure to typecheck when you're done making code changes
- Prefer running single tests, and not the whole test suite, for performance
- Never run bash commands when the goal is: install dependencies; create folder; create files; move files. If you need any of these actions, you must ask the programmer to do it manually before you continue
