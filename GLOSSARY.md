# Minty Glossary

**Declaration**: the place where a function, method, class or field is defined (`betOnPony(...) {`, `class Bet`).

**Call**: a use of a function or method, with or without parentheses (`inject(...)`, `this.betFailed.set(...)`, `expect(cart.add)`).
_Avoid_: invocation

**Type name**: the name of a class, interface, enum or type alias, wherever it appears: annotations, imports, `new`, `extends`, generic arguments.

**Built-in type**: a type the language provides as a word, not a name you declared (`void`, `boolean`, `string`, `number`).
_Avoid_: primitive (because `void` and `any` aren't primitives)

**Type parameter**: a generic placeholder declared by the code (`T` in `pick<T>`). It is different from a type name used as a generic argument (`User` in `Promise<User>`).

**Field**: a property declared on a class (`private readonly raceService = ...`).

**Signal field**: a field whose value is an Angular signal (`signal(...)`, `input(...)`, `computed(...)`).

**HTML tag**: an element name defined by HTML (`div`, `button`).

**Component tag**: an element name in a template that refers to a component (`app-pony`).
_Avoid_: custom element
