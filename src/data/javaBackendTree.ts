export const javaBackendTree = {
    name: "Java Backend",
    children: [
        {
            name: "Core Foundations",
            children: [
                {
                    name: "Java",
                    children: [
                        {
                            "name": "Fundamentals",
                            "children": [
                                {
                                    "name": "Data Types",
                                    "children": [
                                        {
                                            "name": "Primitive Types",
                                            "children": [
                                                {
                                                    "name": "Definition",
                                                    "children": [
                                                        { "name": "Store actual value directly" }
                                                    ]
                                                },
                                                {
                                                    "name": "Types",

                                                    "children": [
                                                        {
                                                            "name": "Integer Types",
                                                            "children": [
                                                                { "name": "byte (1 byte, range: -128 to 127)" },
                                                                { "name": "short (2 bytes, range: -32,768 to 32,767)" },
                                                                { "name": "int (4 bytes, range: -2^31 to 2^31-1) → default" },
                                                                { "name": "long (8 bytes, range: -2^63 to 2^63-1)" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Floating Types",
                                                            "children": [
                                                                { "name": "float (4 bytes, approx ±3.4E38, ~6-7 decimal digits)" },
                                                                { "name": "double (8 bytes, approx ±1.7E308, ~15 decimal digits) → default" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Character Type",
                                                            "children": [
                                                                { "name": "char (2 bytes, range: 0 to 65,535 → Unicode)" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Boolean Type",
                                                            "children": [
                                                                { "name": "boolean (true/false, size not JVM-defined)" }
                                                            ]
                                                        }
                                                    ]

                                                },
                                                {
                                                    "name": "Memory",
                                                    "children": [
                                                        { "name": "Stored in Stack" }
                                                    ]
                                                },
                                                {
                                                    "name": "Features",
                                                    "children": [
                                                        { "name": "Fixed size" },
                                                        { "name": "Faster access" },
                                                        { "name": "No methods" },
                                                        { "name": "Cannot be null" }
                                                    ]
                                                },
                                                {
                                                    "name": "Example",
                                                    "children": [
                                                        { "name": "int a = 10;" },
                                                        { "name": "double d = 99.9;" },
                                                        { "name": "boolean flag = true;" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non-Primitive Types (Objects / Reference Types)",
                                            "children": [
                                                {
                                                    "name": "Definition",
                                                    "children": [
                                                        { "name": "Store reference (address) to actual data" }
                                                    ]
                                                },
                                                {
                                                    "name": "Examples",
                                                    "children": [
                                                        { "name": "String (sequence of characters stored as object)" },
                                                        { "name": "Arrays (fixed-size collection of same-type elements)" },
                                                        { "name": "Classes (blueprint to create objects)" },
                                                        { "name": "Interfaces (contract defining methods without implementation)" }
                                                    ]
                                                },
                                                {
                                                    "name": "Memory",
                                                    "children": [
                                                        { "name": "Stack → reference" },
                                                        { "name": "Heap → actual object" }
                                                    ]
                                                },
                                                {
                                                    "name": "Features",
                                                    "children": [
                                                        { "name": "Dynamic size" },
                                                        { "name": "Have methods" },
                                                        { "name": "Can be null" },
                                                        { "name": "Slower than primitives" }
                                                    ]
                                                },
                                                {
                                                    "name": "Behavior",
                                                    "children": [
                                                        { "name": "Assignment copies reference (not value)" }
                                                    ]
                                                },
                                                {
                                                    "name": "Example",
                                                    "children": [
                                                        { "name": "String name = \"Raj\";" },
                                                        { "name": "int[] arr = {1,2,3};" }
                                                    ]
                                                },
                                                {
                                                    "name": "Special Note",
                                                    "children": [
                                                        { "name": "String is NOT primitive" },
                                                        { "name": "Stored as object in heap" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Core Understanding",
                                            "children": [
                                                { "name": "Primitive → value copy" },
                                                { "name": "Object → reference copy" }
                                            ]
                                        },
                                        {
                                            "name": "Wrapper Classes",
                                            "children": [
                                                {
                                                    "name": "Purpose",
                                                    "children": [
                                                        { "name": "Convert primitive → object" },
                                                        { "name": "Needed for collections" }
                                                    ]
                                                },
                                                {
                                                    "name": "Mapping",
                                                    "children": [
                                                        { "name": "int → Integer" },
                                                        { "name": "double → Double" },
                                                        { "name": "char → Character" },
                                                        { "name": "boolean → Boolean" }
                                                    ]
                                                },
                                                {
                                                    "name": "Example",
                                                    "children": [
                                                        { "name": "Integer x = 10;" }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Type Casting & Conversion",
                                    "children": [
                                        {
                                            "name": "\"Converting one data type into another\""
                                        },
                                        {
                                            "name": "Types of Casting",
                                            "children": [
                                                {
                                                    "name": "Implicit Casting (Widening)",
                                                    "children": [
                                                        { "name": "\"Automatic conversion from smaller → larger type\"" },
                                                        { "name": "byte → short → int → long → float → double" },
                                                        { "name": "No data loss" },
                                                        { "name": "Done automatically by JVM" },
                                                        { "name": "Ex: int a = 10; double d = a;" }
                                                    ]
                                                },
                                                {
                                                    "name": "Explicit Casting (Narrowing)",
                                                    "children": [
                                                        { "name": "\"Manual conversion from larger → smaller type\"" },
                                                        { "name": "Syntax: (targetType) value" },
                                                        { "name": "May cause data loss" },
                                                        { "name": "Must be done explicitly by programmer" },
                                                        { "name": "Ex: double d = 10.5; int a = (int) d;" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Type Conversion (Automatic Promotions)",
                                            "children": [
                                                { "name": "\"Automatic type change during expressions\"" },
                                                { "name": "Smaller types promoted to int in expressions" },
                                                { "name": "Result promoted to largest type in expression" },
                                                { "name": "ex: byte a = 10, b = 20; int result = a + b;" }
                                            ]
                                        },
                                        {
                                            "name": "Special Cases",
                                            "children": [
                                                {
                                                    "name": "Overflow",
                                                    "children": [
                                                        { "name": "\"Value exceeds range after casting\"" },
                                                        { "name": "Rule: if value > 127 → subtract 256; if value < -128 → add 256" },
                                                        { "name": "ex: int x = 130; byte y = (byte) x; result = -126" }
                                                    ]
                                                },
                                                {
                                                    "name": "Precision Loss",
                                                    "children": [
                                                        { "name": "\"Decimal part lost when converting to integer\"" },
                                                        { "name": "ex: double d = 9.99; int x = (int) d; result = 9" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Core Understanding",
                                            "children": [
                                                { "name": "Widening → safe, automatic" },
                                                { "name": "Narrowing → risky, manual" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Variable Scope & Lifetime",
                                    "children": [
                                        {
                                            "name": "Definition",
                                            "children": [
                                                { "name": "Scope → where variable can be accessed" },
                                                { "name": "Lifetime → how long variable exists in memory" }
                                            ]
                                        },
                                        {
                                            "name": "Types of Variables",
                                            "children": [
                                                {
                                                    "name": "Local Variables",
                                                    "children": [
                                                        { "name": "\"Declared inside methods/blocks\"" },
                                                        { "name": "Scope — Accessible only within that block" },
                                                        { "name": "Lifetime — Exists during method execution only" },
                                                        { "name": "Stored in Stack" },
                                                        { "name": "No default value (must initialize)" },
                                                        { "name": "Ex: void func() { int x = 10; }" }

                                                    ]
                                                },
                                                {
                                                    "name": "Instance Variables (Non-static)",
                                                    "children": [
                                                        { "name": "\"Declared inside class but outside methods\"" },
                                                        { "name": "Scope — Accessible through object" },
                                                        { "name": "Lifetime — Exists as long as object exists" },
                                                        { "name": "Stored in Heap (inside object)" },
                                                        { "name": "Default Value — Gets default values (0, null, false)" },
                                                        { "name": "Ex: class A { int x; }" }
                                                    ]
                                                },
                                                {
                                                    "name": "Static Variables (Class Variables)",
                                                    "children": [
                                                        { "name": "\"Declared with static keyword\"" },
                                                        { "name": "Scope — Accessible via class name" },
                                                        { "name": "Lifetime — Exists for entire program runtime" },
                                                        { "name": "Stored in Method Area" },
                                                        { "name": "Default Value — Gets default values (0, null, false)" },
                                                        { "name": "Ex: class A { static int count; }" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Block Scope",
                                            "children": [
                                                { "name": "\"Variables declared inside {} block\"" },
                                                { "name": "Accessible only within that block" },
                                                { "name": "Ex: if(true) { int x = 5; } , x not accessible outside" }
                                            ]
                                        },
                                        {
                                            "name": "Core Understanding",
                                            "children": [
                                                { "name": "Local → stack, short life" },
                                                { "name": "Instance → heap, tied to object" },
                                                { "name": "Static → method area, global life" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Constants (final keyword)",
                                    "children": [
                                        { "name": "\"Variables whose value cannot be changed once assigned\"" },
                                        { "name": "Declared using final keyword" },
                                        { "name": "\"final dataType variableName = value;\"" },

                                        {
                                            "name": "Final Variables",
                                            "children": [
                                                { "name": "\"Value cannot be reassigned after initialization\"" },
                                                { "name": "Primitive → value cannot change" },
                                                { "name": "Reference → reference cannot change" },
                                                {
                                                    "name": "Example",
                                                    "children": [
                                                        { "name": "final int x = 10;" },
                                                        { "name": "x = 20; → ❌ Error (cannot reassign)" }
                                                    ]
                                                }
                                            ]
                                        },

                                        {
                                            "name": "Final Methods",
                                            "children": [
                                                { "name": "\"Cannot be overridden in subclass\"" },
                                                { "name": "Can be inherited but not modified" },
                                                {
                                                    "name": "Example",
                                                    "children": [
                                                        { "name": "class A { final void show() {} }" },
                                                        { "name": "class B extends A { void show() {} } → ❌ Error" }
                                                    ]
                                                }
                                            ]
                                        },

                                        {
                                            "name": "Final Classes",
                                            "children": [
                                                { "name": "\"Cannot be inherited (no subclass allowed)\"" },
                                                { "name": "Prevents modification by not allowing inheritance" },
                                                {
                                                    "name": "Example",
                                                    "children": [
                                                        { "name": "final class A {}" },
                                                        { "name": "class B extends A {} → ❌ Error (cannot inherit)" }
                                                    ]
                                                }
                                            ]
                                        },

                                        {
                                            "name": "Final with Reference Types",
                                            "children": [
                                                { "name": "Reference cannot change" },
                                                { "name": "Object data can still change" },
                                                {
                                                    "name": "Example",
                                                    "children": [
                                                        { "name": "final int[] arr = {1,2,3};" },
                                                        { "name": "arr[0] = 10; → ✅ Allowed (data change)" },
                                                        { "name": "arr = new int[]{4,5,6}; → ❌ Error (reference change)" }
                                                    ]
                                                }
                                            ]
                                        },

                                        {
                                            "name": "Initialization Cases",
                                            "children": [
                                                { "name": "Immediate → final int x = 10;" },
                                                { "name": "Constructor → final int x; assigned inside constructor" }
                                            ]
                                        },

                                        {
                                            "name": "Core Understanding",
                                            "children": [
                                                { "name": "final → cannot reassign" },
                                                { "name": "Primitive → value fixed" },
                                                { "name": "Object → reference fixed, data mutable" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "static Keyword",
                                    "children": [
                                        {
                                            "name": "Static Variables",
                                            "children": [
                                                { "name": "\"Class-level variables shared across ALL instances\"" },
                                                { "name": "Memory allocated once at class load time" },
                                                { "name": "Accessed via ClassName.variable" },
                                                {
                                                    "name": "Ex:-\n\nclass Car {\n  static int totalCars = 0;\n  int speed;\n\n  Car() {\n    totalCars++; // shared across all instances\n  }\n}\n\nCar c1 = new Car();\nCar c2 = new Car();\nSystem.out.println(Car.totalCars); // 2"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Static Methods",
                                            "children": [
                                                { "name": "\"Can be called without object instantiation\"" },
                                                { "name": "Cannot access instance variables or methods" },
                                                { "name": "Can access only static members" },
                                                { "name": "Accessed via ClassName.method()" },
                                                {
                                                    "name": "Ex:-\n\nclass MathOps {\n  static int add(int a, int b) {\n    return a + b;\n  }\n}\n\nint result = MathOps.add(5, 3); // no object needed"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Static Blocks",
                                            "children": [
                                                { "name": "\"Executed when class is loaded (before main)\"" },
                                                { "name": "Useful for one-time initialization" },
                                                { "name": "Executed before constructors" },
                                                {
                                                    "name": "Ex:-\n\nclass MyClass {\n  static {\n    System.out.println(\"Class loaded!\");\n  }\n}\n\nMyClass m = new MyClass(); // prints \"Class loaded!\" first"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "When to Use static",
                                            "children": [
                                                { "name": "Shared resources (counters, configs, utilities)" },
                                                { "name": "Utility methods (Math.sqrt(), Arrays.sort())" },
                                                { "name": "NOT for instance-specific data" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Operators",
                                    "children": [
                                        {
                                            "name": "Classification (by operands)",
                                            "children": [
                                                {
                                                    "name": "Unary Operators",
                                                    "children": [
                                                        { "name": "\"Operate on single operand\"" },
                                                        { "name": "++, --, !, +, -" },
                                                        { "name": "Ex: int a = 5; a++; boolean b = !true;" }
                                                    ]
                                                },
                                                {
                                                    "name": "Binary Operators",
                                                    "children": [
                                                        { "name": "\"Operate on two operands\"" },
                                                        { "name": "+, -, *, /, %, ==, >, <, &&, ||" },
                                                        { "name": "Ex: int sum = 5 + 3; boolean res = (a > b);" }
                                                    ]
                                                },
                                                {
                                                    "name": "Ternary Operator",
                                                    "children": [
                                                        { "name": "\"Operate on three operands\"" },
                                                        { "name": "condition ? value1 : value2" },
                                                        { "name": "Ex: int max = (a > b) ? a : b;" }
                                                    ]
                                                }
                                            ]
                                        },

                                        {
                                            "name": "Types of Operators",
                                            "children": [
                                                {
                                                    "name": "Arithmetic",
                                                    "children": [
                                                        { "name": "+, -, *, /, %" },
                                                        { "name": "Ex: int a = 10 + 5;" }
                                                    ]
                                                },
                                                {
                                                    "name": "Relational (Comparison)",
                                                    "children": [
                                                        { "name": "==, !=, >, <, >=, <=" },
                                                        { "name": "Return boolean result" },
                                                        { "name": "Ex: a > b" }
                                                    ]
                                                },
                                                {
                                                    "name": "Logical",
                                                    "children": [
                                                        { "name": "&&, ||, !" },
                                                        { "name": "Used with boolean expressions" },
                                                        { "name": "Ex: (a > 5 && b < 10)" }
                                                    ]
                                                },
                                                {
                                                    "name": "Assignment",
                                                    "children": [
                                                        { "name": "=, +=, -=, *=, /=" },
                                                        { "name": "Ex: a += 5" }
                                                    ]
                                                },
                                                {
                                                    "name": "Increment / Decrement",
                                                    "children": [
                                                        { "name": "++, --" },
                                                        { "name": "Pre → ++a (increment then use)" },
                                                        { "name": "Post → a++ (use then increment)" }
                                                    ]
                                                },
                                                {
                                                    "name": "Ternary (Conditional)",
                                                    "children": [
                                                        { "name": "condition ? value1 : value2" }
                                                    ]
                                                }
                                            ]
                                        },

                                        {
                                            "name": "Core Understanding",
                                            "children": [
                                                { "name": "Unary → 1 operand" },
                                                { "name": "Binary → 2 operands" },
                                                { "name": "Ternary → 3 operands" },
                                                { "name": "Operators evaluate expressions and return values" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Control Flow",
                                    "children": [
                                        {
                                            "name": "Conditional Statements",
                                            "children": [
                                                { "name": "if, else if, else" },
                                                { "name": "Executes based on condition" },
                                                {
                                                    "name": "Ex:-\n\nint a = 10;\nif (a > 5) {\n  System.out.println(\"Greater\");\n} else {\n  System.out.println(\"Smaller\");\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Switch",
                                            "children": [
                                                { "name": "Used for multiple conditions" },
                                                {
                                                    "name": "Ex:-\n\nint day = 2;\nswitch(day) {\n  case 1: System.out.println(\"Mon\"); break;\n  case 2: System.out.println(\"Tue\"); break;\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Loops",
                                            "children": [
                                                {
                                                    "name": "for loop",
                                                    "children": [
                                                        {
                                                            "name": "Ex:-\n\nfor(int i=0; i<5; i++) {\n  System.out.println(i);\n}"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "while loop",
                                                    "children": [
                                                        {
                                                            "name": "Ex:-\n\nint i = 0;\nwhile(i < 5) {\n  i++;\n}"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "do-while loop",
                                                    "children": [
                                                        { "name": "Runs at least once" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Control Statements",
                                            "children": [
                                                { "name": "break → exits loop" },
                                                { "name": "continue → skips iteration" }
                                            ]
                                        },
                                        {
                                            "name": "Core Understanding",
                                            "children": [
                                                { "name": "Controls execution flow of program" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Program Structure",
                                    "children": [
                                        {
                                            "name": "Main Method",
                                            "children": [
                                                { "name": "Entry point of Java program" },
                                                { "name": "Syntax: public static void main(String[] args)" }
                                            ]
                                        },
                                        {
                                            "name": "Basic Structure",
                                            "children": [
                                                {
                                                    "name": "Ex:-\n\nclass Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello World\");\n  }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Output",
                                            "children": [
                                                { "name": "System.out.println() → prints output" }
                                            ]
                                        },
                                        {
                                            "name": "Core Understanding",
                                            "children": [
                                                { "name": "Program starts from main()" },
                                                { "name": "Execution flows line by line" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Programming Paradigms",
                                    "children": [
                                        {
                                            "name": "Imperative (HOW to do)",
                                            "children": [
                                                {
                                                    "name": "Procedural",
                                                    "children": [
                                                        { "name": "\"Step-by-step instructions using functions\"" },
                                                        { "name": "Focus → sequence of operations" },
                                                        { "name": "State changes via variables" },
                                                        {
                                                            "name": "Ex:-\n\nint sum(int a, int b) {\n  return a + b;\n}\n\nint result = sum(2, 3);"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Object-Oriented (OOP)",
                                                    "children": [
                                                        { "name": "\"Organizes code using objects (data + behavior)\"" },
                                                        { "name": "Focus → modeling real-world entities" },
                                                        { "name": "Uses classes, objects, encapsulation" },
                                                        {
                                                            "name": "Ex:-\n\nclass Calculator {\n  int add(int a, int b) {\n    return a + b;\n  }\n}\n\nCalculator c = new Calculator();\nc.add(2, 3);"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                        ,
                                        {
                                            "name": "Declarative (WHAT to do)",
                                            "children": [
                                                {
                                                    "name": "Functional",
                                                    "children": [
                                                        { "name": "\"Describe result using pure functions\"" },
                                                        { "name": "Avoids changing state (immutability)" },
                                                        { "name": "Pure functions → same input always gives same output ,no side effects (does not modify external variables or state." },
                                                        { "name": "Uses expressions instead of statements, statement means something which do not returns a value." },
                                                        {
                                                            "name": "Ex:-\n\nList<Integer> nums = List.of(1,2,3);\nint sum = nums.stream()\n  .map(x -> x * 2)\n  .reduce(0, (a,b) -> a + b);"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Logic",
                                                    "children": [
                                                        { "name": "\"Define facts and rules; system derives conclusions\"" },
                                                        { "name": "Focus → relationships and conditions, not execution steps" },
                                                        { "name": "System performs reasoning (deduction)" },
                                                        { "name": "Used in AI, rule engines, knowledge systems" },
                                                        {
                                                            "name": "Ex:-\n\n// Facts\nparent(john, mary).\nparent(mary, sam).\n\n// Rule\ngrandparent(X, Y) :- parent(X, Z), parent(Z, Y).\n\n// Meaning:\n// If X is parent of Z and Z is parent of Y\n// then X is grandparent of Y\n\n// Result inferred:\n// grandparent(john, sam)"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Other Paradigms",
                                            "children": [
                                                {
                                                    "name": "Event-Driven",
                                                    "children": [
                                                        { "name": "Code runs in response to events (click, request)" },
                                                        {
                                                            "name": "Ex:-\n\nbutton.addEventListener(\"click\", () -> {\n  System.out.println(\"Clicked\");\n});"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Concurrent / Parallel",
                                                    "children": [
                                                        { "name": "Multiple tasks executing simultaneously" },
                                                        {
                                                            "name": "Ex:-\n\nnew Thread(() -> {\n  System.out.println(\"Running\");\n}).start();"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Core Understanding",
                                            "children": [
                                                { "name": "Procedural → how step-by-step execution works" },
                                                { "name": "OOP → how objects interact" },
                                                { "name": "Functional → how result is computed without state" },
                                                { "name": "Logic → what rules define solution" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "JVM Architecture (JDK, JRE, JVM)",
                            children: [
                                {
                                    name: "JDK (Java Development Kit)",
                                    children: [
                                        {
                                            name: "Development Tools",
                                            children: [
                                                { name: "javac (compiler) — converts .java source code into .class bytecode" },
                                                { name: "jar (packaging tool) — packages multiple class files into a single archive (JAR)" },
                                                { name: "jdb (debugger) — used to debug Java programs step-by-step" },
                                                { name: "jstack, jmap, jcmd (monitoring tools) — used for analyzing JVM memory, threads, and performance" }
                                            ]
                                        },
                                        {
                                            name: "JRE (Java Runtime Environment)",
                                            children: [
                                                {
                                                    name: "Standard Libraries",
                                                    children: [
                                                        { name: "java.lang — core classes like Object, String, Math" },
                                                        { name: "java.util — utility classes like collections, Scanner, Date" },
                                                        { name: "java.io — input/output operations (files, streams)" }
                                                    ]
                                                },

                                                {
                                                    name: "JVM (Java Virtual Machine)",
                                                    children: [
                                                        {
                                                            name: "Class Loading & Lifecycle",
                                                            children: [
                                                                {
                                                                    name: "Phases",
                                                                    children: [
                                                                        {
                                                                            name: "Loading",
                                                                            children: [
                                                                                { name: "Reads .class file into memory" },

                                                                                {
                                                                                    name: "Types of ClassLoaders",
                                                                                    children: [
                                                                                        {
                                                                                            name: "Bootstrap ClassLoader",
                                                                                            children: [
                                                                                                { name: "Loads core JDK classes (java.lang, java.util)" },
                                                                                                { name: "Examples: String, Object, ArrayList" }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            name: "Extension / Platform ClassLoader",
                                                                                            children: [
                                                                                                { name: "Loads platform libraries" },
                                                                                                { name: "Examples: javax.*, java.sql.*" }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            name: "Application ClassLoader",
                                                                                            children: [
                                                                                                { name: "Loads user-defined classes" },
                                                                                                { name: "Examples: Main, UserService, Cat" }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                },

                                                                                {
                                                                                    name: "Parent Delegation Model",
                                                                                    children: [
                                                                                        { name: "Child asks parent first" },
                                                                                        { name: "Application → Platform → Bootstrap" },
                                                                                        { name: "Prevents duplicate loading" }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },

                                                                        {
                                                                            name: "Linking",
                                                                            children: [
                                                                                { name: "Verification — checks bytecode correctness" },
                                                                                { name: "Preparation — allocates memory for static variables" },
                                                                                { name: "Resolution — symbolic → actual references" }
                                                                            ]
                                                                        },

                                                                        {
                                                                            name: "Initialization",
                                                                            children: [
                                                                                { name: "Executes static blocks" },
                                                                                { name: "Initializes static variables" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            name: "Runtime Data Areas",
                                                            children: [
                                                                {
                                                                    name: "Heap",
                                                                    children: [
                                                                        { name: "Stores all objects, example: new User()" },
                                                                        { name: "Shared across threads" },

                                                                        {
                                                                            name: "Advanced (Garbage Collection)",
                                                                            children: [
                                                                                {
                                                                                    name: "Generations",
                                                                                    children: [
                                                                                        {
                                                                                            name: "Young Generation",
                                                                                            children: [
                                                                                                { name: "Eden — new objects", example: "new String(\"hi\") created here" },
                                                                                                { name: "Survivor S0 / S1 — objects moved after minor GC" }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            name: "Old Generation",
                                                                                            children: [
                                                                                                { name: "Long-lived objects", example: "objects referenced for a long time" }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },

                                                                {
                                                                    name: "Stack",
                                                                    children: [
                                                                        { name: "Stores method calls", example: "main() → foo() → bar()" },
                                                                        { name: "Stores local variables", example: "int x = 10" },
                                                                        { name: "Each thread has its own stack" },

                                                                        {
                                                                            name: "Advanced",
                                                                            children: [
                                                                                {
                                                                                    name: "Stack Frame",
                                                                                    children: [
                                                                                        { name: "Local Variables", example: "int x, String s" },
                                                                                        { name: "Operand Stack", example: "temporary calculations (x + y)" },
                                                                                        { name: "Return Address", example: "where to go after method ends" }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },

                                                                {
                                                                    name: "Method Area / Metaspace",
                                                                    children: [
                                                                        { name: "Stores class metadata", example: "structure of class User" },
                                                                        { name: "Stores static variables", example: "static int count" },
                                                                        { name: "Shared across threads" },

                                                                        {
                                                                            name: "Advanced",
                                                                            children: [
                                                                                { name: "Constant Pool", example: "String literals, constants" },
                                                                                { name: "Method definitions", example: "compiled bytecode of methods" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },

                                                                {
                                                                    name: "PC Register",
                                                                    children: [
                                                                        { name: "Points to current instruction", example: "which bytecode line is executing" },
                                                                        { name: "Each thread has its own PC" }
                                                                    ]
                                                                },

                                                                {
                                                                    name: "Native Method Stack",
                                                                    children: [
                                                                        { name: "Used for native calls (C/C++)", example: "calling OS-level code via JNI" }
                                                                    ]
                                                                }
                                                            ]
                                                        },

                                                        {
                                                            name: "Execution Engine",
                                                            children: [
                                                                { name: "Interpreter — line-by-line execution" },
                                                                { name: "JIT Compiler — optimized execution" }
                                                            ]
                                                        },

                                                        {
                                                            name: "Garbage Collection",
                                                            children: [
                                                                { name: "Removes unused objects from Heap" }
                                                            ]
                                                        },

                                                        {
                                                            name: "JNI",
                                                            children: [
                                                                { name: "Connects Java with native (C/C++) code" },
                                                                {name: "Allows calling OS-level libraries or legacy code as OS is written in C/C++"},
                                                                {name: "JNI stops JVM for some time to execute native code and then resumes JVM execution."}
                                                            ]
                                                        }
                                                    ]
                                                }

                                            ]
                                        }


                                    ]
                                }
                            ]
                        },
                        {
                            name: "OOP",
                            children: [
                                {
                                    "name": "Class & Object",
                                    "children": [
                                        {
                                            "name": "Class",
                                            "children": [
                                                { "name": "\"Blueprint to create objects\"" },
                                                { "name": "Defines properties (variables) and behavior (methods)" },
                                                {
                                                    "name": "Ex:-\n\nclass Car {\n  int speed;\n\n  void drive() {\n    System.out.println(\"Driving at \" + speed);\n  }\n}\n\nCar c = new Car();\nc.speed = 100;\nc.drive();"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Object",
                                            "children": [
                                                { "name": "\"Instance of a class\"" },
                                                { "name": "Occupies memory in Heap" },
                                                { "name": "Accesses class properties using reference" },
                                                {
                                                    "name": "Ex:-\n\nCar c = new Car();\nc.speed = 100;\nc.drive();"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Memory Understanding",
                                            "children": [
                                                { "name": "Object → Heap (actual data)" },
                                                { "name": "Reference → Stack (points to Heap)" },
                                                { "name": "new keyword → allocates memory in Heap" }
                                            ]
                                        },
                                        {
                                            "name": "Core Understanding",
                                            "children": [
                                                { "name": "Class → design/blueprint" },
                                                { "name": "Object → real entity/instance" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Encapsulation",
                                    "children": [
                                        { "name": "\"Binding data and methods into a single unit (class)\"" },
                                        { "name": "Data hiding using private variables" },
                                        { "name": "Access controlled using getters/setters" },
                                        {
                                            "name": "Access Modifiers",
                                            "children": [
                                                { "name": "public — accessible everywhere" },
                                                { "name": "private — accessible only within the class" },
                                                { "name": "protected — accessible in same package + subclasses" },
                                                { "name": "package-private (default) — accessible only in same package" }
                                            ]
                                        },
                                        { "name": "Benefits: Data security, maintainability, controlled access" },
                                        {
                                            "name": "Ex:-\n\nclass Person {\n  private int age;\n\n  public void setAge(int age) {\n    if (age > 0) this.age = age;\n  }\n\n  public int getAge() {\n    return age;\n  }\n}\n\nPerson p = new Person();\np.setAge(25);\nSystem.out.println(p.getAge());"
                                        }
                                    ]
                                },
                                {
                                    "name": "Inheritance",
                                    "children": [
                                        { "name": "\"Acquiring properties and behavior of another class\"" },
                                        { "name": "Promotes code reuse" },
                                        { "name": "Achieved using \"extends\" keyword" },
                                        {
                                            "name": "Types of Inheritance",
                                            "children": [
                                                { "name": "Single — one parent, one child" },
                                                { "name": "Multilevel — chain of inheritance (A→B→C)" },
                                                { "name": "Hierarchical — multiple children from one parent" },
                                                { "name": "Java does NOT support multiple inheritance\n with classes (uses interfaces)" },
                                                {
                                                    "name": "What is Diamond Problem?",
                                                    "children": [
                                                        { "name": "\"Occurs in multiple inheritance when same base class is inherited through multiple paths\"" },
                                                        { "name": "Leads to ambiguity in inherited state (multiple copies of same parent)" },
                                                        { "name": "Not just method conflict, but memory/state duplication issue" },
                                                        {
                                                            "name": "Structure",
                                                            "children": [
                                                                { "name": "A → base class" },
                                                                { "name": "B, C → inherit from A" },
                                                                { "name": "D → inherits from B and C" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Problem",
                                                            "children": [
                                                                { "name": "D gets A via B and C → duplicate A" },
                                                                { "name": "Which instance of A should D use?" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Java Solution",
                                                            "children": [
                                                                { "name": "No multiple inheritance for classes" },
                                                                { "name": "Interfaces avoid state duplication" },
                                                                { "name": "Must explicitly resolve method conflicts" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Ex:-\n\ninterface A {\n  default void show() { System.out.println(\"A\"); }\n}\n\ninterface B extends A {\n  default void show() { System.out.println(\"B\"); }\n}\n\ninterface C extends A {\n  default void show() { System.out.println(\"C\"); }\n}\n\nclass D implements B, C {\n  public void show() {\n    B.super.show(); // explicit resolution\n  }\n}"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "\"super\" & \"this\" Keywords",
                                            "children": [
                                                {
                                                    "name": "super() → calls parent constructor",
                                                    "children": [
                                                        { "name": "Called automatically by Java if not written explicitly" },
                                                        { "name": "Ensures parent part of object is created before child" },

                                                        {
                                                            "name": "Ex 1 (implicit super):-\n\nclass A {\n  A() { System.out.println(\"A constructor\"); }\n}\n\nclass B extends A {\n  B() {\n    // super(); ← implicitly called\n    System.out.println(\"B constructor\");\n  }\n}\n\n// Output:\n// A constructor\n// B constructor"
                                                        },

                                                        {
                                                            "name": "Ex 2 (passing parameter):-\n\nclass A {\n  String name;\n\n  A(String name) {\n    this.name = name;\n  }\n\n  void show() {\n    System.out.println(\"Name: \" + name);\n  }\n}\n\nclass B extends A {\n  B() {\n    super(\"Raj\"); // passing value to parent\n  }\n}\n\n// Usage:\n// B obj = new B();\n// obj.show();\n\n// Output:\n// Name: Raj"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "super.method() → calls parent method",
                                                    "children": [
                                                        {
                                                            "name": "Ex:-\n\nclass A {\n  void show() { System.out.println(\"A show\"); }\n}\n\nclass B extends A {\n  void show() {\n    super.show();\n    System.out.println(\"B show\");\n  }\n}"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "this() → calls same class constructor",
                                                    "children": [
                                                        {
                                                            "name": "Ex:-\n\nclass A {\n  A() {\n    this(10);\n    System.out.println(\"Default constructor\");\n  }\n\n  A(int x) {\n    System.out.println(\"Parameterized: \" + x);\n  }\n}\n\n// Usage:\n// new A();\n\n// Output:\n// Parameterized: 10\n// Default constructor"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "this.property → refers to instance variable",
                                                    "children": [
                                                        {
                                                            "name": "Ex:-\n\nclass A {\n  int x;\n\n  A(int x) {\n    this.x = x;\n  }\n}"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Constructor Chaining",
                                            "children": [
                                                {
                                                    "name": "Passing control from child to parent constructor",
                                                    "children": [
                                                        {
                                                            "name": "Ex:-\n\nclass A {\n  A() { System.out.println(\"A\"); }\n}\n\nclass B extends A {\n  B() {\n    super();\n    System.out.println(\"B\");\n  }\n}"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "super() must be first statement in child constructor",
                                                    "children": [
                                                        {
                                                            "name": "Ex:-\n\nclass A {\n  A() {}\n}\n\nclass B extends A {\n  B() {\n    // super(); must be first\n    System.out.println(\"Invalid if before super\");\n  }\n}"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Initialization order: Parent → Child",
                                                    "children": [
                                                        {
                                                            "name": "Ex:-\n\nclass A {\n  A() { System.out.println(\"A constructor\"); }\n}\n\nclass B extends A {\n  B() { System.out.println(\"B constructor\"); }\n}\n\n// Output:\n// A constructor\n// B constructor"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Ex:-\n\nclass Animal {\n  void sound() {\n    System.out.println(\"Animal makes sound\");\n  }\n}\n\nclass Dog extends Animal {\n  void bark() {\n    System.out.println(\"Dog barks\");\n  }\n}\n\nDog d = new Dog();\nd.sound(); // inherited\nd.bark();"
                                        }
                                    ]
                                },
                                {
                                    "name": "Polymorphism",
                                    "children": [
                                        { "name": "\"One entity, many forms\"" },
                                        { "name": "Same method behaves differently based on context" },
                                        {
                                            "name": "Types",
                                            "children": [
                                                {
                                                    "name": "Compile-time (Method Overloading)",
                                                    "children": [
                                                        { "name": "\"Same method name, different parameters\"" },
                                                        { "name": "Resolved at compile time" },
                                                        { "name": "Can differ by: number of parameters, type of parameters, order of parameters" },
                                                        { "name": "Return type alone is NOT enough for overloading" },
                                                        {
                                                            "name": "Ex:-\n\nclass MathOps {\n  int add(int a, int b) {\n    return a + b;\n  }\n\n  int add(int a, int b, int c) {\n    return a + b + c;\n  }\n\n  double add(double a, double b) {\n    return a + b;\n  }\n}\n\nMathOps m = new MathOps();\nm.add(2, 3);\nm.add(2, 3, 4);\nm.add(2.5, 3.5);"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Runtime (Method Overriding)",
                                                    "children": [
                                                        { "name": "\"Child class provides its own implementation of parent method\"" },
                                                        { "name": "Resolved at runtime (dynamic binding/late binding)" },
                                                        { "name": "@Override annotation (optional but recommended)" },
                                                        { "name": "Method signature must be EXACTLY same (name + parameters)" },
                                                        { "name": "Cannot override static, private, final methods" },
                                                        { "name": "Return type can be covariant (child type)" },
                                                        {
                                                            "name": "Ex:-\n\nclass Animal {\n  void sound() {\n    System.out.println(\"Animal sound\");\n  }\n}\n\nclass Dog extends Animal {\n  @Override\n  void sound() {\n    System.out.println(\"Dog barks\");\n  }\n}\n\nAnimal a = new Dog();\na.sound(); // Output: Dog barks (runtime decision)"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Method Binding",
                                            "children": [
                                                { "name": "Early Binding (compile-time) — static/private methods" },
                                                { "name": "Late Binding (runtime) — virtual methods, dynamic dispatch" },
                                                { "name": "Virtual Method — every public, non-static, non-final method" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Abstraction",
                                    "children": [
                                        { "name": "\"Hiding implementation details and showing only essential features\"" },
                                        { "name": "Focus on WHAT to do, not HOW to do" },
                                        { "name": "Achieved using abstract classes and interfaces" },
                                        {
                                            "name": "Types",
                                            "children": [
                                                {
                                                    "name": "Abstract Class",
                                                    "children": [
                                                        { "name": "\"Used as base for related classes (is-a relationship)\"" },
                                                        { "name": "Cannot be instantiated directly" },
                                                        { "name": "Can have constructors (for child initialization)" },
                                                        { "name": "Supports single inheritance only (extends)" },
                                                        { "name": "Can have instance variables (any access modifier)" },
                                                        { "name": "Can have abstract + concrete methods" },
                                                        { "name": "Methods can have any access modifier (public, private, protected)" },
                                                        { "name": "0-100% abstraction (partial)" },
                                                        {
                                                            "name": "Ex:-\n\nabstract class Animal {\n  int age;\n\n  abstract void sound(); // must implement\n\n  void sleep() { // concrete method\n    System.out.println(\"Sleeping\");\n  }\n}\n\nclass Dog extends Animal {\n  void sound() {\n    System.out.println(\"Dog barks\");\n  }\n}"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Interface",
                                                    "children": [
                                                        { "name": "\"Defines contract for classes (can-do behavior)\"" },
                                                        { "name": "Cannot be instantiated" },
                                                        { "name": "No constructors" },
                                                        { "name": "Supports multiple inheritance (implements)" },
                                                        { "name": "Only public static final variables (constants)" },
                                                        { "name": "Methods are public by default" },
                                                        { "name": "Can have abstract + default + static + private methods (Java 8+)" },
                                                        { "name": "100% abstraction (pure contract)" },
                                                        { "name": "Used for: contracts, APIs, loose coupling, multiple inheritance" },
                                                        {
                                                            "name": "Ex:-\n\ninterface Vehicle {\n  int MAX_SPEED = 120; // public static final\n\n  void start(); // abstract\n\n  default void fuelType() { // default method (Java 8+)\n    System.out.println(\"Petrol/Diesel\");\n  }\n\n  static void honk() { // static method (Java 8+)\n    System.out.println(\"Horn sound\");\n  }\n}\n\nclass Car implements Vehicle {\n  public void start() {\n    System.out.println(\"Car starts\");\n  }\n}"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Relationship Types",
                                    "children": [
                                        {
                                            "name": "Association (has-a relationship)",
                                            "children": [
                                                {
                                                    "name": "Aggregation (weak bond)",
                                                    "children": [
                                                        { "name": "Part can exist independently" },
                                                        { "name": "Whole doesn't create parts (passed from outside)" },
                                                        { "name": "Parts can be shared with other wholes" },
                                                        { "name": "Ex:-\n\nclass Student {\n  private String name;\n  public Student(String name) { this.name = name; }\n}\n\nclass University {\n  private List<Student> students;\n  public void addStudent(Student s) { // passed from outside\n    students.add(s);\n  }\n}\n\nStudent s = new Student(\"John\");\nUniversity uni = new University();\nuni.addStudent(s);\n// Student exists even if university dies" }
                                                    ]
                                                },
                                                {
                                                    "name": "Composition (strong bond)",
                                                    "children": [
                                                        { "name": "Part cannot exist without whole" },
                                                        { "name": "Whole creates and destroys parts" },
                                                        { "name": "Parts exclusive to whole (not shared)" },
                                                        { "name": "Ex:-\n\nclass Engine {\n  private int hp;\n  public Engine(int hp) { this.hp = hp; }\n}\n\nclass Car {\n  private Engine engine; // created inside\n  public Car(int hp) {\n    this.engine = new Engine(hp);\n  }\n}\n\nCar car = new Car(450);\n// When car dies, engine dies too" }
                                                    ]
                                                },
                                                {
                                                    "name": "Multiplicity (Cardinality)",
                                                    "children": [
                                                        { "name": "One-to-One (1:1)", "children": [{ "name": "One object A relates to one object B" }, { "name": "Ex: Person has 1 Passport" }] },
                                                        { "name": "One-to-Many (1:N)", "children": [{ "name": "One object A relates to many objects B" }, { "name": "Ex: College has many Students" }] },
                                                        { "name": "Many-to-One (N:1)", "children": [{ "name": "Many objects A relate to one object B" }, { "name": "Ex: Many Cities in one State" }] },
                                                        { "name": "Many-to-Many (M:N)", "children": [{ "name": "Many objects A relate to many objects B" }, { "name": "Ex: Many Students have many Teachers" }] }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Dependency (uses-a relationship)",
                                            "children": [
                                                { "name": "Temporary usage without permanent reference" },
                                                { "name": "No instance variable stored" },
                                                { "name": "Object passed as parameter or created locally" },
                                                { "name": "Ex:-\n\nclass EmailService {\n  public void send(String to, String msg) {\n    System.out.println(\"Email sent\");\n  }\n}\n\nclass Notification {\n  public void notify(EmailService service, String email) {\n    service.send(email, \"Alert\"); // used temporarily\n  }\n}\n\nNotification n = new Notification();\nEmailService es = new EmailService();\nn.notify(es, \"user@mail.com\");" }
                                            ]
                                        },
                                        {
                                            "name": "Inheritance (is-a relationship)",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "name": "Constructors",
                                    "children": [
                                        {
                                            "name": "Default Constructor",
                                            "children": [
                                                { "name": "\"No parameters, auto-generated by compiler\"" },
                                                { "name": "Initializes all instance variables to default values" },
                                                {
                                                    "name": "Ex:-\n\nclass Car {\n  int speed; // default value: 0\n  String color; // default value: null\n}\n\nCar c = new Car(); // uses default constructor"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Parameterized Constructor",
                                            "children": [
                                                { "name": "\"Accepts parameters for initialization\"" },
                                                { "name": "Allows custom initialization of instance variables" },
                                                {
                                                    "name": "Ex:-\n\nclass Car {\n  int speed;\n  String color;\n\n  Car(int speed, String color) {\n    this.speed = speed;\n    this.color = color;\n  }\n}\n\nCar c = new Car(100, \"red\");"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Constructor Overloading",
                                            "children": [
                                                { "name": "\"Multiple constructors with different parameters\"" },
                                                { "name": "Provides flexibility in object creation" },
                                                {
                                                    "name": "Ex:-\n\nclass Car {\n  Car() { } // no-arg\n  Car(int speed) { } // 1 param\n  Car(int speed, String color) { } // 2 params\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Constructor Chaining",
                                            "children": [
                                                { "name": "\"Calling one constructor from another\"" },
                                                { "name": "this() — calls constructor in same class" },
                                                { "name": "super() — calls constructor in parent class" },
                                                { "name": "Must be the FIRST statement in constructor" },
                                                {
                                                    "name": "Ex:-\n\nclass Car {\n  Car() {\n    this(100); // calls 1-param constructor\n  }\n\n  Car(int speed) {\n    System.out.println(\"Speed: \" + speed);\n  }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Initialization Order",
                                            "children": [
                                                { "name": "1. Static variables & blocks (class load time)" },
                                                { "name": "2. Instance variables initialization" },
                                                { "name": "3. Instance blocks (non-static)" },
                                                { "name": "4. Constructor execution" },
                                                { "name": "5. In inheritance: Parent → Child initialization" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Keywords (this & super)",
                                    "children": [
                                        {
                                            "name": "this Keyword",
                                            "children": [
                                                { "name": "\"Refers to current object\"" },
                                                { "name": "this.property — access instance variable" },
                                                { "name": "this() — call same class constructor" },
                                                { "name": "this.method() — call instance method (optional)" },
                                                {
                                                    "name": "Ex:-\n\nclass Person {\n  String name;\n\n  Person(String name) {\n    this.name = name; // refers to instance variable\n  }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "super Keyword",
                                            "children": [
                                                { "name": "\"Refers to parent class\"" },
                                                { "name": "super.property — access parent instance variable" },
                                                { "name": "super() — call parent constructor" },
                                                { "name": "super.method() — call parent method" },
                                                { "name": "Must be used in constructor before @Override methods" },
                                                {
                                                    "name": "Ex:-\n\nclass Animal {\n  void sound() { System.out.println(\"Sound\"); }\n}\n\nclass Dog extends Animal {\n  @Override\n  void sound() {\n    super.sound(); // calls parent method\n    System.out.println(\"Bark\");\n  }\n}"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Object Methods",
                                    "children": [
                                        {
                                            "name": "equals() & hashCode()",
                                            "children": [
                                                { "name": "\"MUST override BOTH together (contract)\"" },
                                                { "name": "equals() — compares object content/value" },
                                                { "name": "hashCode() — returns hash for HashMap/HashSet" },
                                                { "name": "If equals() returns true, hashCode() must be equal" },
                                                { "name": "Critical for: Collections (HashMap, HashSet), comparisons" },
                                                {
                                                    "name": "Ex:-\n\nclass Person {\n  String name;\n  int age;\n\n  @Override\n  public boolean equals(Object obj) {\n    if (this == obj) return true;\n    if (!(obj instanceof Person)) return false;\n    Person p = (Person) obj;\n    return this.age == p.age && this.name.equals(p.name);\n  }\n\n  @Override\n  public int hashCode() {\n    return Objects.hash(name, age);\n  }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "toString()",
                                            "children": [
                                                { "name": "\"Returns string representation of object\"" },
                                                { "name": "Used for debugging & logging" },
                                                { "name": "Called automatically in print statements" },
                                                {
                                                    "name": "Ex:-\n\nclass Person {\n  String name;\n\n  @Override\n  public String toString() {\n    return \"Person{\" + \"name='\" + name + '\\'' + '}';\n  }\n}\n\nSystem.out.println(new Person(\"John\"));"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "clone()",
                                            "children": [
                                                { "name": "\"Creates a copy of object\"" },
                                                { "name": "Implement Cloneable interface" },
                                                { "name": "Shallow copy — references are copied" },
                                                { "name": "Deep copy — nested objects are also cloned" },
                                                { "name": "Throws CloneNotSupportedException" },
                                                {
                                                    "name": "Ex:-\n\nclass Person implements Cloneable {\n  String name;\n\n  @Override\n  protected Object clone() throws CloneNotSupportedException {\n    return super.clone();\n  }\n}\n\nPerson p1 = new Person(\"John\");\nPerson p2 = (Person) p1.clone();"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "getClass()",
                                            "children": [
                                                { "name": "\"Returns Class object of the instance\"" },
                                                { "name": "Used for reflection & runtime type checking" },
                                                {
                                                    "name": "Ex:-\n\nPerson p = new Person();\nClass<?> c = p.getClass(); // Person.class"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "finalize()",
                                            "children": [
                                                { "name": "\"Called by Garbage Collector before object is destroyed\"" },
                                                { "name": "DEPRECATED since Java 9 (use try-with-resources instead)\"" },
                                                { "name": "Unpredictable execution time" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Design Patterns",
                                    "children": [
                                        {
                                            "name": "Creational",
                                            "children": [
                                                {
                                                    "name": "Singleton",
                                                    "children": [
                                                        { "name": "\"Ensures only ONE instance of class exists globally\"" },
                                                        { "name": "Provides single point of access (getInstance())" },
                                                        {
                                                            "name": "Implementations",
                                                            "children": [
                                                                {
                                                                    "name": "Eager Initialization",
                                                                    "children": [
                                                                        { "name": "Instance created at class load time" },
                                                                        {
                                                                            "name": "Ex:-\n\npublic class Singleton {\n  private static final Singleton instance = new Singleton();\n\n  private Singleton() { }\n\n  public static Singleton getInstance() {\n    return instance;\n  }\n}"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Lazy Initialization (Synchronized)",
                                                                    "children": [
                                                                        { "name": "Instance created on first use" },
                                                                        { "name": "Thread-safe but slow (full method synchronization)" },
                                                                        {
                                                                            "name": "Ex:-\n\npublic class Singleton {\n  private static Singleton instance;\n\n  private Singleton() { }\n\n  public static synchronized Singleton getInstance() {\n    if (instance == null) {\n      instance = new Singleton();\n    }\n    return instance;\n  }\n}"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Double-Checked Locking",
                                                                    "children": [
                                                                        { "name": "Lazy + faster (locks only once)\"" },
                                                                        { "name": "Requires volatile keyword" },
                                                                        {
                                                                            "name": "Ex:-\n\npublic class Singleton {\n  private static volatile Singleton instance;\n\n  private Singleton() { }\n\n  public static Singleton getInstance() {\n    if (instance == null) {\n      synchronized (Singleton.class) {\n        if (instance == null) {\n          instance = new Singleton();\n        }\n      }\n    }\n    return instance;\n  }\n}"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Static Nested Class (Holder)",
                                                                    "children": [
                                                                        { "name": "Lazy + thread-safe + elegant\"" },
                                                                        { "name": "JVM handles synchronization\"" },
                                                                        {
                                                                            "name": "Ex:-\n\npublic class Singleton {\n  private Singleton() { }\n\n  private static class SingletonHolder {\n    public static final Singleton instance = new Singleton();\n  }\n\n  public static Singleton getInstance() {\n    return SingletonHolder.instance;\n  }\n}"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Enum-based (Joshua Bloch Recommended)",
                                                                    "children": [
                                                                        { "name": "Thread-safe, reflection-proof, serialization-safe\"" },
                                                                        { "name": "Simplest & most robust approach\"" },
                                                                        {
                                                                            "name": "Ex:-\n\npublic enum Singleton {\n  INSTANCE;\n\n  public void doSomething() { }\n}\n\nSingleton.INSTANCE.doSomething();"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Attacks & Solutions",
                                                            "children": [
                                                                {
                                                                    "name": "Reflection Attack",
                                                                    "children": [
                                                                        { "name": "Bypass private constructor via reflection" },
                                                                        { "name": "Solution: Throw exception in private constructor" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Cloning Attack",
                                                                    "children": [
                                                                        { "name": "Clone creates new instance" },
                                                                        { "name": "Solution: Override clone() to throw exception" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Serialization Attack",
                                                                    "children": [
                                                                        { "name": "Deserialization creates new instance" },
                                                                        { "name": "Solution: readResolve() method returns existing instance" }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Real-world Use Cases",
                                                            "children": [
                                                                { "name": "Logger objects (single logging system)" },
                                                                { "name": "Configuration Manager (single config instance)" },
                                                                { "name": "Database Connection Pool (single connection source)" }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Factory Pattern",
                                                    "children": [
                                                        { "name": "\"Creates objects without specifying exact classes\"" },
                                                        { "name": "Decouples object creation from usage\"" },
                                                        {
                                                            "name": "Factory Method",
                                                            "children": [
                                                                {
                                                                    "name": "Ex:-\n\ninterface Shape { }\nclass Circle implements Shape { }\nclass Square implements Shape { }\n\nclass ShapeFactory {\n  public static Shape createShape(String type) {\n    if (\"circle\".equals(type)) return new Circle();\n    if (\"square\".equals(type)) return new Square();\n    return null;\n  }\n}\n\nShape s = ShapeFactory.createShape(\"circle\");"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Abstract Factory",
                                                            "children": [
                                                                { "name": "Creates families of related objects\"" },
                                                                { "name": "More complex than Factory Method" }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Builder Pattern",
                                                    "children": [
                                                        { "name": "\"Constructs complex objects step-by-step\"" },
                                                        { "name": "Useful for objects with many optional parameters\"" },
                                                        { "name": "Improves readability\"" },
                                                        {
                                                            "name": "Ex:-\n\nclass Car {\n  private int speed;\n  private String color;\n  private String fuel;\n\n  private Car(Builder builder) {\n    this.speed = builder.speed;\n    this.color = builder.color;\n    this.fuel = builder.fuel;\n  }\n\n  static class Builder {\n    private int speed;\n    private String color;\n    private String fuel;\n\n    public Builder speed(int speed) { this.speed = speed; return this; }\n    public Builder color(String color) { this.color = color; return this; }\n    public Builder fuel(String fuel) { this.fuel = fuel; return this; }\n\n    public Car build() { return new Car(this); }\n  }\n}\n\nCar car = new Car.Builder()\n  .speed(100)\n  .color(\"red\")\n  .fuel(\"diesel\")\n  .build();"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Prototype Pattern",
                                                    "children": [
                                                        { "name": "\"Creates new objects by cloning existing object\"" },
                                                        { "name": "Efficient when object creation is costly\"" },
                                                        { "name": "Implement Cloneable interface" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Structural",
                                            "children": [
                                                {
                                                    "name": "Dependency Injection",
                                                    "children": [
                                                        { "name": "\"Object receives dependencies from external source instead of creating them\"" },
                                                        { "name": "Decouples object creation from object usage\"" },
                                                        { "name": "Language & framework agnostic (Java, Python, C++, JavaScript, etc.)\"" },
                                                        { "name": "Related to Dependency Inversion Principle (DIP) from SOLID\"" },
                                                        {
                                                            "name": "Types of Injection",
                                                            "children": [
                                                                {
                                                                    "name": "Constructor Injection",
                                                                    "children": [
                                                                        { "name": "Dependencies passed via constructor\"" },
                                                                        { "name": "Makes dependencies mandatory & immutable\"" },
                                                                        {
                                                                            "name": "Ex:-\n\ninterface Engine { }\nclass Car {\n  private Engine engine;\n  \n  public Car(Engine engine) { // dependency injected\n    this.engine = engine;\n  }\n}\n\nCar car = new Car(new PetrolEngine());"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Setter Injection",
                                                                    "children": [
                                                                        { "name": "Dependencies set via setter methods\"" },
                                                                        { "name": "More flexible, allows change after creation\"" },
                                                                        {
                                                                            "name": "Ex:-\n\nclass Car {\n  private Engine engine;\n  \n  public void setEngine(Engine engine) {\n    this.engine = engine;\n  }\n}\n\nCar car = new Car();\ncar.setEngine(new DieselEngine());"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Interface Injection",
                                                                    "children": [
                                                                        { "name": "Dependencies injected via interface methods\"" },
                                                                        { "name": "Class implements injection interface\"" }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Benefits",
                                                            "children": [
                                                                { "name": "Loose coupling between classes\"" },
                                                                { "name": "Easier testing (mock dependencies)\"" },
                                                                { "name": "Improved flexibility & reusability\"" },
                                                                { "name": "Easier to maintain & modify\"" },
                                                                { "name": "Supports Dependency Inversion Principle\"" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "IoC Container",
                                                            "children": [
                                                                { "name": "Framework that manages object creation & injection\"" },
                                                                { "name": "Examples: Spring (Java), Guice (Java), Dagger (Java/Android)\"" },
                                                                { "name": "Containers: PicoContainer, Ninject (.NET), etc.\"" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Common Problem Without DI",
                                                            "children": [
                                                                {
                                                                    "name": "Ex (Tight Coupling):-\n\nclass Car {\n  private Engine engine = new PetrolEngine(); // hard-coded\n}\n\n// Problem: Car depends on PetrolEngine, hard to test, hard to change"
                                                                },
                                                                {
                                                                    "name": "Solution (With DI):-\n\nclass Car {\n  private Engine engine;\n  \n  public Car(Engine engine) { // accept any Engine\n    this.engine = engine;\n  }\n}\n\n// Can inject DieselEngine, ElectricEngine, MockEngine for testing"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Adapter Pattern",
                                                    "children": [
                                                        { "name": "\"Converts interface of a class into another interface clients expect\"" },
                                                        { "name": "Makes incompatible interfaces work together\"" },
                                                        { "name": "Bridge between old & new code\"" }
                                                    ]
                                                },
                                                {
                                                    "name": "Decorator Pattern",
                                                    "children": [
                                                        { "name": "\"Adds new functionality to objects dynamically\"" },
                                                        { "name": "Wraps original object without modifying it\"" },
                                                        { "name": "Alternative to subclassing\"" }
                                                    ]
                                                },
                                                {
                                                    "name": "Facade Pattern",
                                                    "children": [
                                                        { "name": "\"Provides simplified interface to complex subsystem\"" },
                                                        { "name": "Hides complexity behind single interface\"" },
                                                        { "name": "Reduces coupling between client & subsystem\"" }
                                                    ]
                                                },
                                                {
                                                    "name": "Proxy Pattern",
                                                    "children": [
                                                        { "name": "\"Provides placeholder/surrogate for another object and then gives it to real object \"" },
                                                        { "name": "Controls access to real object\"" },
                                                        { "name": "Useful for lazy loading, caching, access control\"" },
                                                        {"name" : " in videoProxy pattern, the proxy object controls access to the real video object, allowing for lazy loading and caching of video data. by in videoProxy if realVideo is null then return new realVideo() then realVideo.display() else return realVideo.display() so it can be used for controlled acessed and lazy loading "}
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Inner Classes & Nested Types",
                                    "children": [
                                        {
                                            "name": "Static Inner Class",
                                            "children": [
                                                { "name": "\"Nested class declared as static\"" },
                                                { "name": "Cannot access instance variables of outer class\"" },
                                                { "name": "Accessed via OuterClass.InnerClass" },
                                                {
                                                    "name": "Ex:-\n\nclass Outer {\n  static class Inner {\n    void display() { System.out.println(\"Static inner\"); }\n  }\n}\n\nOuter.Inner inner = new Outer.Inner();"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non-Static Inner Class (Member)",
                                            "children": [
                                                { "name": "\"Inner class tied to outer instance\"" },
                                                { "name": "Can access instance variables of outer class\"" },
                                                { "name": "Requires outer instance to instantiate\"" },
                                                {
                                                    "name": "Ex:-\n\nclass Outer {\n  int x = 10;\n  \n  class Inner {\n    void display() { System.out.println(x); } // can access x\n  }\n}\n\nOuter outer = new Outer();\nOuter.Inner inner = outer.new Inner();"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Local Inner Class",
                                            "children": [
                                                { "name": "\"Class declared inside a method\"" },
                                                { "name": "Scope limited to that method\"" },
                                                { "name": "Can access method's final/effectively final variables\"" },
                                                {
                                                    "name": "Ex:-\n\nclass Outer {\n  void method() {\n    int x = 10;\n    \n    class LocalInner {\n      void display() { System.out.println(x); }\n    }\n    \n    LocalInner inner = new LocalInner();\n  }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Anonymous Inner Class",
                                            "children": [
                                                { "name": "\"Class without name, created inline\"" },
                                                { "name": "Used for one-time implementations\"" },
                                                { "name": "Common with listeners, callbacks\"" },
                                                {
                                                    "name": "Ex:-\n\nRunnable r = new Runnable() {\n  @Override\n  public void run() {\n    System.out.println(\"Running\");\n  }\n};\n\nThread t = new Thread(r);\nt.start();"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Enums",
                                    "children": [
                                        {
                                            "name": "Basics",
                                            "children": [
                                                { "name": "\"Special class representing group of named constants\"" },
                                                { "name": "Implicitly static final\"" },
                                                { "name": "Thread-safe singleton constants\"" },
                                                {
                                                    "name": "Ex:-\n\nenum Color {\n  RED, GREEN, BLUE\n}\n\nColor c = Color.RED;"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Enum Features",
                                            "children": [
                                                { "name": "Private constructors (cannot call directly)\"" },
                                                { "name": "Can have methods\"" },
                                                { "name": "Can implement interfaces\"" },
                                                { "name": "Can have instance variables\"" },
                                                { "name": "Iteration via values()\"" },
                                                { "name": "Use in switch statements\"" }
                                            ]
                                        },
                                        {
                                            "name": "Enum with Methods",
                                            "children": [
                                                {
                                                    "name": "Ex:-\n\nenum Status {\n  ACTIVE(1), INACTIVE(0);\n\n  private int code;\n\n  Status(int code) {\n    this.code = code;\n  }\n\n  public int getCode() { return code; }\n}\n\nStatus s = Status.ACTIVE;\nSystem.out.println(s.getCode());"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Abstract Methods in Enums",
                                            "children": [
                                                { "name": "\"Each constant can have different implementation\"" },
                                                {
                                                    "name": "Ex:-\n\nenum Operation {\n  PLUS { public int apply(int a, int b) { return a + b; } },\n  MINUS { public int apply(int a, int b) { return a - b; } };\n\n  public abstract int apply(int a, int b);\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Enum as Singleton",
                                            "children": [
                                                { "name": "Thread-safe, reflection-proof, serialization-safe\"" },
                                                { "name": "Recommended by Joshua Bloch\"" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Immutability",
                                    "children": [
                                        {
                                            "name": "Immutable Class Design",
                                            "children": [
                                                { "name": "\"Object state cannot change after creation\"" },
                                                { "name": "Thread-safe without synchronization\"" },
                                                { "name": "Benefits: safety, caching, hashable\"" }
                                            ]
                                        },
                                        {
                                            "name": "How to Create Immutable Class",
                                            "children": [
                                                { "name": "1. Declare class as final\"" },
                                                { "name": "2. Make all fields private final\"" },
                                                { "name": "3. No setters, only getters\"" },
                                                { "name": "4. Return deep copy of mutable objects\"" },
                                                { "name": "5. Constructor initialization only\"" }
                                            ]
                                        },
                                        {
                                            "name": "Ex:-\n\nfinal class Person {\n  private final String name;\n  private final int age;\n  private final List<String> hobbies;\n\n  public Person(String name, int age, List<String> hobbies) {\n    this.name = name;\n    this.age = age;\n    this.hobbies = new ArrayList<>(hobbies); // defensive copy\n  }\n\n  public String getName() { return name; }\n  public int getAge() { return age; }\n  public List<String> getHobbies() {\n    return new ArrayList<>(hobbies); // return copy\n  }\n}\n\nExamples: String, Integer, LocalDate"
                                        }
                                    ]
                                },
                                {
                                    "name": "SOLID Principles",
                                    "children": [
                                        {
                                            "name": "Single Responsibility Principle (SRP)",
                                            "children": [
                                                { "name": "\"Class should have only ONE reason to change\"" },
                                                { "name": "Each class has single responsibility\"" },
                                                {
                                                    "name": "Bad:-\n\nclass User {\n  void saveToDatabase() { }\n  void sendEmail() { }\n  void generateReport() { }\n}"
                                                },
                                                {
                                                    "name": "Good:-\n\nclass User { } // only user data\nclass UserRepository { void save(User u) { } }\nclass EmailService { void send() { } }\nclass ReportGenerator { void generate() { } }"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Open/Closed Principle (OCP)",
                                            "children": [
                                                { "name": "\"Open for extension, closed for modification\"" },
                                                { "name": "Add new functionality without changing existing code\"" },
                                                { "name": "Use inheritance, interfaces, polymorphism\"" }
                                            ]
                                        },
                                        {
                                            "name": "Liskov Substitution Principle (LSP)",
                                            "children": [
                                                { "name": "\"Subtypes must be substitutable for parent type\"" },
                                                { "name": "Child must honor parent's contract\"" },
                                                { "name": "Common mistake: violating method preconditions/postconditions\"" },
                                                {
                                                    "name": "Bad:-\n\nclass Bird { void fly() { } }\nclass Penguin extends Bird { // Penguin cannot fly!\n  @Override void fly() { throw new Exception(); }\n}"
                                                },
                                                {
                                                    "name": "Good:-\n\ninterface Animal { }\ninterface Flyable { void fly(); }\nclass Penguin implements Animal { } // no fly()\nclass Sparrow implements Animal, Flyable { void fly() { } }"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Interface Segregation Principle (ISP)",
                                            "children": [
                                                { "name": "\"Clients should not depend on interfaces they don't use\"" },
                                                { "name": "Create small, focused interfaces\"" },
                                                {
                                                    "name": "Bad:-\n\ninterface Animal {\n  void fly();\n  void swim();\n  void walk();\n} // Dog doesn't need fly()"
                                                },
                                                {
                                                    "name": "Good:-\n\ninterface Flyable { void fly(); }\ninterface Swimmable { void swim(); }\ninterface Walkable { void walk(); }\nclass Dog implements Walkable, Swimmable { }"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Dependency Inversion Principle (DIP)",
                                            "children": [
                                                { "name": "\"Depend on abstractions, not concrete implementations\"" },
                                                { "name": "Use interfaces/abstract classes as dependencies\"" },
                                                { "name": "Enables loose coupling\"" },
                                                {
                                                    "name": "Bad:-\n\nclass PaymentProcessor {\n  private StripePayment stripe = new StripePayment();\n  void process() { stripe.charge(); }\n}\n// Tightly coupled to StripePayment"
                                                },
                                                {
                                                    "name": "Good:-\n\ninterface PaymentGateway { void charge(); }\nclass PaymentProcessor {\n  private PaymentGateway gateway;\n  PaymentProcessor(PaymentGateway g) { this.gateway = g; }\n  void process() { gateway.charge(); }\n}"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Advanced Concepts",
                                    "children": [
                                        {
                                            "name": "Coupling & Cohesion",
                                            "children": [
                                                {
                                                    "name": "Tight Coupling (Avoid)",
                                                    "children": [
                                                        { "name": "Classes depend heavily on each other\"" },
                                                        { "name": "Changes in one affect many others\"" },
                                                        {
                                                            "name": "Ex:-\n\nclass Car {\n  private Engine engine = new Engine(); // tight coupling\n}"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Loose Coupling (Design For)",
                                                    "children": [
                                                        { "name": "Classes depend on abstractions\"" },
                                                        { "name": "Changes in one don't affect others\"" },
                                                        {
                                                            "name": "Ex:-\n\nclass Car {\n  private EngineInterface engine; // depends on interface\n  \n  Car(EngineInterface engine) {\n    this.engine = engine; // dependency injection\n  }\n}"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "High Cohesion (Design For)",
                                                    "children": [
                                                        { "name": "Related functionality grouped together\"" },
                                                        { "name": "Class has clear single purpose\"" }
                                                    ]
                                                },
                                                {
                                                    "name": "Low Cohesion (Avoid)",
                                                    "children": [
                                                        { "name": "Unrelated methods in same class\"" },
                                                        { "name": "Class has multiple responsibilities\"" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Method Binding",
                                            "children": [
                                                {
                                                    "name": "Early Binding (Compile-time)",
                                                    "children": [
                                                        { "name": "Compiler decides which method to call\"" },
                                                        { "name": "Used for: static methods, private methods, final methods\"" },
                                                        { "name": "Faster execution (no runtime overhead)\"" }
                                                    ]
                                                },
                                                {
                                                    "name": "Late Binding (Runtime/Dynamic Dispatch)",
                                                    "children": [
                                                        { "name": "JVM decides which method to call at runtime\"" },
                                                        { "name": "Used for: instance methods (virtual methods)\"" },
                                                        { "name": "Enables polymorphism\"" },
                                                        {
                                                            "name": "Ex:-\n\nAnimal a = new Dog(); // reference type: Animal, actual type: Dog\na.sound(); // JVM calls Dog.sound() at runtime"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "instanceof & Type Casting",
                                            "children": [
                                                {
                                                    "name": "instanceof (Runtime Type Checking)",
                                                    "children": [
                                                        { "name": "Checks if object is instance of class/interface\"" },
                                                        {
                                                            "name": "Ex:-\n\nif (obj instanceof Dog) {\n  Dog d = (Dog) obj;\n}"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Upcasting",
                                                    "children": [
                                                        { "name": "Converting child reference to parent reference\"" },
                                                        { "name": "Always safe (no casting needed)\"" },
                                                        {
                                                            "name": "Ex:-\n\nDog d = new Dog();\nAnimal a = d; // upcasting (automatic)"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Downcasting",
                                                    "children": [
                                                        { "name": "Converting parent reference to child reference\"" },
                                                        { "name": "Unsafe, requires explicit cast & instanceof check\"" },
                                                        {
                                                            "name": "Ex:-\n\nAnimal a = new Dog();\nDog d = (Dog) a; // explicit cast (dangerous!)\n\n// Safe way:\nif (a instanceof Dog) {\n  Dog d = (Dog) a;\n}"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Diamond Problem (Multiple Inheritance)",
                                            "children": [
                                                { "name": "\"Ambiguity when inheriting from multiple sources with same method\"" },
                                                { "name": "Java solves via interfaces + resolution rules\"" },
                                                {
                                                    "name": "Resolution Priority",
                                                    "children": [
                                                        { "name": "1. Class methods (if both parent & interface have same method)\"" },
                                                        { "name": "2. Interface methods (left-to-right in implements list)\"" },
                                                        { "name": "3. Must explicitly specify using super if ambiguous\"" }
                                                    ]
                                                },
                                                {
                                                    "name": "Ex:-\n\ninterface A { default void test() { } }\ninterface B { default void test() { } }\n\nclass C implements A, B {\n  @Override\n  public void test() {\n    A.super.test(); // explicitly call A's test()\n  }\n}"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Packages & Organization",
                                    "children": [
                                        {
                                            "name": "Package Structure",
                                            "children": [
                                                { "name": "\"Organize classes into logical groups\"" },
                                                { "name": "Package name uses reverse domain notation (com.company.project)\"" },
                                                { "name": "File structure mirrors package structure\"" }
                                            ]
                                        },
                                        {
                                            "name": "Access Control Across Packages",
                                            "children": [
                                                { "name": "public → accessible from any package\"" },
                                                { "name": "private → only within class\"" },
                                                { "name": "protected → same package + subclasses\"" },
                                                { "name": "package-private (default) → same package only\"" }
                                            ]
                                        },
                                        {
                                            "name": "API Design Principles",
                                            "children": [
                                                { "name": "Expose minimal public interface\"" },
                                                { "name": "Hide implementation details\"" },
                                                { "name": "Version carefully (breaking changes)\"" },
                                                { "name": "Document public APIs thoroughly\"" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Java Core Class & Interface Hierarchy",
                            "children": [
                                {
                                    "name": "Primitive Data Types (NOT classes)",
                                    "children": [
                                        {
                                            "name": "byte",
                                            "children": [
                                                { "name": "Size → 1 byte (8 bits)" },
                                                { "name": "Range → -128 to 127" },
                                                { "name": "Default value → 0" },
                                                { "name": "Ex:- byte age = 25;" }
                                            ]
                                        },
                                        {
                                            "name": "short",
                                            "children": [
                                                { "name": "Size → 2 bytes (16 bits)" },
                                                { "name": "Range → -32,768 to 32,767" },
                                                { "name": "Default value → 0" },
                                                { "name": "Ex:- short salary = 30000;" }
                                            ]
                                        },
                                        {
                                            "name": "int",
                                            "children": [
                                                { "name": "Size → 4 bytes (32 bits)" },
                                                { "name": "Range → -2^31 to 2^31 - 1" },
                                                { "name": "Default value → 0" },
                                                { "name": "Most commonly used integer type" },
                                                { "name": "Ex:- int marks = 95;" }
                                            ]
                                        },
                                        {
                                            "name": "long",
                                            "children": [
                                                { "name": "Size → 8 bytes (64 bits)" },
                                                { "name": "Range → -2^63 to 2^63 - 1" },
                                                { "name": "Default value → 0L" },
                                                { "name": "Requires suffix 'L' for large literals" },
                                                { "name": "Ex:- long population = 7800000000L;" }
                                            ]
                                        },
                                        {
                                            "name": "float",
                                            "children": [
                                                { "name": "Size → 4 bytes (32 bits)" },
                                                { "name": "Precision → ~6-7 decimal digits" },
                                                { "name": "Default value → 0.0f" },
                                                { "name": "Requires suffix 'f'" },
                                                { "name": "Ex:- float price = 99.5f;" }
                                            ]
                                        },
                                        {
                                            "name": "double",
                                            "children": [
                                                { "name": "Size → 8 bytes (64 bits)" },
                                                { "name": "Precision → ~15 decimal digits" },
                                                { "name": "Default floating-point type" },
                                                { "name": "Default value → 0.0d" },
                                                { "name": "Ex:- double pi = 3.1415926535;" }
                                            ]
                                        },
                                        {
                                            "name": "char",
                                            "children": [
                                                { "name": "Size → 2 bytes (16 bits)" },
                                                { "name": "Stores single Unicode character" },
                                                { "name": "Range → 0 to 65,535" },
                                                { "name": "Default value → '\\u0000'" },
                                                { "name": "Ex:- char grade = 'A';" }
                                            ]
                                        },
                                        {
                                            "name": "boolean",
                                            "children": [
                                                { "name": "Values → true / false" },
                                                { "name": "Size → JVM dependent" },
                                                { "name": "Default value → false" },
                                                { "name": "Ex:- boolean isJavaFun = true;" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Java Core Classes & Interfaces Complete Hierarchy",
                                    "children": [
                                        {
                                            "name": "The Language & Object Bedrock (java.lang)",
                                            "children": [
                                                {
                                                    "name": "Object",
                                                    "children": [
                                                        { "name": "Root class of all Java classes" },
                                                        { "name": "Every class directly or indirectly extends Object" },
                                                        { "name": "Provides fundamental methods that all objects inherit" },
                                                        { "name": "Located in java.lang package (automatically imported)" }
                                                        ,
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".equals(Object obj)",
                                                                    "children": [
                                                                        { "name": "compares objects for equality" },
                                                                        { "name": "default implementation compares references (==)" },
                                                                        { "name": "commonly overridden with hashCode()" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".hashCode()",
                                                                    "children": [
                                                                        {
                                                                            "name": "Core Language Contract",
                                                                            "children": [
                                                                                { "name": "Returns a 32-bit signed integer representation of the object state" },
                                                                                { "name": "Consistency: Must return the same value within the same execution if object data doesn't change" },
                                                                                { "name": "Strict Rule: If two objects are equal via .equals(), they MUST return identical hash codes" },
                                                                                { "name": "Collision Rule: If two objects have the same hash code, they are NOT inherently equal" }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "name": "HashMap Bucket Routing Engine",
                                                                            "children": [
                                                                                { "name": "Initial capacity defaults to 16 buckets (always a power of 2)" },
                                                                                { "name": "Index formula: index = hashCode & (capacity - 1) to force bounds between 0 and 15" },
                                                                                { "name": "Bitwise Shift Optimization: HashMap applies an internal secondary hash function to spread out bad hashes" }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "name": "Collision Resolution Lifecycle",
                                                                            "children": [
                                                                                { "name": "Phase 1: Singly Linked List used for basic overlapping buckets [O(n) worst case lookup]" },
                                                                                { "name": "Phase 2: Treeification triggered when a single bucket exceeds 8 nodes and total capacity is at least 64" },
                                                                                { "name": "Structural Shift: Converts the linked list to a self-balancing Red-Black Tree [O(log n) lookup protection]" },
                                                                                { "name": "Phase 3: Untreeification drops the tree back down to a linked list if count falls below 6 nodes during removal" }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "name": "Dynamic Resizing Mechanics",
                                                                            "children": [
                                                                                { "name": "Load Factor defaults to 0.75 (determines map fullness threshold before expanding)" },
                                                                                { "name": "Capacity doubles automatically once element count reaches 12 items (16 * 0.75)" },
                                                                                { "name": "The Rehash Costly Step: Every single node is re-evaluated with the new capacity bitwise mask" }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "name": "Severe Production Risks",
                                                                            "children": [
                                                                                { "name": "Identity Crisis: Overriding .equals() without overriding .hashCode() completely breaks data retrieval" },
                                                                                { "name": "Memory Leak Hazard: Modifying fields used inside a key's hashCode calculation makes that key permanently un-retrievable" },
                                                                                { "name": "Hash Flooding DoS Threat: Malicious inputs sharing identical hash codes can trigger widespread treeification, exhausting CPU resource cycles" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".toString()",
                                                                    "children": [
                                                                        { "name": "returns string representation of object" },
                                                                        { "name": "default format: ClassName@hexHashCode" },
                                                                        { "name": "commonly overridden for readable output" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getClass()",
                                                                    "children": [
                                                                        { "name": "returns runtime Class object" },
                                                                        { "name": "used for reflection" },
                                                                        { "name": "final method (cannot override)" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".clone()",
                                                                    "children": [
                                                                        { "name": "creates shallow copy of object" },
                                                                        { "name": "protected in Object class" },
                                                                        { "name": "requires Cloneable interface" },
                                                                        { "name": "throws CloneNotSupportedException otherwise" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".notify()",
                                                                    "children": [
                                                                        { "name": "wakes one waiting thread" },
                                                                        { "name": "must be called inside synchronized block" },
                                                                        { "name": "used with wait()" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".notifyAll()",
                                                                    "children": [
                                                                        { "name": "wakes all waiting threads" },
                                                                        { "name": "must be called inside synchronized block" },
                                                                        { "name": "threads compete to acquire monitor" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".wait()",
                                                                    "children": [
                                                                        { "name": "releases monitor and pauses thread" },
                                                                        { "name": "must be called inside synchronized block" },
                                                                        { "name": "thread resumes after notify/notifyAll" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".wait(long timeout)",
                                                                    "children": [
                                                                        { "name": "waits for specified milliseconds" },
                                                                        { "name": "wakes automatically after timeout" },
                                                                        { "name": "may wake earlier using notify()" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".finalize()",
                                                                    "children": [
                                                                        { "name": "called before object cleanup (historically)" },
                                                                        { "name": "execution not guaranteed" },
                                                                        { "name": "deprecated and should not be used" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Class",
                                                    "children": [
                                                        { "name": "Represents a class or interface at runtime" },
                                                        { "name": "Provides reflection capabilities" },
                                                        { "name": "Used to inspect class metadata" },
                                                        { "name": "Cannot be instantiated directly" }
                                                        ,
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".getName()",
                                                                    "children": [
                                                                        { "name": "returns fully qualified class name" },
                                                                        { "name": "e.g., 'java.lang.String'" },
                                                                        { "name": "includes package name" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".forName(String className)",
                                                                    "children": [
                                                                        { "name": "loads class dynamically by name" },
                                                                        { "name": "throws ClassNotFoundException" },
                                                                        { "name": "initializes the class" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getMethods()",
                                                                    "children": [
                                                                        { "name": "returns all public methods" },
                                                                        { "name": "includes inherited methods" },
                                                                        { "name": "returns array of Method objects" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getFields()",
                                                                    "children": [
                                                                        { "name": "returns all public fields" },
                                                                        { "name": "includes inherited fields" },
                                                                        { "name": "returns array of Field objects" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getConstructors()",
                                                                    "children": [
                                                                        { "name": "returns all public constructors" },
                                                                        { "name": "returns array of Constructor objects" },
                                                                        { "name": "use for reflection instantiation" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Enum",
                                                    "children": [

                                                        { "name": "Base class for all enumerations" },
                                                        { "name": "Provides type-safe constants" },
                                                        { "name": "Extends Enum automatically" },
                                                        { "name": "Cannot be extended manually" },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".values()",
                                                                    "children": [
                                                                        { "name": "returns array of all enum constants" },
                                                                        { "name": "generated automatically by compiler" },
                                                                        { "name": "preserves declaration order" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".valueOf(String name)",
                                                                    "children": [
                                                                        { "name": "returns enum constant by name" },
                                                                        { "name": "throws IllegalArgumentException if not found" },
                                                                        { "name": "case-sensitive" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".ordinal()",
                                                                    "children": [
                                                                        { "name": "returns position of constant" },
                                                                        { "name": "0-based index" },
                                                                        { "name": "depends on declaration order" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".name()",
                                                                    "children": [
                                                                        { "name": "returns constant name as String" },
                                                                        { "name": "exact name declared" },
                                                                        { "name": "prefer over toString() for identity" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "String",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Immutable sequence of characters" },
                                                                { "name": "Most commonly used class in Java" },
                                                                { "name": "Stored in String Pool (interned)" },
                                                                { "name": "Implements CharSequence, Serializable, Comparable" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".length()",
                                                                    "children": [
                                                                        { "name": "returns number of characters" },
                                                                        { "name": "returns int" },
                                                                        { "name": "O(1) operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".charAt(int index)",
                                                                    "children": [
                                                                        { "name": "returns character at position" },
                                                                        { "name": "0-based index" },
                                                                        { "name": "throws IndexOutOfBoundsException" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".substring(int begin, int end)",
                                                                    "children": [
                                                                        { "name": "extracts portion of string" },
                                                                        { "name": "end index exclusive" },
                                                                        { "name": "creates new String" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".indexOf(String str)",
                                                                    "children": [
                                                                        { "name": "finds first occurrence of substring" },
                                                                        { "name": "returns -1 if not found" },
                                                                        { "name": "case-sensitive" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".replace(char old, char new)",
                                                                    "children": [
                                                                        { "name": "replaces all occurrences" },
                                                                        { "name": "returns new String" },
                                                                        { "name": "case-sensitive" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".toUpperCase()",
                                                                    "children": [
                                                                        { "name": "converts to uppercase" },
                                                                        { "name": "uses default locale" },
                                                                        { "name": "returns new String" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".toLowerCase()",
                                                                    "children": [
                                                                        { "name": "converts to lowercase" },
                                                                        { "name": "uses default locale" },
                                                                        { "name": "returns new String" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".equals(Object obj)",
                                                                    "children": [
                                                                        { "name": "compares content for equality" },
                                                                        { "name": "case-sensitive" },
                                                                        { "name": "returns boolean" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".compareTo(String another)",
                                                                    "children": [
                                                                        { "name": "lexicographic comparison" },
                                                                        { "name": "returns negative, zero, or positive" },
                                                                        { "name": "implements Comparable" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "StringBuilder",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Mutable sequence of characters" },
                                                                { "name": "Not thread-safe (no synchronization)" },
                                                                { "name": "Faster than StringBuffer" },
                                                                { "name": "Preferred for single-threaded use" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".append(String str)",
                                                                    "children": [
                                                                        { "name": "appends string to end" },
                                                                        { "name": "supports chaining" },
                                                                        { "name": "returns this" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".insert(int offset, String str)",
                                                                    "children": [
                                                                        { "name": "inserts at specified position" },
                                                                        { "name": "shifts existing content" },
                                                                        { "name": "throws StringIndexOutOfBoundsException" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".delete(int start, int end)",
                                                                    "children": [
                                                                        { "name": "removes characters in range" },
                                                                        { "name": "end index exclusive" },
                                                                        { "name": "returns this" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".reverse()",
                                                                    "children": [
                                                                        { "name": "reverses character sequence" },
                                                                        { "name": "in-place modification" },
                                                                        { "name": "returns this" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".toString()",
                                                                    "children": [
                                                                        { "name": "converts to immutable String" },
                                                                        { "name": "creates new String copy" },
                                                                        { "name": "commonly called at end" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "StringBuffer",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Mutable sequence of characters" },
                                                                { "name": "Thread-safe (synchronized methods)" },
                                                                { "name": "Slower than StringBuilder" },
                                                                { "name": "Legacy class, use StringBuilder if possible" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".append(String str)",
                                                                    "children": [
                                                                        { "name": "thread-safe append" },
                                                                        { "name": "supports chaining" },
                                                                        { "name": "returns this" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".insert(int offset, String str)",
                                                                    "children": [
                                                                        { "name": "thread-safe insert" },
                                                                        { "name": "shifts existing content" },
                                                                        { "name": "throws StringIndexOutOfBoundsException" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".delete(int start, int end)",
                                                                    "children": [
                                                                        { "name": "thread-safe removal" },
                                                                        { "name": "end index exclusive" },
                                                                        { "name": "returns this" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".reverse()",
                                                                    "children": [
                                                                        { "name": "thread-safe reversal" },
                                                                        { "name": "in-place modification" },
                                                                        { "name": "returns this" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".toString()",
                                                                    "children": [
                                                                        { "name": "converts to immutable String" },
                                                                        { "name": "creates new String copy" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "System",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Utility class for system operations" },
                                                                { "name": "Cannot be instantiated (final class)" },
                                                                { "name": "All methods are static" },
                                                                { "name": "Provides standard I/O streams" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".exit(int status)",
                                                                    "children": [
                                                                        { "name": "terminates JVM" },
                                                                        { "name": "0 = normal termination" },
                                                                        { "name": "non-zero = error" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".currentTimeMillis()",
                                                                    "children": [
                                                                        { "name": "returns time in milliseconds" },
                                                                        { "name": "since Jan 1, 1970 UTC" },
                                                                        { "name": "used for timestamps" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".arraycopy()",
                                                                    "children": [
                                                                        { "name": "efficient array copying" },
                                                                        { "name": "native method" },
                                                                        { "name": "fastest way to copy arrays" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".gc()",
                                                                    "children": [
                                                                        { "name": "suggests garbage collection" },
                                                                        { "name": "not guaranteed to run" },
                                                                        { "name": "performance overhead" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Throwable",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Superclass of all errors and exceptions" },
                                                                { "name": "Only objects of Throwable can be thrown" },
                                                                { "name": "Provides stack trace functionality" },
                                                                { "name": "Root of exception hierarchy" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Exception (Checked)",
                                                            "children": [
                                                                {
                                                                    "name": "IOException",
                                                                    "children": [
                                                                        { "name": "I/O operation failure" },
                                                                        { "name": "file not found" },
                                                                        { "name": "network errors" },
                                                                        { "name": "permission denied" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "SQLException",
                                                                    "children": [
                                                                        { "name": "database access failure" },
                                                                        { "name": "provides error code" },
                                                                        { "name": "provides SQL state" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "ClassNotFoundException",
                                                                    "children": [
                                                                        { "name": "class cannot be loaded" },
                                                                        { "name": "thrown by Class.forName()" },
                                                                        { "name": "classpath issue" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "FileNotFoundException",
                                                                    "children": [
                                                                        { "name": "file doesn't exist" },
                                                                        { "name": "file inaccessible" },
                                                                        { "name": "subclass of IOException" }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "RuntimeException (Unchecked)",
                                                            "children": [
                                                                {
                                                                    "name": "NullPointerException",
                                                                    "children": [
                                                                        { "name": "accessing null reference" },
                                                                        { "name": "most common runtime exception" },
                                                                        { "name": "can be avoided with null checks" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "IllegalArgumentException",
                                                                    "children": [
                                                                        { "name": "invalid argument passed" },
                                                                        { "name": "method precondition violation" },
                                                                        { "name": "use parameter validation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "ArithmeticException",
                                                                    "children": [
                                                                        { "name": "division by zero" },
                                                                        { "name": "other arithmetic errors" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "IndexOutOfBoundsException",
                                                                    "children": [
                                                                        { "name": "index out of range" },
                                                                        { "name": "parent of Array/Str exceptions" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "ArrayIndexOutOfBoundsException",
                                                                    "children": [
                                                                        { "name": "array index out of bounds" },
                                                                        { "name": "negative index" },
                                                                        { "name": "index >= array.length" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "StringIndexOutOfBoundsException",
                                                                    "children": [
                                                                        { "name": "string index out of bounds" },
                                                                        { "name": "from charAt()" },
                                                                        { "name": "from substring()" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "ClassCastException",
                                                                    "children": [
                                                                        { "name": "illegal type casting" },
                                                                        { "name": "not instanceof target type" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "IllegalStateException",
                                                                    "children": [
                                                                        { "name": "object in wrong state" },
                                                                        { "name": "e.g., iterator after removal" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "UnsupportedOperationException",
                                                                    "children": [
                                                                        { "name": "operation not supported" },
                                                                        { "name": "e.g., modifying immutable collection" }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Error (Serious Issues)",
                                                            "children": [
                                                                {
                                                                    "name": "OutOfMemoryError",
                                                                    "children": [
                                                                        { "name": "JVM cannot allocate more memory" },
                                                                        { "name": "usually unrecoverable" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "StackOverflowError",
                                                                    "children": [
                                                                        { "name": "stack exceeds limit" },
                                                                        { "name": "e.g., infinite recursion" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "VirtualMachineError",
                                                                    "children": [
                                                                        { "name": "JVM is broken" },
                                                                        { "name": "resource exhausted" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Data Structures Framework (java.util)",
                                            "children": [
                                                {
                                                    "name": "ArrayList",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Resizable array implementation of List" },
                                                                { "name": "Random access O(1)" },
                                                                { "name": "Add/Remove at end O(1) amortized" },
                                                                { "name": "Add/Remove at beginning/middle O(n)" },
                                                                { "name": "Grows by 50% when full" },
                                                                { "name": "Initial capacity: 10" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".add(E element)",
                                                                    "children": [
                                                                        { "name": "appends element to end" },
                                                                        { "name": "O(1) amortized" },
                                                                        { "name": "returns true" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".get(int index)",
                                                                    "children": [
                                                                        { "name": "retrieves element at position" },
                                                                        { "name": "O(1) random access" },
                                                                        { "name": "throws IndexOutOfBoundsException" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".set(int index, E element)",
                                                                    "children": [
                                                                        { "name": "replaces element at position" },
                                                                        { "name": "returns old value" },
                                                                        { "name": "O(1) operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".remove(int index)",
                                                                    "children": [
                                                                        { "name": "removes element at position" },
                                                                        { "name": "shifts elements left" },
                                                                        { "name": "O(n) operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".size()",
                                                                    "children": [
                                                                        { "name": "returns number of elements" },
                                                                        { "name": "O(1) operation" },
                                                                        { "name": "returns int" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".indexOf(Object o)",
                                                                    "children": [
                                                                        { "name": "finds first occurrence" },
                                                                        { "name": "returns -1 if not found" },
                                                                        { "name": "uses equals()" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "LinkedList",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Doubly linked list implementation" },
                                                                { "name": "Implements List, Deque, Queue" },
                                                                { "name": "Sequential access O(n)" },
                                                                { "name": "Add/Remove at ends O(1)" },
                                                                { "name": "More memory overhead (prev/next references)" },
                                                                { "name": "Good for frequent insert/delete operations" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".addFirst(E element)",
                                                                    "children": [
                                                                        { "name": "inserts at beginning" },
                                                                        { "name": "O(1) operation" },
                                                                        { "name": "implements Deque" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".addLast(E element)",
                                                                    "children": [
                                                                        { "name": "inserts at end" },
                                                                        { "name": "O(1) operation" },
                                                                        { "name": "same as add()" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".removeFirst()",
                                                                    "children": [
                                                                        { "name": "removes first element" },
                                                                        { "name": "O(1) operation" },
                                                                        { "name": "throws if empty" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".removeLast()",
                                                                    "children": [
                                                                        { "name": "removes last element" },
                                                                        { "name": "O(1) operation" },
                                                                        { "name": "throws if empty" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getFirst()",
                                                                    "children": [
                                                                        { "name": "retrieves first element" },
                                                                        { "name": "O(1) operation" },
                                                                        { "name": "throws if empty" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getLast()",
                                                                    "children": [
                                                                        { "name": "retrieves last element" },
                                                                        { "name": "O(1) operation" },
                                                                        { "name": "throws if empty" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "HashSet",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Hash table based implementation" },
                                                                { "name": "No duplicates allowed" },
                                                                { "name": "Unordered collection" },
                                                                { "name": "Average O(1) operations" },
                                                                { "name": "Allows one null value" },
                                                                { "name": "Uses equals() and hashCode()" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".add(E element)",
                                                                    "children": [
                                                                        { "name": "adds if not present" },
                                                                        { "name": "returns true if added" },
                                                                        { "name": "O(1) average" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".contains(Object o)",
                                                                    "children": [
                                                                        { "name": "checks if element exists" },
                                                                        { "name": "O(1) average" },
                                                                        { "name": "uses equals() and hashCode()" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".remove(Object o)",
                                                                    "children": [
                                                                        { "name": "removes if present" },
                                                                        { "name": "returns true if removed" },
                                                                        { "name": "O(1) average" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".size()",
                                                                    "children": [
                                                                        { "name": "returns number of elements" },
                                                                        { "name": "O(1) operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".isEmpty()",
                                                                    "children": [
                                                                        { "name": "returns true if empty" },
                                                                        { "name": "O(1) operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".clear()",
                                                                    "children": [
                                                                        { "name": "removes all elements" },
                                                                        { "name": "O(n) operation" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "TreeSet",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Red-Black tree based implementation" },
                                                                { "name": "Sorted order (natural or custom)" },
                                                                { "name": "No duplicates allowed" },
                                                                { "name": "O(log n) operations" },
                                                                { "name": "Requires Comparable or Comparator" },
                                                                { "name": "NavigableSet implementation" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".add(E element)",
                                                                    "children": [
                                                                        { "name": "adds in sorted order" },
                                                                        { "name": "returns true if added" },
                                                                        { "name": "O(log n) operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".first()",
                                                                    "children": [
                                                                        { "name": "returns smallest element" },
                                                                        { "name": "O(1) operation" },
                                                                        { "name": "throws if empty" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".last()",
                                                                    "children": [
                                                                        { "name": "returns largest element" },
                                                                        { "name": "O(1) operation" },
                                                                        { "name": "throws if empty" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".ceiling(E element)",
                                                                    "children": [
                                                                        { "name": "returns smallest >= given" },
                                                                        { "name": "null if none" },
                                                                        { "name": "O(log n) operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".floor(E element)",
                                                                    "children": [
                                                                        { "name": "returns largest <= given" },
                                                                        { "name": "null if none" },
                                                                        { "name": "O(log n) operation" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "HashMap",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Hash table based implementation" },
                                                                { "name": "Key-value pair storage" },
                                                                { "name": "Average O(1) operations" },
                                                                { "name": "Allows one null key" },
                                                                { "name": "Allows multiple null values" },
                                                                { "name": "Not thread-safe" },
                                                                { "name": "Worst-case O(n) for collisions" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".put(K key, V value)",
                                                                    "children": [
                                                                        { "name": "associates key with value" },
                                                                        { "name": "returns previous value" },
                                                                        { "name": "O(1) average" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".get(Object key)",
                                                                    "children": [
                                                                        { "name": "retrieves value for key" },
                                                                        { "name": "returns null if not found" },
                                                                        { "name": "O(1) average" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".remove(Object key)",
                                                                    "children": [
                                                                        { "name": "removes key-value mapping" },
                                                                        { "name": "returns removed value" },
                                                                        { "name": "O(1) average" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".containsKey(Object key)",
                                                                    "children": [
                                                                        { "name": "checks if key exists" },
                                                                        { "name": "O(1) average" },
                                                                        { "name": "uses equals() and hashCode()" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".containsValue(Object value)",
                                                                    "children": [
                                                                        { "name": "checks if value exists" },
                                                                        { "name": "O(n) operation" },
                                                                        { "name": "uses equals()" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".keySet()",
                                                                    "children": [
                                                                        { "name": "returns Set of keys" },
                                                                        { "name": "view of the map" },
                                                                        { "name": "changes reflected" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".values()",
                                                                    "children": [
                                                                        { "name": "returns Collection of values" },
                                                                        { "name": "view of the map" },
                                                                        { "name": "supports iteration" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".entrySet()",
                                                                    "children": [
                                                                        { "name": "returns Set of entries" },
                                                                        { "name": "Map.Entry objects" },
                                                                        { "name": "for iteration with key+value" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "TreeMap",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Red-Black tree based implementation" },
                                                                { "name": "Sorted by key (natural or custom)" },
                                                                { "name": "O(log n) operations" },
                                                                { "name": "NavigableMap implementation" },
                                                                { "name": "Requires Comparable or Comparator" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".put(K key, V value)",
                                                                    "children": [
                                                                        { "name": "associates key with value" },
                                                                        { "name": "O(log n) operation" },
                                                                        { "name": "sorted by key" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".firstKey()",
                                                                    "children": [
                                                                        { "name": "returns smallest key" },
                                                                        { "name": "O(1) operation" },
                                                                        { "name": "throws if empty" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".lastKey()",
                                                                    "children": [
                                                                        { "name": "returns largest key" },
                                                                        { "name": "O(1) operation" },
                                                                        { "name": "throws if empty" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".ceilingKey(K key)",
                                                                    "children": [
                                                                        { "name": "returns smallest key >= given" },
                                                                        { "name": "null if none" },
                                                                        { "name": "O(log n) operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".floorKey(K key)",
                                                                    "children": [
                                                                        { "name": "returns largest key <= given" },
                                                                        { "name": "null if none" },
                                                                        { "name": "O(log n) operation" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "ConcurrentHashMap",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Thread-safe HashMap" },
                                                                { "name": "High concurrency support" },
                                                                { "name": "Segmented locking for better performance" },
                                                                { "name": "No null keys or values" },
                                                                { "name": "Better than synchronized HashMap" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".put(K key, V value)",
                                                                    "children": [
                                                                        { "name": "thread-safe put" },
                                                                        { "name": "returns previous value" },
                                                                        { "name": "null not allowed" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".get(Object key)",
                                                                    "children": [
                                                                        { "name": "thread-safe get" },
                                                                        { "name": "returns value" },
                                                                        { "name": "no locking for reads" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".remove(Object key)",
                                                                    "children": [
                                                                        { "name": "thread-safe removal" },
                                                                        { "name": "returns removed value" },
                                                                        { "name": "null not allowed" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".putIfAbsent(K key, V value)",
                                                                    "children": [
                                                                        { "name": "puts only if absent" },
                                                                        { "name": "atomic operation" },
                                                                        { "name": "returns existing value" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Collections (Utility Class)",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Utility class with static methods" },
                                                                { "name": "Provides collection operations" },
                                                                { "name": "Cannot be instantiated" },
                                                                { "name": "All methods are static" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".sort(List<T> list)",
                                                                    "children": [
                                                                        { "name": "sorts in natural order" },
                                                                        { "name": "requires Comparable" },
                                                                        { "name": "modifies original list" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".shuffle(List<?> list)",
                                                                    "children": [
                                                                        { "name": "randomly permutes elements" },
                                                                        { "name": "uses Random by default" },
                                                                        { "name": "modifies original list" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".reverse(List<?> list)",
                                                                    "children": [
                                                                        { "name": "reverses element order" },
                                                                        { "name": "modifies original list" },
                                                                        { "name": "O(n) operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".binarySearch(List list, T key)",
                                                                    "children": [
                                                                        { "name": "searches sorted list" },
                                                                        { "name": "returns index or negative" },
                                                                        { "name": "O(log n) operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".max(Collection col)",
                                                                    "children": [
                                                                        { "name": "returns maximum element" },
                                                                        { "name": "natural order" },
                                                                        { "name": "throws if empty" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".min(Collection col)",
                                                                    "children": [
                                                                        { "name": "returns minimum element" },
                                                                        { "name": "natural order" },
                                                                        { "name": "throws if empty" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".frequency(Collection c, Object o)",
                                                                    "children": [
                                                                        { "name": "counts occurrences" },
                                                                        { "name": "uses equals()" },
                                                                        { "name": "O(n) operation" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Arrays (Utility Class)",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Utility class for array operations" },
                                                                { "name": "Contains methods for sorting, searching" },
                                                                { "name": "Cannot be instantiated" },
                                                                { "name": "All methods are static" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".sort(T[] a)",
                                                                    "children": [
                                                                        { "name": "sorts array" },
                                                                        { "name": "natural order" },
                                                                        { "name": "uses Dual-Pivot Quicksort" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".binarySearch(T[] a, T key)",
                                                                    "children": [
                                                                        { "name": "binary search on sorted array" },
                                                                        { "name": "returns index or negative" },
                                                                        { "name": "O(log n) operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".equals(T[] a, T[] b)",
                                                                    "children": [
                                                                        { "name": "compares arrays for equality" },
                                                                        { "name": "deep equality" },
                                                                        { "name": "returns boolean" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".copyOf(T[] original, int newLength)",
                                                                    "children": [
                                                                        { "name": "creates new array copy" },
                                                                        { "name": "truncates or pads" },
                                                                        { "name": "useful for resizing" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".fill(T[] a, T val)",
                                                                    "children": [
                                                                        { "name": "fills array with value" },
                                                                        { "name": "modifies original array" },
                                                                        { "name": "O(n) operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".asList(T... a)",
                                                                    "children": [
                                                                        { "name": "returns List view of array" },
                                                                        { "name": "changes reflect in array" },
                                                                        { "name": "fixed size (no add/remove)" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Functional Programming (java.util.stream)",
                                            "children": [
                                                {
                                                    "name": "Stream",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Enables functional-style operations" },
                                                                { "name": "Supports sequential and parallel processing" },
                                                                { "name": "Lazy evaluation (intermediate operations)" },
                                                                { "name": "Cannot be reused after terminal operation" },
                                                                { "name": "Works with collections and arrays" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Intermediate Operations",
                                                            "children": [
                                                                {
                                                                    "name": ".filter(Predicate p)",
                                                                    "children": [
                                                                        { "name": "keeps matching elements" },
                                                                        { "name": "returns new Stream" },
                                                                        { "name": "lazy operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".map(Function f)",
                                                                    "children": [
                                                                        { "name": "transforms each element" },
                                                                        { "name": "one-to-one mapping" },
                                                                        { "name": "lazy operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".flatMap(Function f)",
                                                                    "children": [
                                                                        { "name": "flattens nested streams" },
                                                                        { "name": "one-to-many mapping" },
                                                                        { "name": "lazy operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".distinct()",
                                                                    "children": [
                                                                        { "name": "removes duplicates" },
                                                                        { "name": "uses equals() and hashCode()" },
                                                                        { "name": "lazy operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".sorted()",
                                                                    "children": [
                                                                        { "name": "natural ordering" },
                                                                        { "name": "requires Comparable" },
                                                                        { "name": "lazy operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".limit(long maxSize)",
                                                                    "children": [
                                                                        { "name": "truncates stream" },
                                                                        { "name": "first n elements" },
                                                                        { "name": "short-circuiting" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".skip(long n)",
                                                                    "children": [
                                                                        { "name": "discards first n elements" },
                                                                        { "name": "returns remaining stream" },
                                                                        { "name": "lazy operation" }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Terminal Operations",
                                                            "children": [
                                                                {
                                                                    "name": ".forEach(Consumer c)",
                                                                    "children": [
                                                                        { "name": "performs action on each" },
                                                                        { "name": "no return value" },
                                                                        { "name": "eager operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".collect(Collector c)",
                                                                    "children": [
                                                                        { "name": "accumulates into collection" },
                                                                        { "name": "e.g., toList(), toSet()" },
                                                                        { "name": "eager operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".reduce(BinaryOperator op)",
                                                                    "children": [
                                                                        { "name": "reduces to single value" },
                                                                        { "name": "returns Optional" },
                                                                        { "name": "eager operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".count()",
                                                                    "children": [
                                                                        { "name": "returns number of elements" },
                                                                        { "name": "long primitive" },
                                                                        { "name": "eager operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".anyMatch(Predicate p)",
                                                                    "children": [
                                                                        { "name": "returns true if any match" },
                                                                        { "name": "short-circuiting" },
                                                                        { "name": "eager operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".allMatch(Predicate p)",
                                                                    "children": [
                                                                        { "name": "returns true if all match" },
                                                                        { "name": "short-circuiting" },
                                                                        { "name": "eager operation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".findFirst()",
                                                                    "children": [
                                                                        { "name": "returns first element" },
                                                                        { "name": "returns Optional" },
                                                                        { "name": "short-circuiting" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".findAny()",
                                                                    "children": [
                                                                        { "name": "returns any element" },
                                                                        { "name": "returns Optional" },
                                                                        { "name": "better for parallel streams" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Optional",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Container for possibly-null values" },
                                                                { "name": "Avoids NullPointerException" },
                                                                { "name": "Encourages null-safe programming" },
                                                                { "name": "Provides functional operations" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".of(T value)",
                                                                    "children": [
                                                                        { "name": "creates Optional with non-null" },
                                                                        { "name": "throws if null" },
                                                                        { "name": "factory method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".ofNullable(T value)",
                                                                    "children": [
                                                                        { "name": "creates Optional (null allowed)" },
                                                                        { "name": "returns empty if null" },
                                                                        { "name": "preferred method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".empty()",
                                                                    "children": [
                                                                        { "name": "returns empty Optional" },
                                                                        { "name": "singleton instance" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".orElse(T other)",
                                                                    "children": [
                                                                        { "name": "returns value if present" },
                                                                        { "name": "returns other if empty" },
                                                                        { "name": "eager evaluation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".orElseGet(Supplier s)",
                                                                    "children": [
                                                                        { "name": "returns value if present" },
                                                                        { "name": "supplies value if empty" },
                                                                        { "name": "lazy evaluation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".orElseThrow()",
                                                                    "children": [
                                                                        { "name": "returns value if present" },
                                                                        { "name": "throws if empty" },
                                                                        { "name": "throws NoSuchElementException" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".isPresent()",
                                                                    "children": [
                                                                        { "name": "returns true if value exists" },
                                                                        { "name": "simple check" },
                                                                        { "name": "avoid if using functional" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".ifPresent(Consumer c)",
                                                                    "children": [
                                                                        { "name": "executes consumer if present" },
                                                                        { "name": "does nothing if empty" },
                                                                        { "name": "preferred over isPresent()" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".map(Function f)",
                                                                    "children": [
                                                                        { "name": "transforms if present" },
                                                                        { "name": "returns Optional of result" },
                                                                        { "name": "returns empty if empty" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".filter(Predicate p)",
                                                                    "children": [
                                                                        { "name": "filters if present" },
                                                                        { "name": "returns empty if not match" },
                                                                        { "name": "returns self if match" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Modern Time API (java.time)",
                                            "children": [
                                                {
                                                    "name": "LocalDate",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Date without time (year, month, day)" },
                                                                { "name": "Immutable and thread-safe" },
                                                                { "name": "ISO-8601 calendar system" },
                                                                { "name": "Replaces java.util.Date" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".now()",
                                                                    "children": [
                                                                        { "name": "returns current date" },
                                                                        { "name": "from system clock" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".of(int year, int month, int day)",
                                                                    "children": [
                                                                        { "name": "creates date manually" },
                                                                        { "name": "validates values" },
                                                                        { "name": "throws DateTimeException" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".parse(String text)",
                                                                    "children": [
                                                                        { "name": "parses ISO-8601 date" },
                                                                        { "name": "YYYY-MM-DD format" },
                                                                        { "name": "throws DateTimeParseException" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getYear()",
                                                                    "children": [
                                                                        { "name": "returns year" },
                                                                        { "name": "int value" },
                                                                        { "name": "could be negative for BC" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getMonth()",
                                                                    "children": [
                                                                        { "name": "returns Month enum" },
                                                                        { "name": "JANUARY to DECEMBER" },
                                                                        { "name": "type-safe" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getDayOfMonth()",
                                                                    "children": [
                                                                        { "name": "returns day of month" },
                                                                        { "name": "1-31 range" },
                                                                        { "name": "int value" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getDayOfWeek()",
                                                                    "children": [
                                                                        { "name": "returns DayOfWeek enum" },
                                                                        { "name": "MONDAY to SUNDAY" },
                                                                        { "name": "ISO-8601 standard" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".isLeapYear()",
                                                                    "children": [
                                                                        { "name": "checks if leap year" },
                                                                        { "name": "follows Gregorian rules" },
                                                                        { "name": "returns boolean" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".plusDays(long days)",
                                                                    "children": [
                                                                        { "name": "adds days" },
                                                                        { "name": "returns new LocalDate" },
                                                                        { "name": "immutable" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".minusDays(long days)",
                                                                    "children": [
                                                                        { "name": "subtracts days" },
                                                                        { "name": "returns new LocalDate" },
                                                                        { "name": "immutable" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".isBefore(LocalDate other)",
                                                                    "children": [
                                                                        { "name": "compares chronological order" },
                                                                        { "name": "returns boolean" },
                                                                        { "name": "negative means earlier" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".isAfter(LocalDate other)",
                                                                    "children": [
                                                                        { "name": "compares chronological order" },
                                                                        { "name": "returns boolean" },
                                                                        { "name": "positive means later" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".format(DateTimeFormatter fmt)",
                                                                    "children": [
                                                                        { "name": "formats date" },
                                                                        { "name": "custom patterns" },
                                                                        { "name": "returns String" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "LocalTime",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Time without date (hour, minute, second)" },
                                                                { "name": "Immutable and thread-safe" },
                                                                { "name": "Nanosecond precision" },
                                                                { "name": "Replaces java.util.Date time handling" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".now()",
                                                                    "children": [
                                                                        { "name": "returns current time" },
                                                                        { "name": "from system clock" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".of(int hour, int minute)",
                                                                    "children": [
                                                                        { "name": "creates time manually" },
                                                                        { "name": "validates values" },
                                                                        { "name": "throws DateTimeException" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getHour()",
                                                                    "children": [
                                                                        { "name": "returns hour" },
                                                                        { "name": "0-23 range" },
                                                                        { "name": "24-hour clock" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getMinute()",
                                                                    "children": [
                                                                        { "name": "returns minute" },
                                                                        { "name": "0-59 range" },
                                                                        { "name": "int value" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".plusHours(long hours)",
                                                                    "children": [
                                                                        { "name": "adds hours" },
                                                                        { "name": "returns new LocalTime" },
                                                                        { "name": "immutable" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".minusHours(long hours)",
                                                                    "children": [
                                                                        { "name": "subtracts hours" },
                                                                        { "name": "returns new LocalTime" },
                                                                        { "name": "immutable" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".isBefore(LocalTime other)",
                                                                    "children": [
                                                                        { "name": "compares time order" },
                                                                        { "name": "returns boolean" },
                                                                        { "name": "negative means earlier" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".isAfter(LocalTime other)",
                                                                    "children": [
                                                                        { "name": "compares time order" },
                                                                        { "name": "returns boolean" },
                                                                        { "name": "positive means later" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "LocalDateTime",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Date and time combined" },
                                                                { "name": "Immutable and thread-safe" },
                                                                { "name": "Combines LocalDate + LocalTime" },
                                                                { "name": "Most commonly used date-time class" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".now()",
                                                                    "children": [
                                                                        { "name": "returns current date-time" },
                                                                        { "name": "from system clock" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".of(int year, int month, int day, int hour, int min)",
                                                                    "children": [
                                                                        { "name": "creates date-time manually" },
                                                                        { "name": "combines date and time" },
                                                                        { "name": "validates all values" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".toLocalDate()",
                                                                    "children": [
                                                                        { "name": "extracts date part" },
                                                                        { "name": "returns LocalDate" },
                                                                        { "name": "useful for splitting" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".toLocalTime()",
                                                                    "children": [
                                                                        { "name": "extracts time part" },
                                                                        { "name": "returns LocalTime" },
                                                                        { "name": "useful for splitting" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".atZone(ZoneId zone)",
                                                                    "children": [
                                                                        { "name": "converts to ZonedDateTime" },
                                                                        { "name": "adds timezone info" },
                                                                        { "name": "returns ZonedDateTime" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".format(DateTimeFormatter fmt)",
                                                                    "children": [
                                                                        { "name": "formats date-time" },
                                                                        { "name": "custom patterns" },
                                                                        { "name": "returns String" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "ZonedDateTime",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Date-time with timezone information" },
                                                                { "name": "Immutable and thread-safe" },
                                                                { "name": "Handles daylight saving time" },
                                                                { "name": "For international applications" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".now()",
                                                                    "children": [
                                                                        { "name": "returns current date-time with zone" },
                                                                        { "name": "from system clock" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".of(LocalDateTime dateTime, ZoneId zone)",
                                                                    "children": [
                                                                        { "name": "creates with date-time and zone" },
                                                                        { "name": "combines components" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getZone()",
                                                                    "children": [
                                                                        { "name": "returns timezone" },
                                                                        { "name": "ZoneId object" },
                                                                        { "name": "read only" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".withZoneSameInstant(ZoneId zone)",
                                                                    "children": [
                                                                        { "name": "converts timezone" },
                                                                        { "name": "maintains instant" },
                                                                        { "name": "returns new ZonedDateTime" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".toLocalDateTime()",
                                                                    "children": [
                                                                        { "name": "converts to LocalDateTime" },
                                                                        { "name": "removes zone info" },
                                                                        { "name": "useful for local processing" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".format(DateTimeFormatter fmt)",
                                                                    "children": [
                                                                        { "name": "formats with zone" },
                                                                        { "name": "custom patterns" },
                                                                        { "name": "returns String" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Duration",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Time-based interval" },
                                                                { "name": "Hours, minutes, seconds, nanoseconds" },
                                                                { "name": "Immutable and thread-safe" },
                                                                { "name": "For machine time calculations" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".between(Temporal start, Temporal end)",
                                                                    "children": [
                                                                        { "name": "creates duration" },
                                                                        { "name": "between time objects" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".ofHours(long hours)",
                                                                    "children": [
                                                                        { "name": "creates from hours" },
                                                                        { "name": "factory method" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".ofMinutes(long minutes)",
                                                                    "children": [
                                                                        { "name": "creates from minutes" },
                                                                        { "name": "factory method" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".ofSeconds(long seconds)",
                                                                    "children": [
                                                                        { "name": "creates from seconds" },
                                                                        { "name": "factory method" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".toDays()",
                                                                    "children": [
                                                                        { "name": "converts to days" },
                                                                        { "name": "long value" },
                                                                        { "name": "truncates" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".toHours()",
                                                                    "children": [
                                                                        { "name": "converts to hours" },
                                                                        { "name": "long value" },
                                                                        { "name": "truncates" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".toMinutes()",
                                                                    "children": [
                                                                        { "name": "converts to minutes" },
                                                                        { "name": "long value" },
                                                                        { "name": "truncates" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".plus(Duration other)",
                                                                    "children": [
                                                                        { "name": "adds another duration" },
                                                                        { "name": "returns new Duration" },
                                                                        { "name": "immutable" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".minus(Duration other)",
                                                                    "children": [
                                                                        { "name": "subtracts another duration" },
                                                                        { "name": "returns new Duration" },
                                                                        { "name": "immutable" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".isNegative()",
                                                                    "children": [
                                                                        { "name": "checks if negative" },
                                                                        { "name": "returns boolean" },
                                                                        { "name": "for validation" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Period",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Date-based interval" },
                                                                { "name": "Years, months, days" },
                                                                { "name": "Immutable and thread-safe" },
                                                                { "name": "For human date calculations" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".between(LocalDate start, LocalDate end)",
                                                                    "children": [
                                                                        { "name": "creates period" },
                                                                        { "name": "between dates" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".ofYears(int years)",
                                                                    "children": [
                                                                        { "name": "creates from years" },
                                                                        { "name": "factory method" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".ofMonths(int months)",
                                                                    "children": [
                                                                        { "name": "creates from months" },
                                                                        { "name": "factory method" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".ofWeeks(int weeks)",
                                                                    "children": [
                                                                        { "name": "creates from weeks" },
                                                                        { "name": "converts to days" },
                                                                        { "name": "7 days per week" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".ofDays(int days)",
                                                                    "children": [
                                                                        { "name": "creates from days" },
                                                                        { "name": "factory method" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getYears()",
                                                                    "children": [
                                                                        { "name": "returns years component" },
                                                                        { "name": "int value" },
                                                                        { "name": "may be negative" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getMonths()",
                                                                    "children": [
                                                                        { "name": "returns months component" },
                                                                        { "name": "int value" },
                                                                        { "name": "may be negative" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getDays()",
                                                                    "children": [
                                                                        { "name": "returns days component" },
                                                                        { "name": "int value" },
                                                                        { "name": "may be negative" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".plus(Period other)",
                                                                    "children": [
                                                                        { "name": "adds another period" },
                                                                        { "name": "returns new Period" },
                                                                        { "name": "immutable" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".minus(Period other)",
                                                                    "children": [
                                                                        { "name": "subtracts another period" },
                                                                        { "name": "returns new Period" },
                                                                        { "name": "immutable" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".isNegative()",
                                                                    "children": [
                                                                        { "name": "checks if negative" },
                                                                        { "name": "returns boolean" },
                                                                        { "name": "for validation" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Concurrency (java.util.concurrent)",
                                            "children": [
                                                {
                                                    "name": "Thread",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Represents thread of execution" },
                                                                { "name": "Implements Runnable" },
                                                                { "name": "Provides thread management" },
                                                                { "name": "JVM schedules threads" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".start()",
                                                                    "children": [
                                                                        { "name": "starts new thread" },
                                                                        { "name": "must be called once" },
                                                                        { "name": "cannot call twice" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".run()",
                                                                    "children": [
                                                                        { "name": "contains thread logic" },
                                                                        { "name": "called by JVM after start" },
                                                                        { "name": "can be overridden" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".sleep(long millis)",
                                                                    "children": [
                                                                        { "name": "pauses thread" },
                                                                        { "name": "static method" },
                                                                        { "name": "throws InterruptedException" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".join()",
                                                                    "children": [
                                                                        { "name": "waits for thread to die" },
                                                                        { "name": "throws InterruptedException" },
                                                                        { "name": "synchronizes with thread" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".interrupt()",
                                                                    "children": [
                                                                        { "name": "interrupts thread" },
                                                                        { "name": "sets interrupt flag" },
                                                                        { "name": "wakes sleeping thread" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".yield()",
                                                                    "children": [
                                                                        { "name": "hints scheduler" },
                                                                        { "name": "gives up CPU" },
                                                                        { "name": "static method" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getName()",
                                                                    "children": [
                                                                        { "name": "returns thread name" },
                                                                        { "name": "default: Thread-X" },
                                                                        { "name": "useful for debugging" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".setName(String name)",
                                                                    "children": [
                                                                        { "name": "sets thread name" },
                                                                        { "name": "for identification" },
                                                                        { "name": "can be set anytime" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "ExecutorService",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Manages thread pool for task execution" },
                                                                { "name": "Better than creating threads manually" },
                                                                { "name": "Provides task lifecycle management" },
                                                                { "name": "Recommended for production code" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".submit(Callable<T> task)",
                                                                    "children": [
                                                                        { "name": "submits task for execution" },
                                                                        { "name": "returns Future<T>" },
                                                                        { "name": "handles exceptions" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".submit(Runnable task)",
                                                                    "children": [
                                                                        { "name": "submits task for execution" },
                                                                        { "name": "returns Future" },
                                                                        { "name": "no return value" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".invokeAll(Collection tasks)",
                                                                    "children": [
                                                                        { "name": "executes all tasks" },
                                                                        { "name": "returns list of Futures" },
                                                                        { "name": "waits for all to complete" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".invokeAny(Collection tasks)",
                                                                    "children": [
                                                                        { "name": "executes tasks" },
                                                                        { "name": "returns first successful result" },
                                                                        { "name": "cancels remaining" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".shutdown()",
                                                                    "children": [
                                                                        { "name": "initiates orderly shutdown" },
                                                                        { "name": "no new tasks accepted" },
                                                                        { "name": "completes existing tasks" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".shutdownNow()",
                                                                    "children": [
                                                                        { "name": "immediately shuts down" },
                                                                        { "name": "returns pending tasks" },
                                                                        { "name": "interrupts running tasks" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".awaitTermination(long timeout, TimeUnit unit)",
                                                                    "children": [
                                                                        { "name": "waits for termination" },
                                                                        { "name": "blocks until done or timeout" },
                                                                        { "name": "returns boolean" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Future",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Represents asynchronous computation result" },
                                                                { "name": "Provides methods to check completion" },
                                                                { "name": "Can cancel execution" },
                                                                { "name": "Blocks on get() until result available" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".get()",
                                                                    "children": [
                                                                        { "name": "waits for result" },
                                                                        { "name": "blocks until available" },
                                                                        { "name": "throws exceptions" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".get(long timeout, TimeUnit unit)",
                                                                    "children": [
                                                                        { "name": "waits with timeout" },
                                                                        { "name": "throws TimeoutException" },
                                                                        { "name": "for non-blocking code" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".cancel(boolean mayInterruptIfRunning)",
                                                                    "children": [
                                                                        { "name": "attempts to cancel" },
                                                                        { "name": "true if cancelled" },
                                                                        { "name": "may interrupt if running" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".isCancelled()",
                                                                    "children": [
                                                                        { "name": "checks if cancelled" },
                                                                        { "name": "returns boolean" },
                                                                        { "name": "before/after completion" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".isDone()",
                                                                    "children": [
                                                                        { "name": "checks if completed" },
                                                                        { "name": "returns boolean" },
                                                                        { "name": "normal or exceptional" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "AtomicInteger",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Thread-safe integer wrapper" },
                                                                { "name": "Atomic operations without synchronization" },
                                                                { "name": "Uses CAS (Compare-And-Swap)" },
                                                                { "name": "Better performance than synchronized" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".get()",
                                                                    "children": [
                                                                        { "name": "returns current value" },
                                                                        { "name": "thread-safe read" },
                                                                        { "name": "volatile semantics" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".set(int newValue)",
                                                                    "children": [
                                                                        { "name": "sets new value" },
                                                                        { "name": "thread-safe write" },
                                                                        { "name": "volatile semantics" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".compareAndSet(int expect, int update)",
                                                                    "children": [
                                                                        { "name": "sets if current == expected" },
                                                                        { "name": "atomic operation" },
                                                                        { "name": "returns true if successful" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".getAndIncrement()",
                                                                    "children": [
                                                                        { "name": "increments atomically" },
                                                                        { "name": "returns old value" },
                                                                        { "name": "post-increment" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".incrementAndGet()",
                                                                    "children": [
                                                                        { "name": "increments atomically" },
                                                                        { "name": "returns new value" },
                                                                        { "name": "pre-increment" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".addAndGet(int delta)",
                                                                    "children": [
                                                                        { "name": "adds delta atomically" },
                                                                        { "name": "returns new value" },
                                                                        { "name": "for arbitrary addition" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "I/O & File Operations (java.io)",
                                            "children": [
                                                {
                                                    "name": "File",
                                                    "children": [
                                                        {
                                                            "name": "Description",
                                                            "children": [
                                                                { "name": "Represents file/directory path" },
                                                                { "name": "Not the file content itself" },
                                                                { "name": "Provides metadata operations" },
                                                                { "name": "Older API (java.nio.file preferred)" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".exists()",
                                                                    "children": [
                                                                        { "name": "checks if file exists" },
                                                                        { "name": "returns boolean" },
                                                                        { "name": "follows symbolic links" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".isFile()",
                                                                    "children": [
                                                                        { "name": "checks if regular file" },
                                                                        { "name": "returns false for directories" },
                                                                        { "name": "returns false if not exists" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".isDirectory()",
                                                                    "children": [
                                                                        { "name": "checks if directory" },
                                                                        { "name": "returns boolean" },
                                                                        { "name": "follows symbolic links" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".length()",
                                                                    "children": [
                                                                        { "name": "returns file size in bytes" },
                                                                        { "name": "long value" },
                                                                        { "name": "0 if directory" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".list()",
                                                                    "children": [
                                                                        { "name": "returns directory contents" },
                                                                        { "name": "String array of names" },
                                                                        { "name": "null if not directory" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".mkdir()",
                                                                    "children": [
                                                                        { "name": "creates directory" },
                                                                        { "name": "returns true if successful" },
                                                                        { "name": "only last directory" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".mkdirs()",
                                                                    "children": [
                                                                        { "name": "creates all directories" },
                                                                        { "name": "including parents" },
                                                                        { "name": "returns true if successful" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".delete()",
                                                                    "children": [
                                                                        { "name": "deletes file/directory" },
                                                                        { "name": "returns true if successful" },
                                                                        { "name": "directory must be empty" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".createNewFile()",
                                                                    "children": [
                                                                        { "name": "creates empty file" },
                                                                        { "name": "returns true if created" },
                                                                        { "name": "false if already exists" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "BufferedReader",
                                                    "children": [

                                                        { "name": "Buffered character input" },
                                                        { "name": "Reads text efficiently" },
                                                        { "name": "Wraps other Readers" },
                                                        { "name": "Provides readLine() method" }
                                                        ,
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".readLine()",
                                                                    "children": [
                                                                        { "name": "reads a line of text" },
                                                                        { "name": "returns null at EOF" },
                                                                        { "name": "most commonly used" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".ready()",
                                                                    "children": [
                                                                        { "name": "checks if can read" },
                                                                        { "name": "returns boolean" },
                                                                        { "name": "non-blocking check" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".mark(int readAheadLimit)",
                                                                    "children": [
                                                                        { "name": "marks current position" },
                                                                        { "name": "supports reset" },
                                                                        { "name": "requires readAheadLimit" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".reset()",
                                                                    "children": [
                                                                        { "name": "resets to marked position" },
                                                                        { "name": "re-reads from mark" },
                                                                        { "name": "throws if mark invalid" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".close()",
                                                                    "children": [
                                                                        { "name": "closes reader" },
                                                                        { "name": "releases resources" },
                                                                        { "name": "should be in finally" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "BufferedWriter",
                                                    "children": [

                                                        { "name": "Buffered character output" },
                                                        { "name": "Writes text efficiently" },
                                                        { "name": "Wraps other Writers" },
                                                        { "name": "Reduces I/O operations" }
                                                        ,
                                                        {
                                                            "name": "Methods",
                                                            "children": [
                                                                {
                                                                    "name": ".write(String str)",
                                                                    "children": [
                                                                        { "name": "writes string" },
                                                                        { "name": "buffered writing" },
                                                                        { "name": "can be many writes" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".newLine()",
                                                                    "children": [
                                                                        { "name": "writes platform-specific line" },
                                                                        { "name": "\\n on Unix" },
                                                                        { "name": "\\r\\n on Windows" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".flush()",
                                                                    "children": [
                                                                        { "name": "forces buffer write" },
                                                                        { "name": "ensures data written" },
                                                                        { "name": "performance impact" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": ".close()",
                                                                    "children": [
                                                                        { "name": "flushes and closes" },
                                                                        { "name": "releases resources" },
                                                                        { "name": "should be in finally" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Streams API",
                            "children": [
                                { "name": "\"Functional-style data processing pipeline\"" },
                                { "name": "Introduced in Java 8" },
                                { "name": "Used for filtering, mapping, reducing collections" },
                                { "name": "Supports parallel processing" },
                                { "name": "Does NOT modify original collection" },
                                { "name": "Lazy evaluation: operations execute only when terminal operation runs" },

                                {
                                    "name": "Stream Flow",
                                    "children": [
                                        { "name": "Source → Intermediate Operations → Terminal Operation" }
                                    ]
                                },

                                {
                                    "name": "Intermediate Operations (lazy)",
                                    "children": [
                                        { "name": ".filter() → keeps matching elements" },
                                        { "name": ".map() → transforms elements" },
                                        { "name": ".sorted() → sorts elements" },
                                        { "name": ".distinct() → removes duplicates" },
                                        { "name": ".limit(n) → keeps first n elements" },
                                        { "name": ".skip(n) → skips first n elements" }
                                    ]
                                },

                                {
                                    "name": "Terminal Operations",
                                    "children": [
                                        { "name": ".forEach() → performs action on each element" },
                                        { "name": ".collect() → collects result into collection" },
                                        { "name": ".reduce() → combines elements into single value" },
                                        { "name": ".count() → counts elements" },
                                        { "name": ".findFirst() → returns first element" },
                                        { "name": ".anyMatch() → checks condition match" }
                                    ]
                                },

                                {
                                    "name": "Parallel Streams",
                                    "children": [
                                        { "name": ".parallelStream() → processes using ForkJoinPool threads" },
                                        { "name": "Useful for CPU-intensive large datasets" },
                                        { "name": "Can improve performance with multicore CPUs" },
                                        { "name": "May introduce synchronization/race-condition issues" }
                                    ]
                                },

                                {
                                    "name": "Ex:-\n\nList<Integer> nums = List.of(1,2,3,4,5);\n\nint sum = nums.stream()\n    .filter(x -> x % 2 == 0)\n    .map(x -> x * 10)\n    .reduce(0, Integer::sum);\n\nSystem.out.println(sum);"
                                },

                                {
                                    "name": "Ex:- Parallel Stream\n\nList<Integer> nums = List.of(1,2,3,4,5);\n\nnums.parallelStream()\n    .forEach(x -> System.out.println(Thread.currentThread().getName() + \" \" + x));"
                                }
                            ]
                        },
                        {
                            "name": "Concurrency (threads, locks, executors)",
                            "children": [
                                {
                                    "name": "Thread Lifecycle (6 States)",
                                    "children": [
                                        {
                                            "name": "NEW: Created, not started",
                                            "children": [
                                                {
                                                    "name": "Thread t = new Thread(() -> System.out.println(\"Hi\"));\n// t is in NEW state, start() not called yet"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "RUNNABLE: Ready to run or running",
                                            "children": [
                                                {
                                                    "name": "t.start();\n// t transitions to RUNNABLE\n// OS scheduler decides when it actually runs"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "BLOCKED: Waiting for synchronized lock",
                                            "children": [
                                                {
                                                    "name": "synchronized(obj) {\n    // If another thread holds lock,\n    // this thread goes to BLOCKED state\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "WAITING: Paused, waiting for signal",
                                            "children": [
                                                {
                                                    "name": "synchronized(obj) {\n    obj.wait();\n    // Stays paused until notify() from another thread\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "TIMED_WAITING: Paused with timeout",
                                            "children": [
                                                {
                                                    "name": "Thread.sleep(5000);\n// or\nsynchronized(obj) {\n    obj.wait(5000);\n}\n// Auto-wakes after timeout or if notified"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "TERMINATED: Execution complete",
                                            "children": [
                                                {
                                                    "name": "public void run() {\n    System.out.println(\"Working...\");\n}\n// Thread moves to TERMINATED when run() finishes"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Thread vs Runnable",
                                    "children": [
                                        {
                                            "name": "Thread = actual worker thread"
                                        },
                                        {
                                            "name": "Runnable = task/code to execute"
                                        },
                                        {
                                            "name": "Runnable preferred because task is separated from thread"
                                        },
                                        {
                                            "name": "Runnable works naturally with thread pools/executors"
                                        },
                                        {
                                            "name": "Thread class implements Runnable"
                                        },
                                        {
                                            "name": "Ex:-\n\n// Extending Thread\nclass MyThread extends Thread {\n    public void run() {\n        System.out.println(\"Thread running\");\n    }\n}\nnew MyThread().start();"
                                        },
                                        {
                                            "name": "Ex:-\n\n// Using Runnable (preferred)\nRunnable task = () -> System.out.println(\"Task running\");\nThread t = new Thread(task);\nt.start();"
                                        }
                                    ]
                                },
                                {
                                    "name": "Runnable vs Callable",
                                    "children": [
                                        {
                                            "name": "Runnable: No return value, cannot throw checked exception"
                                        },
                                        {
                                            "name": "Callable: Returns value, can throw checked exception"
                                        },
                                        {
                                            "name": "Runnable uses run()"
                                        },
                                        {
                                            "name": "Callable uses call()"
                                        },
                                        {
                                            "name": "Callable works with Future to get result later"
                                        },
                                        {
                                            "name": "Ex:- Runnable\n\nRunnable task = () -> {\n    System.out.println(\"Working...\");\n};\n\nExecutorService executor = Executors.newSingleThreadExecutor();\nexecutor.submit(task);"
                                        },
                                        {
                                            "name": "Ex:- Callable\n\nCallable<Integer> task = () -> {\n    return 10 + 20;\n};\n\nExecutorService executor = Executors.newSingleThreadExecutor();\nFuture<Integer> future = executor.submit(task);\n\nInteger result = future.get();\nSystem.out.println(result); // 30"
                                        }
                                    ]
                                },
                                {
                                    "name": "Java Threading",
                                    "children": [
                                        {
                                            "name": "\"1:1 mapping — JVM threads map to OS threads\""
                                        },
                                        {
                                            "name": "Multiple threads share same Heap (race conditions possible)"
                                        },
                                        {
                                            "name": "Thread pool: Reuse threads to avoid creation overhead"
                                        },
                                        {
                                            "name": "Executors manage thread lifecycle automatically"
                                        },
                                        {
                                            "name": "Ex:-\n\n// Example 1: Creating single thread\nThread t = new Thread(() -> System.out.println(\"Running\"));\nt.start();\n\n// Example 2: Using executor (thread pool)\nExecutorService executor = Executors.newFixedThreadPool(4);\nexecutor.submit(() -> System.out.println(\"Task 1\"));\nexecutor.submit(() -> System.out.println(\"Task 2\"));\nexecutor.submit(() -> System.out.println(\"Task 3\"));\nexecutor.submit(() -> System.out.println(\"Task 4\"));\nexecutor.submit(() -> System.out.println(\"Task 5\"));\n\nexecutor.shutdown();"
                                        }
                                    ]
                                }
                            ]
                        },
                    ],
                },
                {
                    "name": "Operating System",
                    "children": [
                        {
                            "name": "Processes vs Threads",
                            "children": [
                                {
                                    "name": "Process",
                                    "children": [
                                        { "name": "\"Independent program execution with own memory space\"" },
                                        { "name": "One JVM = ONE process only" },
                                        { "name": "A process can be as small as a single program and as large as multiple files/modules working together" },
                                        { "name": "Separate memory: Stack, Heap, Code, Data segments" },
                                        { "name": "Creation overhead: HIGH" },
                                        { "name": "Context switching: MORE expensive" },
                                        {
                                            "name": "Real Example: Spring Boot Application\n\n// Single Spring Boot Process with MANY files..."
                                        }
                                    ]
                                },

                                {
                                    "name": "Thread",
                                    "children": [
                                        { "name": "\"Lightweight task within a process\"" },
                                        { "name": "ONE JVM (process) can have MANY threads running inside" },
                                        { "name": "Shares Heap with other threads (same process)" },
                                        { "name": "Each thread has its own: Stack (call stack), local variables" },
                                        { "name": "Creation overhead: LOW" },
                                        { "name": "Context switching: LESS expensive" },
                                        {
                                            "name": "Transitions",
                                            "children": [
                                                { "name": "start() → NEW → RUNNABLE" },
                                                { "name": "sleep()/wait() → RUNNABLE → WAITING" },
                                                { "name": "lock acquired → BLOCKED → RUNNABLE" },
                                                { "name": "run() completes → TERMINATED" }
                                            ]
                                        },

                                        {
                                            "name": "Real Example: Spring Boot Handling Multiple Requests\n\n// SAME Spring Boot app..."
                                        }
                                    ]
                                },
                                {
                                    "name": "Lifecycle",
                                    "children": [
                                        { "name": "New → process/thread is being created" },
                                        { "name": "Ready → waiting for CPU" },
                                        { "name": "Running → executing on CPU" },
                                        { "name": "Waiting / Blocked → waiting for I/O/event" },
                                        { "name": "Terminated → finished execution" }
                                    ]
                                },
                                {
                                    "name": "Key Difference",
                                    "children": [
                                        { "name": "Process: Isolated, expensive to create & switch" },
                                        { "name": "Thread: Shared heap, cheap to create & switch" },
                                        { "name": "Multiple threads = concurrency but needs synchronization" }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CPU Scheduling",
                            "children": [
                                {
                                    "name": "Why Scheduling?",
                                    "children": [
                                        { "name": "Goal: Maximize CPU utilization, minimize waiting time" },
                                        { "name": "Time-sharing: Give each process/thread small time slice (quantum)" },
                                        { "name": "Prevents single process from monopolizing CPU" }
                                    ]
                                },
                                {
                                    "name": "Scheduling Algorithms",
                                    "children": [
                                        {
                                            "name": "FCFS (First Come First Serve)",
                                            "children": [
                                                { "name": "Simple: Execute in arrival order" },
                                                { "name": "Example: P1(8ms), P2(4ms), P3(2ms) → Avg Wait = 6.67ms" },
                                                { "name": "❌ Convoy effect: Long process blocks short ones" }
                                            ]
                                        },
                                        {
                                            "name": "SJF (Shortest Job First)",
                                            "children": [
                                                { "name": "Execute shortest job first" },
                                                { "name": "Example: P1(8ms), P2(4ms), P3(2ms) → Avg Wait = 2.67ms" },
                                                { "name": "✅ Optimal average wait time" },
                                                { "name": "❌ Starvation: Long jobs may never run" }
                                            ]
                                        },
                                        {
                                            "name": "Round Robin (RR)",
                                            "children": [
                                                { "name": "Each process gets equal time slice (quantum)" },
                                                { "name": "If not complete, goes to back of queue" },
                                                { "name": "Example: Quantum=3ms, processes rotate fairly" },
                                                { "name": "✅ Fair allocation, prevents starvation" },
                                                { "name": "❌ Context switching overhead if quantum too small" }
                                            ]
                                        },
                                        {
                                            "name": "Priority Scheduling",
                                            "children": [
                                                {
                                                    "name": "Non-Preemptive",
                                                    "children": [
                                                        { "name": "Once a process starts, it runs until completion" },
                                                        { "name": "Higher priority process must wait if CPU is busy" },
                                                        { "name": "❌ Slow response for high-priority arriving later" },
                                                        {
                                                            "name": "Ex:-\n\nP1 (low priority) starts\nP2 (high priority) arrives\n→ P2 must wait until P1 finishes"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Preemptive",
                                                    "children": [
                                                        { "name": "CPU can be taken away by higher priority process" },
                                                        { "name": "Immediate execution of higher priority task" },
                                                        { "name": "Better responsiveness for critical tasks" },
                                                        { "name": "❌ More context switching overhead" },
                                                        {
                                                            "name": "Ex:-\n\nP1 (low priority) running\nP2 (high priority) arrives\n→ P1 paused, P2 runs immediately"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Common Issue",
                                                    "children": [
                                                        { "name": "Starvation: Low priority processes may never execute" },
                                                        { "name": "Solution: Aging (increase priority over time)" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Multilevel Queue",
                                            "children": [
                                                { "name": "Different queues with different priorities" },
                                                { "name": "High Priority: System processes (RR)" },
                                                { "name": "Medium Priority: Interactive processes (RR)" },
                                                { "name": "Low Priority: Background processes (FCFS)" },
                                                { "name": "✅ Appropriate scheduling for different job types" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Context Switching Overhead",
                                    "children": [
                                        { "name": "\"Switching CPU from one process/thread to another\"" },
                                        { "name": "Involves saving current state and loading new state" },
                                        { "name": "Causes performance overhead (CPU + cache loss)" },
                                        { "name": "Too many switches → reduced system efficiency" },
                                        { "name": "Trade-off: Smaller time slice → better fairness but more switches" }
                                    ]
                                },
                                {
                                    "name": "Java Thread Scheduling",
                                    "children": [
                                        { "name": "JVM delegates to OS scheduler (can't control directly)" },
                                        { "name": "Thread priority (1-10, default 5)" },
                                        {
                                            "name": "Ex:-\n\nThread t = new Thread(() -> {});\nt.setPriority(Thread.MAX_PRIORITY); // 10\nt.setPriority(Thread.MIN_PRIORITY); // 1"
                                        },
                                        { "name": "Note: Priority is suggestion only, OS may ignore" }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Memory Management",
                            "children": [

                                {
                                    "name": "Virtual Memory",
                                    "children": [
                                        { "name": "\"Abstraction: Each process thinks it has full memory space\"" },
                                        { "name": "Demand Paging: Only required pages are loaded into RAM initially" },
                                        { "name": "Unused pages remain on disk until accessed" },
                                        { "name": "Virtual memory provides contiguous logical address space even if physical RAM is fragmented" },
                                        { "name": "Virtual Address: Process sees this address" },
                                        { "name": "Physical Address: Actual RAM location" },
                                        { "name": "MMU (Memory Management Unit): Hardware translates VA → PA using page tables" },
                                        { "name": "MMU only performs translation, it does NOT store process state" },
                                        { "name": "Benefits: Protection, relocation, memory sharing" }
                                    ]
                                },
                                {
                                    "name": "Paging",
                                    "children": [
                                        { "name": "Virtual memory divided into Pages (typically 4KB)" },
                                        { "name": "Physical memory divided into Frames (same size as pages)" },
                                        { "name": "Each process has its own Page Table" },
                                        { "name": "Page Table: Maps virtual page number → physical frame number" },
                                        { "name": "Context switch changes active page table used by MMU" },
                                        { "name": "TLB (Translation Lookaside Buffer): Cache for page table entries" },
                                        { "name": "Different processes can map different virtual addresses to same physical frame" },
                                        {
                                            "name": "Ex:-\n\nProcess A: VA 0x1000 → Frame 5\nProcess B: VA 0x9000 → Frame 5\n(shared physical memory)"
                                        },
                                        {
                                            "name": "Ex:-\n\nPage 0 → Frame 5\nPage 1 → Frame 2\nPage 2 → Not in RAM (page fault)"
                                        }
                                    ]
                                }

                                ,
                                {
                                    "name": "Page Fault Handling",
                                    "children": [
                                        { "name": "Occurs when: Accessing page not currently in memory" },
                                        { "name": "Steps:" },
                                        { "name": "  1. Hardware raises Page Fault exception" },
                                        { "name": "  2. OS finds free frame (if none, run eviction algorithm)" },
                                        { "name": "  3. Load page from disk into frame (SLOW: 5-10ms)" },
                                        { "name": "  4. Update page table with new mapping" },
                                        { "name": "  5. Restart instruction that caused fault" },
                                        { "name": "Cost: 1000x slower than memory access!" },
                                        { "name": "Impact: Few page faults OK, many = severe performance loss" }
                                    ]
                                },
                                {
                                    "name": "Page Replacement Algorithms",
                                    "children": [
                                        {
                                            "name": "FIFO (First In First Out)",
                                            "children": [
                                                { "name": "Remove oldest page when memory full" },
                                                { "name": "Simple but inefficient" },
                                                { "name": "❌ Belady's anomaly: More frames = more faults" }
                                            ]
                                        },
                                        {
                                            "name": "LRU (Least Recently Used)",
                                            "children": [
                                                { "name": "Remove least recently accessed page" },
                                                { "name": "Good locality of reference" },
                                                { "name": "✅ Best practical algorithm" },
                                                { "name": "❌ Expensive to track access time" }
                                            ]
                                        },
                                        {
                                            "name": "LFU (Least Frequently Used)",
                                            "children": [
                                                { "name": "Remove least frequently used page" },
                                                { "name": "Works well for long-running programs" },
                                                { "name": "❌ Requires frequency counter" }
                                            ]
                                        },
                                        {
                                            "name": "Clock Algorithm (Approximation of LRU)",
                                            "children": [
                                                { "name": "Efficient implementation of LRU" },
                                                { "name": "Uses reference bit instead of timestamp" },
                                                { "name": "✅ Good balance of simplicity and performance" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Segmentation",
                                    "children": [
                                        { "name": "Virtual memory divided into logical segments" },

                                        {
                                            "name": "Code Segment",
                                            "children": [
                                                { "name": "Stores program instructions (compiled code)" },
                                                {
                                                    "name": "Ex:-\n\nvoid greet() {\n  System.out.println(\"Hello\");\n}\n\n// Compiled instructions stored in Code Segment"
                                                }
                                            ]
                                        },

                                        {
                                            "name": "Data Segment",
                                            "children": [
                                                { "name": "Stores static/global variables" },
                                                {
                                                    "name": "Ex:-\n\nclass A {\n  static int count = 10;\n}\n\n// count stored in Data Segment"
                                                }
                                            ]
                                        },

                                        {
                                            "name": "Stack Segment",
                                            "children": [
                                                { "name": "Stores method calls and local variables" },
                                                {
                                                    "name": "Ex:-\n\nvoid test() {\n  int x = 5;\n}\n\n// x stored in Stack Segment"
                                                }
                                            ]
                                        },

                                        {
                                            "name": "Heap Segment",
                                            "children": [
                                                { "name": "Stores dynamically created objects" },
                                                {
                                                    "name": "Ex:-\n\nString s = new String(\"Hello\");\n\n// Object stored in Heap Segment"
                                                }
                                            ]
                                        },

                                        {
                                            "name": "Segmentation Fault",
                                            "children": [
                                                { "name": "\"Occurs when accessing invalid memory region\"" },
                                                {
                                                    "name": "Ex:-\n\nint[] arr = new int[3];\narr[10] = 5; // invalid access"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Memory Layout (Java Process)",
                                    "children": [
                                        { "name": "Stack (local variables, function calls) is High Address" },
                                        { "name": "(empty space) gives room for both stack and heap to expand with colliding into each other" },
                                        { "name": "Heap (objects, dynamic allocation)" },
                                        { "name": "Data Segment (static variables)" },
                                        { "name": "Code Segment (instructions) is the Low Address" }
                                    ]
                                },
                                {
                                    "name": "Java Memory Management",
                                    "children": [
                                        { "name": "Heap allocation: Objects allocated on heap (new keyword)" },
                                        { "name": "Stack allocation: Primitives and references on stack (auto-freed)" },
                                        { "name": "Garbage Collection: JVM automatically reclaims memory from unused objects" },
                                        { "name": "Memory Leak: Object referenced but no longer needed" },
                                        {
                                            "name": "Ex:-\n\nstatic List<Object> cache = new ArrayList<>();\ncache.add(obj); // never removed → memory leak"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Synchronization & Concurrency",
                            "children": [
                                {
                                    "name": "Race Condition",
                                    "children": [
                                        { "name": "\"Two threads access shared resource without synchronization\"" },
                                        { "name": "Result depends on thread scheduling order" },
                                        { "name": "Ex:-\n\nint count = 0;\ncount++; // NOT atomic: load → increment → store\n\nThread1: load(0) → increment(1) → store(1)\nThread2: load(0) → increment(1) → store(1)\n// Both store 1, but should be 2!" },
                                        {
                                            "name": "How to fix it ?",
                                            "children": [
                                                { "name": "synchronized keyword (mutual exclusion)" },
                                                { "name": "volatile (visibility guarantee — prevents stale reads, ensures happens-before)" },
                                                { "name": "AtomicInteger, AtomicReference like atomic classes (atomic operations via CAS)" },
                                                { "name": "Immutable objects (no mutations possible)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Critical Section",
                                    "children": [
                                        { "name": "\"Code that accesses shared resource\"" },
                                        { "name": "Only one thread should execute at a time" },
                                        {
                                            "name": "Ex:-\n\nsynchronized void increment() {\n    count++; // Only one thread at a time\n}"
                                        }
                                    ]
                                },
                                {
                                    "name": "Mutex (Mutual Exclusion)",
                                    "children": [
                                        { "name": "\"Binary lock: only one thread can hold it\"" },
                                        { "name": "Acquire before entering critical section" },
                                        { "name": "Release after exiting critical section" },
                                        {
                                            "name": "Ex:-\n\nLock lock = new ReentrantLock();\nlock.lock();\ntry { count++; }\nfinally { lock.unlock(); }"
                                        }
                                    ]
                                },
                                {
                                    "name": "Semaphore",
                                    "children": [
                                        { "name": "\"Counter: N threads can access resource\"" },
                                        { "name": "acquire(): Decrements count (blocks if 0)" },
                                        { "name": "release(): Increments count (wakes one thread)" },
                                        {
                                            "name": "Ex:-\n\nSemaphore sem = new Semaphore(3); // 3 permits\nsem.acquire(); // max 3 threads\ntry { /* use resource */ }\nfinally { sem.release(); }"
                                        }
                                    ]
                                },
                                {
                                    "name": "Deadlock",
                                    "children": [
                                        { "name": "\"Two or more threads blocked forever waiting for each other\"" },
                                        {
                                            "name": "Example:"
                                        },
                                        { "name": "Thread1: locks lock1, waits for lock2" },
                                        { "name": "Thread2: locks lock2, waits for lock1" },
                                        { "name": "→ Both blocked forever (circular wait)" },
                                        {
                                            "name": "Necessary Conditions (ALL must be true):",
                                            "children": [
                                                { "name": "1. Mutual Exclusion: Resource can't be shared" },
                                                { "name": "2. Hold and Wait: Hold resource while waiting for another" },
                                                { "name": "3. No Preemption: Resource can't be forcibly taken" },
                                                { "name": "4. Circular Wait: Cycle of processes waiting" }
                                            ]
                                        },
                                        {
                                            "name": "Prevention: Break any ONE condition",
                                            "children": [
                                                { "name": "- Break mutual exclusion: Not always possible" },
                                                { "name": "- Break hold and wait: Release all before acquiring new" },
                                                { "name": "- Break no preemption: OS forcibly takes resource" },
                                                { "name": "- Break circular wait: Impose lock ordering" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Livelock",
                                    "children": [
                                        { "name": "\"Processes keep changing state but make no progress\"" },
                                        { "name": "Example: Both threads yielding to each other endlessly" },
                                        { "name": "Difference from deadlock: Threads are running, not blocked" },
                                        { "name": "Solution: Add randomness or backoff" }
                                    ]
                                },
                                {
                                    "name": "Starvation",
                                    "children": [
                                        { "name": "\"Low-priority thread never gets CPU time\"" },
                                        { "name": "High-priority threads keep running" },
                                        { "name": "Solution: Priority aging (increase priority over time)" }
                                    ]
                                },
                                {
                                    "name": "Java Memory Model (Happens-Before)",
                                    "children": [
                                        { "name": "\"Relationship that guarantees visibility of changes\"" },
                                        { "name": "Without synchronization, changes might not be visible to other threads" },
                                        {
                                            "name": "volatile keyword:",
                                            "children": [
                                                { "name": "Can only be applied to fields (instance/static variables)" },
                                                { "name": "Ensures visibility across threads" },
                                                { "name": "But NOT atomicity" },
                                                { "name": "Use for flags, status variables" }
                                            ]
                                        },
                                        {
                                            "name": "synchronized keyword:",
                                            "children": [
                                                { "name": "Ensures both atomicity AND visibility" },
                                                { "name": "Implies memory barrier (more expensive)" }
                                            ]
                                        },
                                        {
                                            "name": "Ex:-\n\nprivate volatile boolean flag = false;\n// Changes to flag visible immediately to other threads"
                                        }
                                    ]
                                },
                                {
                                    "name": "Java Synchronization Mechanisms",
                                    "children": [
                                        {
                                            "name": "1. synchronized (monitor lock)",
                                            "children": [
                                                { "name": "synchronized void method() { }" },
                                                { "name": "synchronized(obj) { }" },
                                                { "name": "Simple, re-entrant, low overhead" }
                                            ]
                                        },
                                        {
                                            "name": "2. volatile (visibility only)",
                                            "children": [
                                                { "name": "volatile int x;" },
                                                { "name": "Ensures visibility, not atomicity" },
                                                { "name": "No lock overhead" }
                                            ]
                                        },
                                        {
                                            "name": "3. Atomic classes (lock-free)",
                                            "children": [
                                                { "name": "AtomicInteger counter = new AtomicInteger(0);" },
                                                { "name": "counter.incrementAndGet(); // atomic" },
                                                { "name": "Uses CAS (Compare-And-Swap)" }
                                            ]
                                        },
                                        {
                                            "name": "4. Locks (fine-grained control)",
                                            "children": [
                                                { "name": "Lock lock = new ReentrantLock();" },
                                                { "name": "Condition condition = lock.newCondition();" },
                                                { "name": "More flexible than synchronized" }
                                            ]
                                        },
                                        {
                                            "name": "5. Higher-level utilities",
                                            "children": [
                                                { "name": "CyclicBarrier: Wait for N threads to reach point" },
                                                { "name": "CountDownLatch: Wait for countdown to zero" },
                                                { "name": "Semaphore: Control access to N resources" },
                                                { "name": "ReadWriteLock: Multiple readers, exclusive writer" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "I/O & System Calls",
                            "children": [
                                {
                                    "name": "Blocking I/O (Traditional)",
                                    "children": [
                                        { "name": "\"Thread blocks until data available\"" },
                                        { "name": "CPU can't do anything with this thread during wait" },
                                        { "name": "One thread per connection (expensive)" },
                                        {
                                            "name": "Ex:-\n\nInputStream in = socket.getInputStream();\nint data = in.read(); // BLOCKS until data available"
                                        }
                                    ]
                                },
                                {
                                    "name": "Non-blocking I/O",
                                    "children": [
                                        { "name": "\"Check if data available without blocking\"" },
                                        { "name": "Returns immediately with status (ready/not ready)" },
                                        { "name": "Single thread monitors many connections" },
                                        {
                                            "name": "Ex:-\n\nSocketChannel ch = SocketChannel.open();\nch.configureBlocking(false);\nif (ch.finishConnect()) { /* ready */ }"
                                        }
                                    ]
                                },
                                {
                                    "name": "Async I/O",
                                    "children": [
                                        { "name": "\"Submit I/O request and get notified when complete\"" },
                                        { "name": "Thread not blocked, can do other work" },
                                        { "name": "Most scalable for high concurrency" },
                                        {
                                            "name": "Ex:-\n\nCompletableFuture<String> future = readFileAsync(\"data.txt\");\nfuture.thenAccept(data -> System.out.println(data));"
                                        }
                                    ]
                                },
                                {
                                    "name": "I/O Multiplexing (System Calls)",
                                    "children": [
                                        {
                                            "name": "select()",
                                            "children": [
                                                { "name": "Check if file descriptors are ready (POSIX)" },
                                                { "name": "Limitation: 1024 max file descriptors" },
                                                { "name": "Complexity: O(n) per call" }
                                            ]
                                        },
                                        {
                                            "name": "poll()",
                                            "children": [
                                                { "name": "Like select(), but no limit on file descriptors" },
                                                { "name": "Complexity: Still O(n)" }
                                            ]
                                        },
                                        {
                                            "name": "epoll() (Linux)",
                                            "children": [
                                                { "name": "Event-driven, O(1) complexity" },
                                                { "name": "Scale to 10,000+ connections" },
                                                { "name": "Most efficient for high concurrency" }
                                            ]
                                        },
                                        {
                                            "name": "kqueue() (BSD/macOS)",
                                            "children": [
                                                { "name": "BSD/macOS equivalent of epoll()" }
                                            ]
                                        },
                                        {
                                            "name": "IOCP (Windows)",
                                            "children": [
                                                { "name": "Windows I/O Completion Ports" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Java NIO (Non-blocking I/O)",
                                    "children": [
                                        {
                                            "name": "Traditional Blocking I/O (BIO)",
                                            "children": [
                                                { "name": "One thread per connection" },
                                                { "name": "Blocks on read/write" },
                                                { "name": "Scales to ~1000 connections (high memory)" }
                                            ]
                                        },
                                        {
                                            "name": "NIO Approach",
                                            "children": [
                                                { "name": "Single thread with Selector" },
                                                { "name": "Selector monitors multiple channels" },
                                                { "name": "Callback when channel is ready" },
                                                { "name": "Scales to 10,000+ connections" },
                                                {
                                                    "name": "Ex:-\n\nServerSocketChannel ssc = ServerSocketChannel.open();\nssc.configureBlocking(false);\nSelector selector = Selector.open();\nssc.register(selector, SelectionKey.OP_ACCEPT);\n\nwhile(true) {\n  selector.select(); // blocks until ready\n  Set<SelectionKey> keys = selector.selectedKeys();\n  for (SelectionKey key : keys) {\n    if (key.isAcceptable()) { /* handle */ }\n  }\n}"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Netty (High-Level Framework)",
                                    "children": [
                                        { "name": "\"Abstraction over NIO for event-driven I/O\"" },
                                        { "name": "Boss group: Accepts connections" },
                                        { "name": "Worker group: Handles read/write" },
                                        { "name": "Handlers: Process events" },
                                        { "name": "Scales easily to 10,000+ concurrent connections" }
                                    ]
                                },
                                {
                                    "name": "Reactor Pattern",
                                    "children": [
                                        { "name": "\"Event-driven architecture\"" },
                                        { "name": "Components:" },
                                        { "name": "1. Dispatcher: Accepts connections" },
                                        { "name": "2. Selector: Monitors ready file descriptors" },
                                        { "name": "3. Handlers: Process events" },
                                        { "name": "Benefits: Handle 10,000+ connections per server" }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Context Switching",
                            "children": [
                                {
                                    "name": "What Happens During Context Switch?",
                                    "children": [
                                        { "name": "1. Save current state: CPU registers, PC, SP" },
                                        { "name": "2. Load next state: Restore registers, PC, SP" },
                                        { "name": "3. Cache flushing: TLB flush, L1/L2/L3 invalidation" },
                                        { "name": "4. Resume execution" }
                                    ]
                                },
                                {
                                    "name": "Context Switch Overhead",
                                    "children": [
                                        { "name": "Direct cost: 1-10 microseconds per switch" },
                                        { "name": "Indirect cost (cache pollution): 50-200 microseconds" },
                                        {
                                            "name": "Example:",
                                            "children": [
                                                { "name": "1000 threads, each 10ms time slice" },
                                                { "name": "Context switch: 1ms overhead per switch" },
                                                { "name": "Total overhead: 1ms / 10ms = 10% CPU wasted" }
                                            ]
                                        },
                                        { "name": "High contention: Can waste 30-50% CPU time" }
                                    ]
                                },
                                {
                                    "name": "Thread Contention",
                                    "children": [
                                        { "name": "\"Multiple threads competing for same lock\"" },
                                        {
                                            "name": "High contention scenario:"
                                        },
                                        { "name": "1. Thread tries to acquire lock" },
                                        { "name": "2. Lock held by another thread → blocks" },
                                        { "name": "3. Context switch to different thread" },
                                        { "name": "4. When lock available, switch back" },
                                        { "name": "Result: Frequent context switches, poor performance" },
                                        {
                                            "name": "Solution: Reduce lock scope or use striped locking"
                                        }
                                    ]
                                },
                                {
                                    "name": "Lock Contention",
                                    "children": [
                                        { "name": "\"Global lock prevents parallel access\"" },
                                        {
                                            "name": "Bad: All threads compete for single lock",
                                            "children": [
                                                {
                                                    "name": "Ex:-\n\nprivate final Object lock = new Object();\n\npublic synchronized void increment() { counter++; }\n// All accesses serialize"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Better: Striped locking (per-element locks)",
                                            "children": [
                                                {
                                                    "name": "Ex:-\n\nprivate Object[] locks = new Object[16];\nprivate int[] counters = new int[16];\n\npublic void increment(int index) {\n  synchronized(locks[index]) { counters[index]++; }\n}\n// Each counter has own lock"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "False Sharing",
                                    "children": [
                                        { "name": "\"Two threads modify nearby variables (same cache line)\"" },
                                        { "name": "Thread1 modifies value1 → invalidates entire cache line" },
                                        { "name": "Thread2 tries to read value2 → cache miss" },
                                        { "name": "No logical conflict, but performance degradation" },
                                        {
                                            "name": "Solution 1: Padding",
                                            "children": [
                                                {
                                                    "name": "Ex:-\n\npublic long value1 = 0;\npublic long pad1, pad2, pad3, pad4, pad5, pad6, pad7 = 0;\npublic long value2 = 0; // different cache line"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Solution 2: @Contended (Java 8+)",
                                            "children": [
                                                {
                                                    "name": "Ex:-\n\n@Contended\nclass PaddedClass { public long value1, value2; }"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Lock-Free Programming",
                            "children": [
                                {
                                    "name": "Compare-And-Swap (CAS)",
                                    "children": [
                                        { "name": "\"Atomic operation: if (value == expected) { value = new; return true; }\"" },
                                        { "name": "Hardware-level atomicity (no lock needed)" },
                                        { "name": "Used by Atomic classes" },
                                        {
                                            "name": "Ex:-\n\nAtomicInteger counter = new AtomicInteger(0);\ncounter.compareAndSet(0, 1); // CAS operation\n\n// Retry loop:\nwhile (true) {\n  int current = counter.get();\n  if (counter.compareAndSet(current, current + 1)) break;\n}"
                                        }
                                    ]
                                },
                                {
                                    "name": "Advantages",
                                    "children": [
                                        { "name": "✅ No context switching overhead" },
                                        { "name": "✅ No deadlock" },
                                        { "name": "✅ Better scalability with many threads" },
                                        { "name": "✅ Low-latency (predictable)" }
                                    ]
                                },
                                {
                                    "name": "Disadvantages",
                                    "children": [
                                        { "name": "❌ Complex to implement" },
                                        { "name": "❌ Requires careful memory ordering" },
                                        { "name": "❌ Retry loops (spinning) wastes CPU" },
                                        { "name": "❌ May perform worse than locks under high contention" }
                                    ]
                                },
                                {
                                    "name": "ABA Problem",
                                    "children": [
                                        { "name": "\"Value changes from A to B and back to A\"" },
                                        { "name": "Thread1: Read value = A" },
                                        { "name": "Thread2: Change A → B → A" },
                                        { "name": "Thread1: CAS(A, C) succeeds, but memory has changed!" },
                                        { "name": "Solution: Versioning (include version number with value)" }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Performance Optimization",
                            "children": [
                                {
                                    "name": "Reducing Context Switches",
                                    "children": [
                                        { "name": "1. Use thread pools (fixed number of threads)" },
                                        { "name": "   ExecutorService executor = Executors.newFixedThreadPool(4);" },
                                        { "name": "2. Avoid excessive synchronization (minimize lock time)" },
                                        { "name": "3. Use lock-free data structures" },
                                        { "name": "   ConcurrentHashMap, CopyOnWriteArrayList" },
                                        { "name": "4. Batch operations (reduce lock acquisitions)" }
                                    ]
                                },
                                {
                                    "name": "Reducing Cache Misses",
                                    "children": [
                                        {
                                            "name": "1. Spatial locality: Access contiguous memory",
                                            "children": [
                                                {
                                                    "name": "✅ Good: Sequential array access\n❌ Bad: Random array access"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "2. Temporal locality: Reuse data quickly",
                                            "children": [
                                                {
                                                    "name": "✅ Load data once, use multiple times"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "3. Avoid false sharing",
                                            "children": [
                                                { "name": "Use padding or @Contended" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Thread Pool Sizing",
                                    "children": [
                                        { "name": "CPU-bound: N_threads = Number of cores" },
                                        { "name": "I/O-bound: N_threads = N_cores * (1 + W/C)" },
                                        { "name": "             where W = wait time, C = compute time" },
                                        {
                                            "name": "Example:",
                                            "children": [
                                                { "name": "4 cores, W/C = 2 (mostly I/O)" },
                                                { "name": "N_threads = 4 * (1 + 2) = 12 threads" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "GC Pause Impact",
                                    "children": [
                                        { "name": "\"Garbage Collection pauses entire JVM\"" },
                                        { "name": "Impact on latency-sensitive applications: 100-500ms pause" },
                                        { "name": "Reduce GC pressure:" },
                                        { "name": "1. Object pooling" },
                                        { "name": "2. Avoid unnecessary object creation" },
                                        { "name": "3. Tune heap size" },
                                        { "name": "4. Use low-latency GC (ZGC, Shenandoah)" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Computer Networks",
                    "children": [
                        {
                            "name": "Network Identity & Routing",
                            "children": [
                                {
                                    "name": "IP Address (IPv4 / IPv6)",
                                    "children": [
                                        { "name": "Logical address used to identify device on network" },
                                        { "name": "IPv4 → 32-bit address" },
                                        { "name": "IPv6 → 128-bit address" },
                                        { "name": "Special IPs: Loopback (127.0.0.1), Private ranges (RFC 1918)" },
                                        {
                                            "name": "Ex:-\n\nIPv4 → 192.168.1.10\nIPv6 → 2001:db8::1"
                                        }
                                    ]
                                },
                                {
                                    "name": "Subnet Mask & CIDR",
                                    "children": [
                                        { "name": "Divides IP address into network portion + host portion" },
                                        { "name": "First N bits = network, remaining = host" },
                                        { "name": "Example: /24 means first 24 bits are network" },
                                        { "name": "255.255.255.0 in dotted decimal = /24 in CIDR" },
                                        { "name": "Determines: network address, broadcast address, usable IPs" },
                                        {
                                            "name": "Common Examples",
                                            "children": [
                                                { "name": "/8 (255.0.0.0) → 16.7M addresses (10.0.0.0/8)" },
                                                { "name": "/16 (255.255.0.0) → 65K addresses (172.16.0.0/16)" },
                                                { "name": "/24 (255.255.255.0) → 256 addresses (192.168.1.0/24)" },
                                                { "name": "/32 (255.255.255.255) → 1 address (single host)" }
                                            ]
                                        },
                                        {
                                            "name": "Calculation Example",
                                            "children": [
                                                { "name": "Given: 192.168.1.100/24" },
                                                { "name": "Network address: 192.168.1.0" },
                                                { "name": "Broadcast: 192.168.1.255" },
                                                { "name": "Usable IPs: 192.168.1.1 - 192.168.1.254 (254 hosts)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "MAC Address",
                                    "children": [
                                        { "name": "Physical hardware address of network device" },
                                        { "name": "Works at Data Link Layer" },
                                        { "name": "48-bit: XX:XX:XX:XX:XX:XX (first 24 = vendor OUI)" },
                                        { "name": "Local scope only (same network segment)" },
                                        {
                                            "name": "Ex:-\n\n00:1A:2B:3C:4D:5E"
                                        }
                                    ]
                                },
                                {
                                    "name": "IP vs MAC",
                                    "children": [
                                        { "name": "IP → identifies device globally/logically (routing)" },
                                        { "name": "MAC → identifies device inside local network (switching)" },
                                        { "name": "IP can change, MAC usually fixed to hardware" },
                                        { "name": "IP used for Layer 3 routing, MAC for Layer 2 switching" }
                                    ]
                                },
                                {
                                    "name": "ARP (Address Resolution Protocol)",
                                    "children": [
                                        { "name": "Converts IP address → MAC address in local network" },
                                        { "name": "Broadcast query: Who has 192.168.1.5?" },
                                        { "name": "Target replies with MAC address" },
                                        { "name": "ARP Spoofing: Attacker sends fake ARP responses (MITM)" },
                                        { "name": "Defense: DNSSEC, static ARP entries, detection systems" },
                                        {
                                            "name": "Ex:-\n\n\"Who has 192.168.1.5?\"\n→ Device replies with MAC address"
                                        }
                                    ]
                                },
                                {
                                    "name": "Gateway & Router",
                                    "children": [
                                        { "name": "Gateway → entry/exit point of local network" },
                                        { "name": "Router forwards packets between networks (Layer 3)" },
                                        { "name": "Uses routing table: IP prefix → next-hop interface" },
                                        { "name": "Longest prefix match determines best route" },
                                        { "name": "Dynamic routing protocols: OSPF, BGP" },
                                        {
                                            "name": "Ex:-\n\nHome router sends packets from local WiFi to internet"
                                        }
                                    ]
                                },
                                {
                                    "name": "Network Interface / NIC",
                                    "children": [
                                        { "name": "Hardware/software interface connecting machine to network" },
                                        { "name": "Each NIC has MAC address" },
                                        { "name": "Can have multiple NICs (multi-homed host)" },
                                        {
                                            "name": "Ex:-\n\nWiFi adapter\nEthernet card"
                                        }
                                    ]
                                },
                                {
                                    "name": "NAT (Network Address Translation)",
                                    "children": [
                                        { "name": "Allows private IPs to communicate via single public IP" },
                                        { "name": "Static NAT: One-to-one mapping (port forwarding)" },
                                        { "name": "Dynamic NAT: Pool of public IPs for private IPs" },
                                        { "name": "PAT (Port Address Translation): Many private → one public" },
                                        { "name": "Breaks P2P (can't receive unsolicited inbound connections)" },
                                        { "name": "Workarounds: UPNP, port forwarding, STUN/TURN, hole punching" },
                                        {
                                            "name": "Ex:-\n\nHome router: 192.168.1.100 → maps to ISP's 203.0.113.5:5000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Transport Layer",
                            "children": [
                                {
                                    "name": "TCP vs UDP",
                                    "children": [
                                        {
                                            "name": "TCP",
                                            "children": [
                                                { "name": "Connection-oriented protocol" },
                                                { "name": "Provides ordered and reliable data transfer" },
                                                { "name": "Uses acknowledgements, retransmissions, checksums" },
                                                { "name": "Detects packet loss and retries automatically" },
                                                { "name": "Notifies sender if connection fails" },
                                                { "name": "Window-based flow control (sliding window)" },
                                                { "name": "Congestion control (AIMD: Additive Increase, Multiplicative Decrease)" },
                                                { "name": "Slow start: exponential growth until packet loss" },
                                                { "name": "Congestion avoidance: gradual increase after loss" },
                                                {
                                                    "name": "Ex:-\n\nHTTP/HTTPS\nDatabase connections\nFile transfer\nEmail (SMTP)"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "UDP",
                                            "children": [
                                                { "name": "Connectionless protocol" },
                                                { "name": "No guarantee of order or delivery" },
                                                { "name": "Lower overhead and lower latency" },
                                                { "name": "Message boundaries preserved (datagram)" },
                                                { "name": "No flow control, no congestion control" },
                                                { "name": "Single datagram = complete message" },
                                                {
                                                    "name": "Ex:-\n\nGaming\nVideo streaming\nDNS queries\nVoIP"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "TCP Three-Way Handshake",
                                    "children": [
                                        {
                                            "name": "Purpose",
                                            "children": [
                                                { "name": "Establish reliable TCP connection" },
                                                { "name": "Synchronize sequence numbers between client and server" },
                                                { "name": "Ensure both sides can send and receive data" }
                                            ]
                                        },
                                        {
                                            "name": "Why Sequence Numbers?",
                                            "children": [
                                                { "name": "TCP tracks bytes using sequence numbers" },
                                                { "name": "Helps detect lost, duplicate, or out-of-order packets" },
                                                { "name": "Both sides choose random initial sequence numbers (ISN)" },
                                                { "name": "Prevents spoofing attacks (attacker must guess sequence)" }
                                            ]
                                        },
                                        {
                                            "name": "Step 1 — SYN",
                                            "children": [
                                                { "name": "Client requests connection" },
                                                { "name": "SYN = Synchronize" },
                                                { "name": "Client sends its initial sequence number" },
                                                {
                                                    "name": "Ex:-\n\nClient → Server\nSYN\nSeq = 1000"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Step 2 — SYN-ACK",
                                            "children": [
                                                { "name": "Server acknowledges client's sequence number" },
                                                { "name": "Server also sends its own sequence number" },
                                                {
                                                    "name": "Ex:-\n\nServer → Client\nSYN + ACK\nSeq = 5000\nAck = 1001"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Step 3 — ACK",
                                            "children": [
                                                { "name": "Client acknowledges server's sequence number" },
                                                { "name": "Connection becomes ESTABLISHED" },
                                                {
                                                    "name": "Ex:-\n\nClient → Server\nACK\nSeq = 1001\nAck = 5001"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Why 3-Way and NOT 2-Way?",
                                            "children": [
                                                { "name": "Both sides must confirm send + receive capability" },
                                                { "name": "2-way handshake may create half-open connections" },
                                                { "name": "Third ACK confirms client received server response" }
                                            ]
                                        },
                                        {
                                            "name": "TCP Connection Termination (4-Way Handshake)",
                                            "children": [
                                                { "name": "FIN: Side A initiates close" },
                                                { "name": "ACK: Side B acknowledges" },
                                                { "name": "FIN: Side B sends its own FIN" },
                                                { "name": "ACK: Side A acknowledges" },
                                                { "name": "TIME_WAIT: Side A waits 2×MSL (60 seconds) to catch delayed packets" },
                                                { "name": "Prevents confusion if port reused immediately" }
                                            ]
                                        },
                                        {
                                            "name": "Real Understanding",
                                            "children": [
                                                { "name": "Handshake synchronizes communication state" },
                                                { "name": "No actual application data transferred yet" },
                                                { "name": "Actual HTTP/data transfer starts AFTER handshake" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "TCP Retransmission & Timeout",
                                    "children": [
                                        { "name": "Based on RTT (Round-Trip Time) estimate, not fixed timeout" },
                                        { "name": "RTO = RTT × 2 (adaptive timeout)" },
                                        { "name": "Exponential backoff on repeated loss" },
                                        { "name": "Sender never knows if UDP packet arrived (fire-and-forget)" }
                                    ]
                                },
                                {
                                    "name": "Ports & Sockets",
                                    "children": [
                                        { "name": "Port → identifies specific service/process on host" },
                                        { "name": "Socket → (IP, Port, Protocol) tuple = unique connection endpoint" },
                                        { "name": "Well-known ports: 0-1023 (HTTP 80, HTTPS 443, SSH 22)" },
                                        { "name": "Registered ports: 1024-49151" },
                                        { "name": "Dynamic/private ports: 49152-65535" },
                                        { "name": "Socket states: LISTEN, ESTABLISHED, TIME_WAIT, CLOSE_WAIT, FIN_WAIT" },
                                        {
                                            "name": "Common Ports",
                                            "children": [
                                                { "name": "80 → HTTP" },
                                                { "name": "443 → HTTPS" },
                                                { "name": "3306 → MySQL" },
                                                { "name": "5432 → PostgreSQL" },
                                                { "name": "6379 → Redis" },
                                                { "name": "22 → SSH" },
                                                { "name": "25 → SMTP" },
                                                { "name": "53 → DNS" }
                                            ]
                                        },
                                        {
                                            "name": "Ex:-\n\nBrowser connects to:\n142.250.x.x:443\n(IP + Port = Socket)"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Web Communication",
                            "children": [
                                {
                                    "name": "HTTP / HTTPS",
                                    "children": [
                                        { "name": "HTTP → Application layer communication protocol" },
                                        { "name": "HTTPS → HTTP + SSL/TLS encryption + authentication" },
                                        { "name": "Stateless protocol (no server-side state per request)" },
                                        {
                                            "name": "HTTP Methods",
                                            "children": [
                                                { "name": "GET → fetch data (idempotent, safe, no body)" },
                                                { "name": "POST → create data (not idempotent, has body)" },
                                                { "name": "PUT → replace entire resource (idempotent)" },
                                                { "name": "PATCH → partial update (not always idempotent)" },
                                                { "name": "DELETE → remove resource (idempotent)" },
                                                { "name": "HEAD → like GET but no response body (cache validation)" },
                                                { "name": "OPTIONS → describe communication options (CORS preflight)" }
                                            ]
                                        },
                                        {
                                            "name": "Status Codes (Critical)",
                                            "children": [
                                                {
                                                    "name": "1xx Informational",
                                                    "children": [
                                                        { "name": "100 Continue: Client can send body" },
                                                        { "name": "101 Switching Protocols: WebSocket upgrade" }
                                                    ]
                                                },
                                                {
                                                    "name": "2xx Success",
                                                    "children": [
                                                        { "name": "200 OK: Request succeeded" },
                                                        { "name": "201 Created: Resource created (POST/PUT)" },
                                                        { "name": "204 No Content: Success, no body to return" }
                                                    ]
                                                },
                                                {
                                                    "name": "3xx Redirection",
                                                    "children": [
                                                        { "name": "301 Moved Permanently: Redirect + cache (old URL gone)" },
                                                        { "name": "302 Found: Temporary redirect (may resend POST as GET)" },
                                                        { "name": "304 Not Modified: Client cache valid (If-Modified-Since)" },
                                                        { "name": "307 Temporary Redirect: Preserve HTTP method" },
                                                        { "name": "308 Permanent Redirect: Preserve method + cache" }
                                                    ]
                                                },
                                                {
                                                    "name": "4xx Client Error",
                                                    "children": [
                                                        { "name": "400 Bad Request: Malformed syntax" },
                                                        { "name": "401 Unauthorized: Missing authentication" },
                                                        { "name": "403 Forbidden: Authenticated but no permission" },
                                                        { "name": "404 Not Found: Resource doesn't exist" },
                                                        { "name": "409 Conflict: Request conflicts with state (e.g., duplicate)" },
                                                        { "name": "429 Too Many Requests: Rate limited" }
                                                    ]
                                                },
                                                {
                                                    "name": "5xx Server Error",
                                                    "children": [
                                                        { "name": "500 Internal Server Error: Server bug" },
                                                        { "name": "502 Bad Gateway: Upstream unreachable" },
                                                        { "name": "503 Service Unavailable: Temporarily down" },
                                                        { "name": "504 Gateway Timeout: Upstream no response" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Cookies & Sessions",
                                            "children": [
                                                {
                                                    "name": "What are Cookies?",
                                                    "children": [
                                                        { "name": "\"Small pieces of data stored by browser and sent with each request\"" },
                                                        { "name": "Purpose: Maintain state across HTTP requests (stateless protocol)" },
                                                        { "name": "Created by: Server via Set-Cookie header" },
                                                        { "name": "Sent by: Browser via Cookie header automatically" },
                                                        { "name": "Size limit: ~4KB per cookie" },
                                                        { "name": "Maximum: ~20 cookies per domain (browser dependent)" }
                                                    ]
                                                },
                                                {
                                                    "name": "Cookie Attributes",
                                                    "children": [
                                                        {
                                                            "name": "Secure",
                                                            "children": [
                                                                { "name": "Only sent over HTTPS (not HTTP)" },
                                                                { "name": "Prevents MITM attacks" },
                                                                { "name": "Ex: Set-Cookie: sessionId=abc123; Secure" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "HttpOnly",
                                                            "children": [
                                                                { "name": "Cannot be accessed by JavaScript (document.cookie)" },
                                                                { "name": "Prevents XSS attacks from stealing cookies" },
                                                                { "name": "Ex: Set-Cookie: sessionId=abc123; HttpOnly" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "SameSite",
                                                            "children": [
                                                                { "name": "Strict: Only sent for same-site requests (best CSRF protection)" },
                                                                { "name": "Lax: Sent for same-site + top-level navigation (e.g., link clicks)" },
                                                                { "name": "None: Sent for all requests (requires Secure flag)" },
                                                                { "name": "Ex: Set-Cookie: sessionId=abc123; SameSite=Strict" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Expires / Max-Age",
                                                            "children": [
                                                                { "name": "Expires: Sets expiration date (absolute)" },
                                                                { "name": "Max-Age: Sets lifetime in seconds (relative)" },
                                                                { "name": "Session Cookie: No expiry → deleted when browser closes" },
                                                                { "name": "Ex: Set-Cookie: sessionId=abc123; Max-Age=3600" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Domain & Path",
                                                            "children": [
                                                                { "name": "Domain: Which domain receives the cookie" },
                                                                { "name": "Path: Which URL path receives the cookie" },
                                                                { "name": "Ex: Set-Cookie: sessionId=abc123; Domain=.example.com; Path=/api" }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Session-based Authentication",
                                                    "children": [
                                                        {
                                                            "name": "How Session Auth Works",
                                                            "children": [
                                                                { "name": "Step 1: User submits credentials (username/password)" },
                                                                { "name": "Step 2: Server validates credentials" },
                                                                { "name": "Step 3: Server creates session in memory/database (sessionId → user data)" },
                                                                { "name": "Step 4: Server sends sessionId in Set-Cookie header" },
                                                                { "name": "Step 5: Browser stores cookie (sessionId)" },
                                                                { "name": "Step 6: Browser sends cookie automatically with every request" },
                                                                { "name": "Step 7: Server validates sessionId, retrieves user data from session store" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Session Storage Options",
                                                            "children": [
                                                                { "name": "In-Memory (HashMap) → Simple, NOT scalable" },
                                                                { "name": "Database (PostgreSQL) → Persistent, slower" },
                                                                { "name": "Redis/Memcached → Fast, scalable, recommended" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Session Lifecycle",
                                                            "children": [
                                                                { "name": "Create: On successful login" },
                                                                { "name": "Destroy: On logout or session expiration" },
                                                                { "name": "Expiry: After inactivity timeout (e.g., 30 minutes)" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Session vs JWT Comparison",
                                                            "children": [
                                                                {
                                                                    "name": "Session (Stateful)",
                                                                    "children": [
                                                                        { "name": "✅ Server can revoke instantly (delete session)" },
                                                                        { "name": "✅ Simple to implement (browser handles cookies)" },
                                                                        { "name": "✅ No token parsing overhead" },
                                                                        { "name": "❌ Requires server-side storage (memory/database)" },
                                                                        { "name": "❌ Harder to scale (need shared session store)" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "JWT (Stateless)",
                                                                    "children": [
                                                                        { "name": "✅ No server-side storage needed" },
                                                                        { "name": "✅ Horizontal scaling (no session sync needed)" },
                                                                        { "name": "✅ Works across domains (CORS)" },
                                                                        { "name": "❌ Cannot revoke easily (until expiry)" },
                                                                        { "name": "❌ Larger payload (token overhead)" }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Session Security",
                                                            "children": [
                                                                { "name": "Use HttpOnly cookie (prevent XSS)" },
                                                                { "name": "Use Secure flag (HTTPS only)" },
                                                                { "name": "Use SameSite=Strict/Lax (prevent CSRF)" },
                                                                { "name": "Set short expiration time" },
                                                                { "name": "Regenerate sessionId on login (prevent session fixation)" },
                                                                { "name": "Implement logout (clear session server-side + cookie)" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Session Fixation Attack",
                                                            "children": [
                                                                { "name": "Attack: Attacker sets sessionId in victim's browser" },
                                                                { "name": "Then: Attacker uses same sessionId to access victim's account after login" },
                                                                { "name": "Mitigation: Regenerate sessionId on login" }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "JWT (JSON Web Tokens) - Complete Guide",
                                                    "children": [
                                                        {
                                                            "name": "What is JWT?",
                                                            "children": [
                                                                { "name": "\"Compact, URL-safe token format for secure information exchange\"" },
                                                                { "name": "Self-contained → carries all necessary information" },
                                                                { "name": "Stateless authentication → no server-side session storage" },
                                                                { "name": "Can be signed (integrity) or encrypted (confidentiality)" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "JWT Structure (xxxxx.yyyyy.zzzzz)",
                                                            "children": [
                                                                {
                                                                    "name": "Header (xxxxx)",
                                                                    "children": [
                                                                        { "name": "Contains metadata about the token" },
                                                                        { "name": "Typical fields: alg (algorithm), typ (JWT)" },
                                                                        { "name": "Example: {\"alg\":\"HS256\",\"typ\":\"JWT\"}" },
                                                                        { "name": "Base64Url: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Payload (yyyyy)",
                                                                    "children": [
                                                                        { "name": "Contains the claims (data/statements about the user)" },
                                                                        {
                                                                            "name": "Registered Claims",
                                                                            "children": [
                                                                                { "name": "iss (Issuer) → who issued the token" },
                                                                                { "name": "sub (Subject) → user identifier" },
                                                                                { "name": "aud (Audience) → intended recipient" },
                                                                                { "name": "exp (Expiration) → Unix timestamp (REQUIRED)" },
                                                                                { "name": "iat (Issued At) → when token was created" },
                                                                                { "name": "nbf (Not Before) → token valid from this time" },
                                                                                { "name": "jti (JWT ID) → unique identifier" }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "name": "Custom Claims",
                                                                            "children": [
                                                                                { "name": "Application-specific data" },
                                                                                { "name": "Example: { \"userId\": 123, \"role\": \"admin\" }" }
                                                                            ]
                                                                        },
                                                                        { "name": "Example: {\"userId\":\"123\",\"role\":\"admin\",\"exp\":1640995200}" },
                                                                        { "name": "Base64Url: eyJ1c2VySWQiOiIxMjMiLCJyb2xlIjoiYWRtaW4DB9" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Signature (zzzzz)",
                                                                    "children": [
                                                                        { "name": "Verifies the token hasn't been tampered with" },
                                                                        { "name": "Created by hashing: header + payload + secret" },
                                                                        { "name": "HMAC-SHA256( base64UrlEncode(header) + '.' + base64UrlEncode(payload), secret)" },
                                                                        { "name": "Example: randomHashValueHere" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Complete Example",
                                                                    "children": [
                                                                        { "name": "eyJhbGciOiIs---9.eyJ1c2VySWQi---k.signature" }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "JWT Authentication Flow",
                                                            "children": [
                                                                { "name": "Step 1: User submits credentials" },
                                                                { "name": "Step 2: Server validates credentials" },
                                                                { "name": "Step 3: Server creates JWT with user data + expiry" },
                                                                { "name": "Step 4: Server returns JWT to client (response body or cookie)" },
                                                                { "name": "Step 5: Client stores JWT (localStorage, sessionStorage, httpOnly cookie)" },
                                                                { "name": "Step 6: Client sends JWT in Authorization: Bearer <token> header" },
                                                                { "name": "Step 7: Server validates JWT (signature, expiry, claims)" },
                                                                { "name": "Step 8: Server extracts user data from JWT (no DB lookup needed)" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Signing Algorithms",
                                                            "children": [
                                                                {
                                                                    "name": "HS256 (HMAC with SHA-256)",
                                                                    "children": [
                                                                        { "name": "Symmetric (shared secret key)" },
                                                                        { "name": "Faster than asymmetric" },
                                                                        { "name": "Use: Single service, internal APIs" },
                                                                        { "name": "🔴 Risk: Secret must be kept secure" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "RS256 (RSA with SHA-256)",
                                                                    "children": [
                                                                        { "name": "Asymmetric (private + public key)" },
                                                                        { "name": "Sign with private, verify with public" },
                                                                        { "name": "Use: Microservices, 3rd party auth" },
                                                                        { "name": "✅ Secure: Private key only on signing server" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "ES256 (ECDSA with SHA-256)",
                                                                    "children": [
                                                                        { "name": "Asymmetric using Elliptic Curve" },
                                                                        { "name": "More efficient than RSA" },
                                                                        { "name": "Use: Modern systems, IoT, mobile" }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "JWT Storage Options",
                                                            "children": [
                                                                {
                                                                    "name": "localStorage / sessionStorage",
                                                                    "children": [
                                                                        { "name": "Vulnerable to XSS (JavaScript can access)" },
                                                                        { "name": "Persists across page reloads" },
                                                                        { "name": "❌ Not recommended for sensitive data" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "httpOnly Cookie",
                                                                    "children": [
                                                                        { "name": "Cannot be accessed by JavaScript (XSS protection)" },
                                                                        { "name": "Automatically sent with requests" },
                                                                        { "name": "Vulnerable to CSRF (use SameSite)" },
                                                                        { "name": "✅ Recommended for production" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Bearer Token",
                                                                    "children": [
                                                                        { "name": "Sent in Authorization: Bearer <token> header" },
                                                                        { "name": "Vulnerable to XSS if stored in localStorage" },
                                                                        { "name": "Works well with mobile apps" }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "JWT Security Best Practices",
                                                            "children": [
                                                                { "name": "1. Use short expiration times (15-60 mins)" },
                                                                { "name": "2. Implement refresh tokens for longer sessions" },
                                                                { "name": "3. Use HTTPS always (prevent MITM attacks)" },
                                                                { "name": "4. Validate 'iss', 'aud', 'exp' claims" },
                                                                { "name": "5. Store secrets securely (environment variables, vault)" },
                                                                { "name": "6. Use strong algorithms (RS256/ES256 over HS256)" },
                                                                { "name": "7. Never log tokens in debug outputs" },
                                                                { "name": "8. Implement token blacklist/revocation for sensitive ops" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "JWT Advanced Topics",
                                                            "children": [
                                                                {
                                                                    "name": "Refresh Tokens",
                                                                    "children": [
                                                                        { "name": "Long-lived token to get new access tokens" },
                                                                        { "name": "Stored securely (httpOnly cookie or DB)" },
                                                                        { "name": "Access Token: 15 min expiry" },
                                                                        { "name": "Refresh Token: 7 days expiry" },
                                                                        { "name": "Flow: Access expired → use refresh → get new access token" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "JWT Revocation Strategies",
                                                                    "children": [
                                                                        { "name": "1. Short expiry + refresh token rotation" },
                                                                        { "name": "2. Blacklist (store invalid tokens in Redis)" },
                                                                        { "name": "3. Version-based: increment user version on logout" },
                                                                        { "name": "4. Database check: validate against user status" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "JWT Attacks & Mitigations",
                                                                    "children": [
                                                                        {
                                                                            "name": "Token Theft",
                                                                            "children": [
                                                                                { "name": "Attack: Steal token via XSS or MITM" },
                                                                                { "name": "Mitigation: httpOnly cookie, short expiry, HTTPS" }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "name": "Algorithm Confusion",
                                                                            "children": [
                                                                                { "name": "Attack: Change alg from RS256 to HS256" },
                                                                                { "name": "Mitigation: Explicitly validate algorithm, reject 'none'" }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "name": "Replay Attacks",
                                                                            "children": [
                                                                                { "name": "Attack: Intercept and reuse token" },
                                                                                { "name": "Mitigation: Short expiry, use jti, track used tokens" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "JWT vs Session: Which to Choose?",
                                                            "children": [
                                                                {
                                                                    "name": "Use Session When:",
                                                                    "children": [
                                                                        { "name": "✅ Need instant revocation (logout, admin blocks)" },
                                                                        { "name": "✅ Single application (no microservices)" },
                                                                        { "name": "✅ Simple implementation" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Use JWT When:",
                                                                    "children": [
                                                                        { "name": "✅ Need stateless authentication (scalability)" },
                                                                        { "name": "✅ Microservices architecture" },
                                                                        { "name": "✅ Cross-domain/CORS requirements" },
                                                                        { "name": "✅ Mobile apps (no cookie handling)" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "State Management Comparison",
                                                    "children": [
                                                        {
                                                            "name": "Cookies",
                                                            "children": [
                                                                { "name": "Client-side storage mechanism" },
                                                                { "name": "Can store session ID, JWT, user preferences" },
                                                                { "name": "Automatically sent with requests" },
                                                                { "name": "Size limit: 4KB" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Session ID (Cookie-based)",
                                                            "children": [
                                                                { "name": "Stores reference to server-side session" },
                                                                { "name": "Server stores actual user data" },
                                                                { "name": "Stateful authentication" },
                                                                { "name": "Scalable with shared session store (Redis)" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "JWT Token",
                                                            "children": [
                                                                { "name": "Self-contained token with user data" },
                                                                { "name": "Stateless authentication" },
                                                                { "name": "No server-side storage needed" },
                                                                { "name": "Horizontally scalable by design" }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Statelessness & Sessions (Overview)",
                                            "children": [
                                                { "name": "HTTP stateless: Server doesn't maintain request history" },
                                                { "name": "Session ID: Maps request to server-side session data" },
                                                { "name": "JWT: Stateless, self-contained token (no server session needed)" },
                                                { "name": "Cookies: Server sends Set-Cookie, client includes Cookie header" },
                                                { "name": "Cookie attributes: Secure (HTTPS only), HttpOnly (no JS), SameSite (CSRF)" },
                                                { "name": "JWT advantage: Scalable (no server cache)" },
                                                { "name": "JWT risk: Can't revoke instantly (use short expiry or blacklist)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "HTTPS & TLS Handshake",
                                    "children": [
                                        { "name": "TLS provides encryption, authentication, integrity" },
                                        {
                                            "name": "TLS 1.2/1.3 Handshake",
                                            "children": [
                                                { "name": "ClientHello: Supported cipher suites, TLS version" },
                                                { "name": "ServerHello: Chosen cipher, certificate" },
                                                { "name": "Certificate validation: Chain of trust, expiry, domain match" },
                                                { "name": "Key exchange: RSA (old) or ECDHE (perfect forward secrecy)" },
                                                { "name": "ECDHE key exchange: Both sides generate ephemeral key pairs, exchange public halves only" },
                                                { "name": "Shared secret: Each side combines own private key with other's public key to compute identical secret" },
                                                { "name": "Private keys never leave the device during ECDHE exchange" },
                                                { "name": "Finished messages: MAC verify handshake integrity" }
                                            ]
                                        },
                                        { "name": "Encryption: AES-256-GCM common" },
                                        { "name": "Perfect Forward Secrecy (PFS): ECDHE ensures old keys can't decrypt future sessions" },
                                        { "name": "Certificate proves server identity (not client by default)" },
                                        { "name": "Client certificate: Only sent if server explicitly requests it (mutual TLS)" },
                                        { "name": "Can't impersonate with copied certificate: Needs matching private key to sign handshake data" },
                                        { "name": "Mutual TLS: Both parties present certificates (rare, mTLS)" }
                                    ]
                                },
                                {
                                    "name": "HTTP/1.1 vs HTTP/2 vs HTTP/3",
                                    "children": [
                                        {
                                            "name": "HTTP/1.1",
                                            "children": [
                                                { "name": "One request per connection (mostly sequential)" },
                                                { "name": "Head-of-line blocking: Slow request blocks faster ones" },
                                                { "name": "Persistent connections (Connection: keep-alive)" },
                                                { "name": "Reduces handshake overhead" }
                                            ]
                                        },
                                        {
                                            "name": "HTTP/2",
                                            "children": [
                                                { "name": "Multiplexing: Multiple requests on same connection" },
                                                { "name": "No head-of-line blocking" },
                                                { "name": "Header compression (HPACK)" },
                                                { "name": "Binary protocol: Faster parsing" },
                                                { "name": "Server push: Send assets proactively" },
                                                { "name": "Still uses TCP (latency limited by TCP window)" }
                                            ]
                                        },
                                        {
                                            "name": "HTTP/3 (QUIC)",
                                            "children": [
                                                { "name": "UDP-based (not TCP)" },
                                                { "name": "0-RTT resumption (faster reconnect)" },
                                                { "name": "Better for mobile (connection migration)" },
                                                { "name": "TLS 1.3 built-in" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "DNS & Domain Resolution",
                            "children": [
                                {
                                    "name": "DNS (Domain Name System)",
                                    "children": [
                                        { "name": "Hierarchical, distributed database" },
                                        { "name": "Converts domain name → IP address (phonebook of internet)" },
                                        {
                                            "name": "Hierarchy",
                                            "children": [
                                                { "name": "Root nameserver (.): Directs to TLD servers" },
                                                { "name": "TLD nameserver (.com, .org, .dev): Directs to authoritative" },
                                                { "name": "Authoritative nameserver: Returns actual IP" }
                                            ]
                                        },
                                        {
                                            "name": "Query Process (Recursive)",
                                            "children": [
                                                { "name": "Client queries recursive resolver (ISP or 8.8.8.8)" },
                                                { "name": "Resolver queries root → TLD → authoritative" },
                                                { "name": "Response cached at resolver and client (TTL)" },
                                                { "name": "Future queries bypass resolver (cache hit)" }
                                            ]
                                        },
                                        {
                                            "name": "Record Types",
                                            "children": [
                                                { "name": "A: IPv4 address" },
                                                { "name": "AAAA: IPv6 address" },
                                                { "name": "CNAME: Alias (www → example.com)" },
                                                { "name": "MX: Mail server (priority)" },
                                                { "name": "NS: Nameserver delegation" },
                                                { "name": "TXT: Text records (SPF, DKIM for email security)" },
                                                { "name": "SOA: Zone authority info (serial, refresh, retry)" }
                                            ]
                                        },
                                        {
                                            "name": "Ex:-\n\ngoogle.com → 142.250.x.x\nwww.example.com CNAME example.com"
                                        }
                                    ]
                                },
                                {
                                    "name": "DNS Security & Attacks",
                                    "children": [
                                        {
                                            "name": "DNS Spoofing",
                                            "children": [
                                                { "name": "Attacker spoofs DNS response (hijack domain)" },
                                                { "name": "Resolver doesn't validate response source" },
                                                { "name": "Mitigation: DNSSEC (cryptographic signatures)" }
                                            ]
                                        },
                                        {
                                            "name": "DNS Amplification DDoS",
                                            "children": [
                                                { "name": "Attacker spoofs victim's IP, queries open resolvers" },
                                                { "name": "Resolver sends large response to victim (amplification)" },
                                                { "name": "Mitigation: Disable recursive resolution on public resolvers" }
                                            ]
                                        },
                                        {
                                            "name": "DNSSEC",
                                            "children": [
                                                { "name": "Cryptographic signatures on DNS records" },
                                                { "name": "Resolver validates signature chain from root" },
                                                { "name": "Prevents spoofing" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Cryptography & Encryption",
                            "children": [
                                {
                                    "name": "Symmetric Encryption (Secret Key)",
                                    "children": [
                                        { "name": "Same key for encryption and decryption" },
                                        { "name": "Fast, efficient for bulk data" },
                                        { "name": "Key distribution problem: How to securely share key with recipient?" },
                                        {
                                            "name": "Algorithms",
                                            "children": [
                                                { "name": "AES (Advanced Encryption Standard): 128, 192, 256-bit keys (most common)" },
                                                { "name": "DES (Data Encryption Standard): 56-bit (obsolete, broken)" },
                                                { "name": "3DES: Triple DES, improved DES (slow, phase-out)" },
                                                { "name": "ChaCha20: Modern, competitive with AES" }
                                            ]
                                        },
                                        {
                                            "name": "Modes of Operation",
                                            "children": [
                                                { "name": "ECB (Electronic Codebook): Deterministic (bad, reveals patterns)" },
                                                { "name": "CBC (Cipher Block Chaining): Uses IV, deterministic with IV" },
                                                { "name": "CTR (Counter): Stream cipher mode, parallelizable" },
                                                { "name": "GCM (Galois/Counter Mode): Authenticated encryption (AES-256-GCM)" }
                                            ]
                                        },
                                        {
                                            "name": "Ex:-\n\nAES-256-GCM encrypts HTTPS traffic\nKey: 256 random bits\nPlaintext: HTTP message\nCiphertext: Encrypted message"
                                        }
                                    ]
                                },
                                {
                                    "name": "Asymmetric Encryption (Public Key)",
                                    "children": [
                                        { "name": "Two keys: Public (encrypt) and Private (decrypt)" },
                                        { "name": "Solves key distribution: Share public key openly, keep private secret" },
                                        { "name": "Slow, impractical for bulk data (used for key exchange, not content)" },
                                        { "name": "One-way function: Easy to encrypt, hard to decrypt without private key" },
                                        {
                                            "name": "Algorithms",
                                            "children": [
                                                { "name": "RSA: Based on integer factorization (2048+ bits)" },
                                                { "name": "ECDSA (Elliptic Curve DSA): Shorter keys, same security as RSA" },
                                                { "name": "ECDH (Elliptic Curve Diffie-Hellman): Key exchange" }
                                            ]
                                        },
                                        {
                                            "name": "How It Works (RSA Example)",
                                            "children": [
                                                { "name": "Alice generates RSA keypair: (public_key, private_key)" },
                                                { "name": "Alice publishes public_key (anyone can encrypt with it)" },
                                                { "name": "Bob encrypts message: ciphertext = encrypt(message, public_key)" },
                                                { "name": "Bob sends ciphertext to Alice (insecure channel OK)" },
                                                { "name": "Alice decrypts: message = decrypt(ciphertext, private_key)" },
                                                { "name": "Only Alice can decrypt (only she has private_key)" }
                                            ]
                                        },
                                        {
                                            "name": "Ex:-\n\nHTTPS certificate contains server's public key\nClient encrypts session key with public key\nServer decrypts with private key\nBoth then use session key for fast AES encryption"
                                        }
                                    ]
                                },
                                {
                                    "name": "Hash Functions & Integrity",
                                    "children": [
                                        { "name": "One-way function: Hash(data) → fixed-size output, can't reverse" },
                                        { "name": "Deterministic: Same input always gives same hash" },
                                        { "name": "Avalanche effect: Tiny change → completely different hash" },
                                        { "name": "Used to verify data integrity (detect tampering)" },
                                        {
                                            "name": "Algorithms",
                                            "children": [
                                                { "name": "MD5: 128-bit (broken, collisions found)" },
                                                { "name": "SHA-1: 160-bit (broken, phase-out)" },
                                                { "name": "SHA-256: 256-bit (secure, common)" },
                                                { "name": "SHA-3: Latest standard (secure)" }
                                            ]
                                        },
                                        {
                                            "name": "Use Cases",
                                            "children": [
                                                { "name": "File integrity: Hash file, send hash separately" },
                                                { "name": "Password storage: Hash password (not reversible), compare hashes on login" },
                                                { "name": "Digital signatures: Sign hash of message (faster than signing entire message)" },
                                                { "name": "Blockchain: Hash previous block to ensure chain integrity" }
                                            ]
                                        },
                                        {
                                            "name": "Ex:-\n\nPassword = 'mypassword'\nHash = SHA-256(password) = 'a1b2c3...'\nServer stores hash, not password\nLogin: User enters password → SHA-256 → compare with stored hash"
                                        }
                                    ]
                                },
                                {
                                    "name": "Message Authentication Code (MAC)",
                                    "children": [
                                        { "name": "Proves message hasn't been tampered + comes from known sender" },
                                        { "name": "Uses shared secret key + hash algorithm" },
                                        { "name": "Sender: MAC = HMAC(key, message)" },
                                        { "name": "Receiver: Verify MAC = HMAC(key, message)" },
                                        { "name": "Only sender & receiver know key (proves authenticity)" },
                                        {
                                            "name": "HMAC (Hash-based MAC)",
                                            "children": [
                                                { "name": "Combines secret key with hash function" },
                                                { "name": "Resistant to length extension attacks" },
                                                { "name": "Standard in HTTPS (TLS record MAC)" }
                                            ]
                                        },
                                        {
                                            "name": "Difference: Hash vs MAC vs Digital Signature",
                                            "children": [
                                                { "name": "Hash: Integrity only (no key)" },
                                                { "name": "MAC: Integrity + authenticity (shared secret key)" },
                                                { "name": "Digital Signature: Integrity + authenticity + non-repudiation (asymmetric key)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Digital Signatures",
                                    "children": [
                                        { "name": "Proves authenticity + integrity + non-repudiation" },
                                        { "name": "Only private key holder can sign, anyone with public key can verify" },
                                        {
                                            "name": "How It Works",
                                            "children": [
                                                { "name": "Alice hashes message: hash = SHA-256(message)" },
                                                { "name": "Alice signs hash with private key: signature = sign(hash, private_key)" },
                                                { "name": "Alice sends (message, signature) to Bob" },
                                                { "name": "Bob verifies: verify(signature, public_key) == hash" },
                                                { "name": "If match → message is authentic (came from Alice) + unmodified" },
                                                { "name": "Alice can't deny sending it (only she has private key)" }
                                            ]
                                        },
                                        {
                                            "name": "Use Cases",
                                            "children": [
                                                { "name": "HTTPS certificates: CA signs server certificate (proves server owns domain)" },
                                                { "name": "Code signing: Developer signs code (users trust it's unmodified)" },
                                                { "name": "Git commits: Developer signs commits (verifiable history)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Key Exchange Protocols",
                                    "children": [
                                        {
                                            "name": "Diffie-Hellman (DH)",
                                            "children": [
                                                { "name": "Allows two parties to derive shared secret over insecure channel" },
                                                { "name": "Alice picks random a, sends g^a mod p" },
                                                { "name": "Bob picks random b, sends g^b mod p" },
                                                { "name": "Both compute shared_secret = g^(ab) mod p" },
                                                { "name": "Eavesdropper can't derive shared_secret (discrete log problem)" }
                                            ]
                                        },
                                        {
                                            "name": "ECDH (Elliptic Curve DH)",
                                            "children": [
                                                { "name": "Modern variant, same security with shorter keys" },
                                                { "name": "Used in TLS 1.3 for perfect forward secrecy" },
                                                { "name": "Ephemeral ECDH (ECDHE): New keypair per connection" }
                                            ]
                                        },
                                        {
                                            "name": "Perfect Forward Secrecy (PFS)",
                                            "children": [
                                                { "name": "Session key independent from server's long-term private key" },
                                                { "name": "Uses ephemeral key exchange (ECDHE)" },
                                                { "name": "If server private key leaked, past sessions still secure" },
                                                { "name": "Standard in TLS 1.3" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Certificate Authority & PKI",
                                    "children": [
                                        { "name": "Problem: How to verify public key belongs to claimed owner?" },
                                        { "name": "Solution: Certificate Authority (CA) signs certificate" },
                                        {
                                            "name": "Certificate Contents",
                                            "children": [
                                                { "name": "Subject: Domain name (www.example.com)" },
                                                { "name": "Public key: Server's public key" },
                                                { "name": "Issuer: CA that signed (DigiCert, Let's Encrypt)" },
                                                { "name": "Expiry: Valid until date" },
                                                { "name": "Serial number: Unique ID" },
                                                { "name": "CA's signature: Proves CA verified ownership" }
                                            ]
                                        },
                                        {
                                            "name": "Chain of Trust",
                                            "children": [
                                                { "name": "Root CA: Self-signed, trusted by OS/browser" },
                                                { "name": "Intermediate CA: Signed by root CA" },
                                                { "name": "Server certificate: Signed by intermediate or root" },
                                                { "name": "Browser verifies chain: Server → Intermediate → Root" }
                                            ]
                                        },
                                        {
                                            "name": "HTTPS Handshake (Simplified)",
                                            "children": [
                                                { "name": "Server sends certificate (includes public key + CA signature)" },
                                                { "name": "Browser verifies CA signature (proves ownership)" },
                                                { "name": "Browser verifies domain matches certificate" },
                                                { "name": "Browser verifies expiry date" },
                                                { "name": "Browser verifies certificate chain to root CA" },
                                                { "name": "If all valid, browser trusts server" }
                                            ]
                                        },
                                        {
                                            "name": "Self-Signed Certificates",
                                            "children": [
                                                { "name": "Signed by owner, not CA" },
                                                { "name": "Browser warns: 'Certificate not trusted'" },
                                                { "name": "OK for development, not production" },
                                                { "name": "Can be used for internal/private networks" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Common Cryptographic Attacks",
                                    "children": [
                                        {
                                            "name": "Brute Force",
                                            "children": [
                                                { "name": "Try all possible keys until decryption succeeds" },
                                                { "name": "Key length is primary defense (AES-256 has 2^256 possibilities)" },
                                                { "name": "Modern hardware can't brute force 256-bit keys" }
                                            ]
                                        },
                                        {
                                            "name": "Man-in-the-Middle (MITM) on Key Exchange",
                                            "children": [
                                                { "name": "Attacker intercepts public keys, substitutes own" },
                                                { "name": "Attacker decrypts with own private key, re-encrypts with recipient's" },
                                                { "name": "Defense: Digital signatures (verify public key authenticity)" }
                                            ]
                                        },
                                        {
                                            "name": "Replay Attack",
                                            "children": [
                                                { "name": "Attacker captures encrypted message, replays it later" },
                                                { "name": "Server accepts it as new request (if no timestamp/nonce)" },
                                                { "name": "Defense: Nonce (one-time number), timestamp, sequence numbers" }
                                            ]
                                        },
                                        {
                                            "name": "Padding Oracle Attack",
                                            "children": [
                                                { "name": "Exploits error messages about padding (CBC mode)" },
                                                { "name": "Attacker can decrypt without key" },
                                                { "name": "Defense: Authenticated encryption (GCM mode)" }
                                            ]
                                        },
                                        {
                                            "name": "Timing Attack",
                                            "children": [
                                                { "name": "Measures encryption time to infer key bits" },
                                                { "name": "Example: Constant-time string comparison prevents this" },
                                                { "name": "Defense: Constant-time algorithms" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Security Threats & Defenses",
                            "children": [
                                {
                                    "name": "CSRF (Cross-Site Request Forgery)",
                                    "children": [
                                        {
                                            "name": "Attack Mechanism",
                                            "children": [
                                                { "name": "Attacker creates malicious form on attacker-controlled site" },
                                                { "name": "Form targets victim's bank with hidden fields" },
                                                { "name": "Form auto-submits when user visits malicious site" },
                                                { "name": "Ex:-\n\n<form action=\"https://yourbank.com/api/transfer\" method=\"POST\">\n    <input type=\"hidden\" name=\"amount\" value=\"10000\" />\n    <input type=\"hidden\" name=\"to_account\" value=\"attacker_id\" />\n</form>\n<script>\n    document.forms[0].submit();\n</script>" }
                                            ]
                                        },
                                        {
                                            "name": "How Attack Works Step-by-Step",
                                            "children": [
                                                { "name": "Step 1: User logs into bank.com" },
                                                { "name": "Step 2: Browser stores sessionId cookie for bank.com" },
                                                { "name": "Step 3: User visits malicious-site.com (still logged into bank)" },
                                                { "name": "Step 4: Malicious form auto-submits to yourbank.com/api/transfer" },
                                                { "name": "Step 5: Browser automatically attaches sessionId cookie to request" },
                                                { "name": "Step 6: Bank receives valid sessionId + transfer request" },
                                                { "name": "Step 7: Bank treats it as legitimate user action → transfers money" }
                                            ]
                                        },
                                        {
                                            "name": "Why CSRF Works",
                                            "children": [
                                                { "name": "Browser auto-attaches cookies to any request to that domain" },
                                                { "name": "Cookie doesn't care where request originated from" },
                                                { "name": "Bank can't distinguish user-initiated vs malicious request" },
                                                { "name": "No verification that request came from bank's own domain" },
                                                { "name": "Exploits trust between browser and authenticated session" }
                                            ]
                                        },
                                        {
                                            "name": "Defense: CSRF Token",
                                            "children": [
                                                { "name": "Server generates unpredictable token for each user session" },
                                                { "name": "Token embedded in legitimate forms: <input name=\"csrf_token\" value=\"random123xyz\" />" },
                                                { "name": "Token also sent in HTTP headers for AJAX requests" },
                                                { "name": "Malicious site CANNOT read token (same-origin policy blocks it)" },
                                                { "name": "Attacker's form missing token → bank rejects request as invalid" },
                                                { "name": "Token proves request originated from bank's own domain" }
                                            ]
                                        },
                                        {
                                            "name": "Defense: SameSite Cookie",
                                            "children": [
                                                { "name": "Browser doesn't send cookie cross-site by default" },
                                                { "name": "SameSite=Strict: Never send cross-site" },
                                                { "name": "SameSite=Lax: Send only on same-site or safe cross-site (link click)" },
                                                { "name": "SameSite=None: Send cross-site (requires Secure flag)" }
                                            ]
                                        },
                                        {
                                            "name": "Real-World Implementation",
                                            "children": [
                                                { "name": "Spring Security handles via CsrfFilter" },
                                                { "name": "POST/PUT/DELETE endpoints must include valid CSRF token" },
                                                { "name": "GET requests typically exempt (read-only operations)" },
                                                { "name": "Token validated on server before processing request" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "XSS (Cross-Site Scripting)",
                                    "children": [
                                        {
                                            "name": "Stored XSS",
                                            "children": [
                                                { "name": "Attacker injects script into persistent storage (DB, search field)" },
                                                { "name": "Script runs for all users viewing that page" },
                                                { "name": "Most dangerous (no user interaction required after injection)" }
                                            ]
                                        },
                                        {
                                            "name": "Reflected XSS",
                                            "children": [
                                                { "name": "Attacker crafts URL with malicious script" },
                                                { "name": "Trick user into clicking link" },
                                                { "name": "Script runs in victim's browser (read cookies, session)" }
                                            ]
                                        },
                                        {
                                            "name": "DOM-based XSS",
                                            "children": [
                                                { "name": "JavaScript manipulates page unsafely" },
                                                { "name": "Input from URL/localStorage used to set innerHTML" },
                                                { "name": "Ex:- document.body.innerHTML = userInput (dangerous)" }
                                            ]
                                        },
                                        {
                                            "name": "Defense",
                                            "children": [
                                                { "name": "Output encoding: Escape HTML special chars (<, >, &, \")" },
                                                { "name": "Content Security Policy (CSP): Restrict script sources" },
                                                { "name": "Input validation: Reject malicious patterns" },
                                                { "name": "Use textContent instead of innerHTML" },
                                                { "name": "DOMPurify library for sanitizing HTML" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "SQL Injection",
                                    "children": [
                                        { "name": "Attack: Unsanitized SQL concatenation" },
                                        { "name": "Ex:- SELECT * FROM users WHERE id = ' + input" },
                                        { "name": "Malicious input: ' OR '1'='1 (returns all users)" },
                                        { "name": "Defense: Prepared statements (query + params separate)" },
                                        { "name": "ORM layers (Hibernate) abstract SQL generation" },
                                        { "name": "Input validation (whitelist, regex)" }
                                    ]
                                },
                                {
                                    "name": "Man-in-the-Middle (MITM)",
                                    "children": [
                                        { "name": "Attacker intercepts traffic between A and B" },
                                        { "name": "HTTP unencrypted: Easy eavesdropping" },
                                        { "name": "ARP spoofing: Redirect traffic through attacker" },
                                        { "name": "Defense: HTTPS (TLS encryption + auth)" },
                                        { "name": "Certificate pinning: Mobile apps trust specific certs only" },
                                        { "name": "Mutual TLS: Both parties authenticate" }
                                    ]
                                },
                                {
                                    "name": "DDoS (Distributed Denial of Service)",
                                    "children": [
                                        {
                                            "name": "Volumetric Attacks",
                                            "children": [
                                                { "name": "UDP flood: Send massive UDP packets to exhaust bandwidth" },
                                                { "name": "DNS amplification: Spoofed victim IP, queries open resolvers" },
                                                { "name": "Mitigation: ISP-level filtering, rate limiting" }
                                            ]
                                        },
                                        {
                                            "name": "Protocol Attacks",
                                            "children": [
                                                { "name": "SYN flood: Send SYN without ACK, exhaust backlog" },
                                                { "name": "SYN cookies: Encode state in sequence number (no memory)" },
                                                { "name": "Teardrop: Malformed fragments (old, patched)" }
                                            ]
                                        },
                                        {
                                            "name": "Application Layer",
                                            "children": [
                                                { "name": "HTTP flood: Many HTTP requests (slowloris: slow headers)" },
                                                { "name": "Mitigation: Rate limiting per IP, CAPTCHA, WAF" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Network Architecture",
                            "children": [
                                {
                                    "name": "OSI Model (7 Layers)",
                                    "children": [
                                        {
                                            "name": "All (7) - Application: HTTP, DNS, SMTP, SSH",
                                            "children": [
                                                { "name": "Protocols: HTTP/HTTPS, DNS, SMTP, POP3, IMAP, SSH, Telnet, FTP, SFTP" },
                                                { "name": "Services: Email, Web browsing, File transfer, Remote login, Chat applications" },
                                                { "name": "Functions: User interface, Network services, Authentication, Resource sharing" },
                                                { "name": "Examples: Web browsers, Email clients, FTP clients, SSH clients" },
                                                { "name": "Port Range: Well-known ports (0-1023)" }
                                            ]
                                        },
                                        {
                                            "name": "People (6) - Presentation: Compression, encryption handshake",
                                            "children": [
                                                { "name": "Functions: Data encryption/decryption, Compression, Translation" },
                                                { "name": "Encryption: SSL/TLS handshake, Data encryption algorithms (AES, RSA)" },
                                                { "name": "Compression: GZIP, DEFLATE, LZ4" },
                                                { "name": "Character Encoding: ASCII, Unicode, UTF-8" },
                                                { "name": "Image/Video Format: JPEG, PNG, MPEG, H.264" }
                                            ]
                                        },
                                        {
                                            "name": "Should (5) - Session: Sockets, WebSocket",
                                            "children": [
                                                { "name": "Functions: Establish, maintain, terminate sessions" },
                                                { "name": "Session Management: Authentication, Authorization, Session tokens" },
                                                { "name": "Protocols: NetBIOS, PPTP, RPC, AppleTalk" },
                                                { "name": "WebSocket: Full-duplex communication, HTML5 protocol" },
                                                { "name": "Examples: Dialog control, Connection checkpointing, Recovery" }
                                            ]
                                        },
                                        {
                                            "name": "Try (4) - Transport: TCP, UDP",
                                            "children": [
                                                {
                                                    "name": "TCP (Transmission Control Protocol)",
                                                    "children": [
                                                        { "name": "Connection-oriented, Reliable, In-order delivery" },
                                                        { "name": "3-way handshake: SYN, SYN-ACK, ACK" },
                                                        { "name": "Flow control, Congestion control, Error checking" },
                                                        { "name": "Slower but guaranteed delivery" }
                                                    ]
                                                },
                                                {
                                                    "name": "UDP (User Datagram Protocol)",
                                                    "children": [
                                                        { "name": "Connectionless, Unreliable, No ordering guarantee" },
                                                        { "name": "Fast, Low overhead, Lightweight" },
                                                        { "name": "No handshake, No flow control" },
                                                        { "name": "Used for: DNS, VoIP, Online gaming, Streaming" }
                                                    ]
                                                },
                                                { "name": "Ports: Source and Destination port numbers (16-bit)" },
                                                { "name": "Segmentation: Data divided into segments" }
                                            ]
                                        },
                                        {
                                            "name": "New (3) - Network: IP, ICMP, ARP, routing",
                                            "children": [
                                                {
                                                    "name": "IP (Internet Protocol)",
                                                    "children": [
                                                        { "name": "IPv4: 32-bit addresses (192.168.1.1)" },
                                                        { "name": "IPv6: 128-bit addresses (2001:db8::1)" },
                                                        { "name": "Routing: Path determination using routing tables" },
                                                        { "name": "Fragmentation: Breaking packets into smaller sizes" }
                                                    ]
                                                },
                                                {
                                                    "name": "ICMP (Internet Control Message Protocol)",
                                                    "children": [
                                                        { "name": "Ping: Echo request/reply for connectivity testing" },
                                                        { "name": "Traceroute: Path tracing to destination" },
                                                        { "name": "Error messages: Unreachable, Time exceeded" }
                                                    ]
                                                },
                                                {
                                                    "name": "ARP (Address Resolution Protocol)",
                                                    "children": [
                                                        { "name": "Maps IP addresses to MAC addresses" },
                                                        { "name": "ARP Request/Reply process" },
                                                        { "name": "ARP Cache/Table maintenance" }
                                                    ]
                                                },
                                                { "name": "Routers: Forward packets between networks" },
                                                { "name": "Logical Addressing: IP addresses for device identification" }
                                            ]
                                        },
                                        {
                                            "name": "Dominos (2) - Data Link: Ethernet, MAC, switching",
                                            "children": [
                                                {
                                                    "name": "Ethernet",
                                                    "children": [
                                                        { "name": "LAN technology, Frame-based transmission" },
                                                        { "name": "Carrier Sense Multiple Access (CSMA/CD)" },
                                                        { "name": "Speed: 10 Mbps to 100 Gbps" }
                                                    ]
                                                },
                                                {
                                                    "name": "MAC (Media Access Control)",
                                                    "children": [
                                                        { "name": "48-bit address: AA:BB:CC:DD:EE:FF" },
                                                        { "name": "Unicast, Broadcast, Multicast addressing" },
                                                        { "name": "MAC address resolution via ARP" }
                                                    ]
                                                },
                                                {
                                                    "name": "Switching",
                                                    "children": [
                                                        { "name": "Switches: Forward frames based on MAC addresses" },
                                                        { "name": "Learning: Build MAC address table" },
                                                        { "name": "Flooding: Forward to all ports if MAC unknown" },
                                                        { "name": "VLANs: Virtual segmentation of networks" }
                                                    ]
                                                },
                                                { "name": "Frames: Data Link layer PDU (Preamble, Dest MAC, Src MAC, Data, CRC)" },
                                                { "name": "Error Detection: CRC (Cyclic Redundancy Check)" }
                                            ]
                                        },
                                        {
                                            "name": "Pizza (1) - Physical: Cables, signals, voltage",
                                            "children": [
                                                {
                                                    "name": "Cabling",
                                                    "children": [
                                                        { "name": "Twisted Pair: Cat5e, Cat6, Cat6a, Cat7 (Ethernet)" },
                                                        { "name": "Fiber Optic: Single-mode, Multi-mode (Long distance)" },
                                                        { "name": "Coaxial: Legacy, Cable TV" }
                                                    ]
                                                },
                                                {
                                                    "name": "Transmission Media",
                                                    "children": [
                                                        { "name": "Guided: Wired (Copper, Fiber)" },
                                                        { "name": "Unguided: Wireless (Radio, Microwave, Infrared)" }
                                                    ]
                                                },
                                                {
                                                    "name": "Signaling",
                                                    "children": [
                                                        { "name": "Digital Signals: Binary (0, 1)" },
                                                        { "name": "Modulation: Encoding data into signals" },
                                                        { "name": "Voltage/Frequency: Signal representation" }
                                                    ]
                                                },
                                                { "name": "Connectors: RJ45, SMA, LC, SC" },
                                                { "name": "Network Devices: Hubs, Repeaters, NIC cards" }
                                            ]
                                        },
                                        {
                                            "name": "Data Flow",
                                            "children": [
                                                {
                                                    "name": "Sender: Top-to-Bottom (Encapsulation, add headers)",
                                                    "children": [
                                                        { "name": "Layer 7: Application prepares data (HTTP request)" },
                                                        { "name": "Layer 6: Presentation encrypts/compresses data" },
                                                        { "name": "Layer 5: Session establishes connection" },
                                                        { "name": "Layer 4: Transport adds port info (TCP/UDP header)" },
                                                        { "name": "Layer 3: Network adds IP addresses (IP header)" },
                                                        { "name": "Layer 2: Data Link adds MAC addresses (Frame header)" },
                                                        { "name": "Layer 1: Physical converts to bits and transmits" }
                                                    ]
                                                },
                                                {
                                                    "name": "Receiver: Bottom-to-Top (De-encapsulation, remove headers)",
                                                    "children": [
                                                        { "name": "Layer 1: Physical receives bits and converts to frames" },
                                                        { "name": "Layer 2: Data Link removes frame header, checks CRC" },
                                                        { "name": "Layer 3: Network removes IP header, checks destination" },
                                                        { "name": "Layer 4: Transport removes port info, delivers to app" },
                                                        { "name": "Layer 5: Session manages connection state" },
                                                        { "name": "Layer 6: Presentation decrypts/decompresses data" },
                                                        { "name": "Layer 7: Application processes the received data" }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Media Access Control (MAC) Protocols",
                                    "children": [
                                        {
                                            "name": "ALOHA Protocol (Historical)",
                                            "children": [
                                                { "name": "Developed at University of Hawaii for radio networks" },
                                                { "name": "Multiple stations transmit on shared channel without coordination" },
                                                {
                                                    "name": "Pure ALOHA",
                                                    "children": [
                                                        { "name": "Station transmits whenever it has data (no carrier sense)" },
                                                        { "name": "Collision if two stations transmit simultaneously" },
                                                        { "name": "Efficiency: ~18.4% (very low)" },
                                                        { "name": "Vulnerable time: 2 × transmission_time" }
                                                    ]
                                                },
                                                {
                                                    "name": "Slotted ALOHA",
                                                    "children": [
                                                        { "name": "Time divided into discrete slots (one frame per slot)" },
                                                        { "name": "Stations only transmit at slot boundaries" },
                                                        { "name": "Efficiency: ~36.8% (double pure ALOHA)" },
                                                        { "name": "Requires synchronization between stations" }
                                                    ]
                                                },
                                                { "name": "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) improved on ALOHA" },
                                                { "name": "Foundation for Ethernet, WiFi, modern MAC protocols" },
                                                { "name": "More for GATE exams than core SDE interviews" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "TCP/IP Model (4-5 Layers)",
                                    "children": [
                                        { "name": "Application (7+6+5): HTTP, DNS, SMTP, WebSocket" },
                                        { "name": "Transport (4): TCP, UDP" },
                                        { "name": "Internet/Network (3): IP, ICMP, ARP" },
                                        { "name": "Data Link (2): Ethernet, MAC" },
                                        { "name": "Physical (1): Cables, signals" }
                                    ]
                                },
                                {
                                    "name": "Public vs Private IP",
                                    "children": [
                                        { "name": "Public IP → accessible over internet (routable globally)" },
                                        { "name": "Private IP → used inside local networks only" },
                                        {
                                            "name": "Private Ranges (RFC 1918)",
                                            "children": [
                                                { "name": "10.0.0.0/8 (10.x.x.x)" },
                                                { "name": "172.16.0.0/12 (172.16.x.x - 172.31.x.x)" },
                                                { "name": "192.168.0.0/16 (192.168.x.x)" }
                                            ]
                                        },
                                        { "name": "Special IPs: Loopback (127.0.0.1), Broadcast (255.255.255.255)" }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Infrastructure & Scaling",
                            "children": [
                                {
                                    "name": "Load Balancing",
                                    "children": [
                                        { "name": "Distributes traffic across multiple servers" },
                                        { "name": "Improves scalability and availability" },
                                        { "name": "Session affinity (sticky sessions): Route client to same backend" },
                                        {
                                            "name": "Algorithms",
                                            "children": [
                                                { "name": "Round Robin: Cycle through servers" },
                                                { "name": "Least Connections: Send to server with fewest active" },
                                                { "name": "IP Hash: Route by client IP (sticky)" },
                                                { "name": "Weighted Round Robin: Favor powerful servers" }
                                            ]
                                        },
                                        {
                                            "name": "Layer 4 vs Layer 7",
                                            "children": [
                                                { "name": "Layer 4 (TCP/UDP): IP + port, fast, unaware of app protocol" },
                                                { "name": "Layer 7 (HTTP): Read request, route by URL/host, slower but smarter" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Reverse Proxy & Firewall",
                                    "children": [
                                        {
                                            "name": "Reverse Proxy",
                                            "children": [
                                                { "name": "Sits between client and backend servers" },
                                                { "name": "Handles routing, SSL termination, caching" },
                                                { "name": "Hides backend server IPs (security)" },
                                                { "name": "Ex:- Nginx, HAProxy, AWS ALB" }
                                            ]
                                        },
                                        {
                                            "name": "Firewall",
                                            "children": [
                                                { "name": "Filters incoming/outgoing traffic" },
                                                { "name": "Blocks unauthorized access (stateful inspection)" },
                                                { "name": "Can block ports, IPs, protocols" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "CDN (Content Delivery Network)",
                                    "children": [
                                        { "name": "Servers distributed geographically" },
                                        { "name": "Serves static content closer to user" },
                                        { "name": "Reduces latency and bandwidth costs" },
                                        { "name": "Cache invalidation: TTL or explicit purge" },
                                        {
                                            "name": "Ex:-\n\nImages, CSS, JS served from nearest edge server"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Performance & Reliability",
                            "children": [
                                {
                                    "name": "Latency vs Throughput vs Bandwidth",
                                    "children": [
                                        { "name": "Latency → delay before response starts (ms scale)" },
                                        { "name": "Throughput → amount of work done per second (requests/sec)" },
                                        { "name": "Bandwidth → maximum data transfer capacity (Mbps)" },
                                        {
                                            "name": "Example",
                                            "children": [
                                                { "name": "High bandwidth ≠ low latency" },
                                                { "name": "Fiber internet → high bandwidth (100 Mbps)" },
                                                { "name": "Nearby server → lower latency (5ms)" },
                                                { "name": "Distant server → higher latency (200ms) despite high bandwidth" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Caching Strategy",
                                    "children": [
                                        { "name": "Cache-Control header: max-age, no-cache, no-store, public/private" },
                                        { "name": "ETag + If-None-Match: Server returns 304 if unchanged (bandwidth save)" },
                                        { "name": "Last-Modified + If-Modified-Since: Similar to ETag" },
                                        { "name": "Browser cache: Local storage of static assets" },
                                        { "name": "HTTP caching saves round trips (client-side, CDN, reverse proxy)" }
                                    ]
                                },
                                {
                                    "name": "Timeouts & Retries",
                                    "children": [
                                        { "name": "Timeout → stop waiting after fixed duration" },
                                        { "name": "Retry → attempt request again after failure" },
                                        { "name": "Prevents hanging requests (improves UX)" },
                                        { "name": "Exponential backoff: Increase delay between retries" },
                                        { "name": "Too many retries can overload systems (retry storms)" },
                                        { "name": "Jitter: Randomize retry time (prevent thundering herd)" }
                                    ]
                                },
                                {
                                    "name": "Connection Pooling",
                                    "children": [
                                        { "name": "Reuse existing connections instead of creating new ones" },
                                        { "name": "Reduces connection overhead (handshake, TLS)" },
                                        { "name": "Improves throughput (more concurrent requests)" },
                                        { "name": "Max pool size: Limit concurrent connections" },
                                        { "name": "Idle timeout: Close unused connections" },
                                        {
                                            "name": "Ex:-\n\nDatabase connection pools in Spring Boot\nHTTP client pooling (Keep-Alive)"
                                        }
                                    ]
                                },
                                {
                                    "name": "HTTP Keep-Alive",
                                    "children": [
                                        { "name": "Persistent connection: Reuse TCP for multiple HTTP requests" },
                                        { "name": "Reduces handshake overhead" },
                                        { "name": "HTTP/1.1 default (Connection: keep-alive)" },
                                        { "name": "Idle timeout: Close after period of no requests" },
                                        { "name": "Max requests: Close after N requests (resource cleanup)" }
                                    ]
                                },
                                {
                                    "name": "Rate Limiting",
                                    "children": [
                                        { "name": "Restricts number of requests per client/IP" },
                                        { "name": "Protects against abuse and overload" },
                                        { "name": "Token bucket algorithm: Refill at rate, consume per request" },
                                        { "name": "Leaky bucket: Smooth rate (FIFO queue)" },
                                        {
                                            "name": "Ex:-\n\n100 requests/minute per user\n429 Too Many Requests response"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ],
        },

        {
            name: "Framework & Build",
            children: [
                {
                    name: "Spring Boot",
                    children: [
                        {
                            name: "Spring Framework Basics",
                            children: [
                                {
                                    name: "Dependency Injection (DI)",
                                    children: [
                                        {
                                            name: "IoC Container",
                                            children: [
                                                { name: "\"Central registry that creates, manages, and wires beans\"" },
                                                { name: "Inversion of Control: Framework controls object lifecycle, not application" },
                                                { name: "Benefits: Loose coupling, testability, flexibility, centralized configuration" },
                                                { name: "Container Types: ApplicationContext (most used), BeanFactory (lightweight)" }
                                            ]
                                        },
                                        {
                                            name: "@Autowired Annotation",
                                            children: [
                                                { name: "\"Instructs container to inject dependency automatically\"" },
                                                { name: "Can be applied to: fields, constructors, setters, methods" },
                                                { name: "required=false: Injection optional (null if not available)" },
                                                { name: "Ex:- @Autowired private UserService userService;" },
                                                { name: "Problem: NullPointerException if bean not found and required=true" },
                                                { name: "Field Injection: Less testable (hard to inject mock in unit tests)" }
                                            ]
                                        },
                                        {
                                            name: "@Qualifier Annotation",
                                            children: [
                                                { name: "\"Disambiguate when multiple beans of same type exist\"" },
                                                { name: "Spring: 'Which PaymentService should I inject?' (Credit or Debit?)" },
                                                { name: "Solution: @Qualifier specifies bean name explicitly" },
                                                {
                                                    name: "Ex:-\n\n@Component(\"creditCardService\")\nclass CreditCardService implements PaymentService { }\n\n@Component(\"debitCardService\")\nclass DebitCardService implements PaymentService { }\n\n// Injection:\n@Autowired\n@Qualifier(\"creditCardService\")\nprivate PaymentService paymentService;"
                                                },
                                                { name: "NoUniqueBeanDefinitionException: Thrown if @Qualifier missing + multiple beans found" }
                                            ]
                                        },
                                        {
                                            name: "@Primary Annotation",
                                            children: [
                                                { name: "\"Mark bean as default when multiple candidates exist\"" },
                                                { name: "Priority: @Primary > @Qualifier > error if multiple" },
                                                {
                                                    name: "Ex:-\n\n@Component\n@Primary // This is default PaymentService\nclass CreditCardService implements PaymentService { }\n\n@Component\nclass DebitCardService implements PaymentService { }\n\n// If no @Qualifier, CreditCardService injected\n@Autowired\nprivate PaymentService paymentService;"
                                                },
                                                { name: "Use when: One bean is obviously the default choice" }
                                            ]
                                        },
                                        {
                                            name: "Constructor Injection (Best Practice)",
                                            children: [
                                                { name: "\"Inject dependencies via constructor parameters\"" },
                                                { name: "Advantages: Immutability (final fields), explicit dependencies, testable (easy mock), fail-fast (missing deps detected at startup)" },
                                                {
                                                    name: "Ex:-\n\n@Service\npublic class UserService {\n    private final UserRepository userRepository;\n    private final EmailService emailService;\n    \n    // Spring automatically calls this constructor\n    public UserService(UserRepository userRepository, EmailService emailService) {\n        this.userRepository = userRepository;\n        this.emailService = emailService;\n    }\n}"
                                                },
                                                { name: "Modern Spring (4.3+): @Autowired on constructor is optional if single constructor" },
                                                { name: "Immutability: Prevents accidental reassignment (final keyword)" }
                                            ]
                                        },
                                        {
                                            name: "Setter Injection",
                                            children: [
                                                { name: "\"Inject via setter method\"" },
                                                { name: "Advantages: Flexible (optional dependencies), can change after creation" },
                                                { name: "Disadvantages: Mutable (object state can change), circular dependency risk" },
                                                {
                                                    name: "Ex:-\n\n@Service\npublic class UserService {\n    private UserRepository userRepository;\n    private EmailService emailService;\n    \n    @Autowired\n    public void setUserRepository(UserRepository userRepository) {\n        this.userRepository = userRepository;\n    }\n    \n    @Autowired(required = false)\n    public void setEmailService(EmailService emailService) {\n        this.emailService = emailService; // Optional\n    }\n}"
                                                },
                                                { name: "Use when: Dependency is optional or needs to change at runtime" }
                                            ]
                                        },
                                        {
                                            name: "Field Injection",
                                            children: [
                                                { name: "\"Inject directly into field\"" },
                                                { name: "Advantages: Concise, clean syntax" },
                                                { name: "Disadvantages: Hard to test (can't inject mock without reflection), hidden dependencies, mutable state" },
                                                {
                                                    name: "Ex:-\n\n@Service\npublic class UserService {\n    @Autowired\n    private UserRepository userRepository;\n    \n    @Autowired\n    private EmailService emailService;\n}"
                                                },
                                                { name: "Spring team discourages: Prefer constructor injection" },
                                                { name: "Testing problem: Unit test must use Spring context or reflection to set field" }
                                            ]
                                        },
                                        {
                                            name: "Circular Dependency Problem",
                                            children: [
                                                { name: "\"Bean A depends on B, Bean B depends on A\"" },
                                                {
                                                    name: "Ex (Circular):-\n\n@Service\nclass UserService {\n    @Autowired\n    private OrderService orderService; // depends on OrderService\n}\n\n@Service\nclass OrderService {\n    @Autowired\n    private UserService userService; // depends on UserService\n}"
                                                },
                                                { name: "Constructor Injection: Detects circular dependency at startup → BeanCurrentlyInCreationException (FAIL FAST)" },
                                                { name: "Field Injection: May not detect until runtime → NullPointerException (FAIL LATE)" },
                                                {
                                                    name: "Solutions:",
                                                    "children": [
                                                        { name: "Refactor design: Extract common logic to third bean" },
                                                        { name: "Use setter injection with @Lazy" },
                                                        { name: "Use @PostConstruct for delayed initialization" },
                                                        { name: "Use ObjectProvider<T> for lazy resolution" }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Beans & Component Scanning",
                                    children: [
                                        {
                                            name: "@Bean Annotation",
                                            children: [
                                                { name: "\"Manually register bean returned by method\"" },
                                                { name: "Used in @Configuration classes" },
                                                { name: "Useful: Third-party classes (can't add @Component), complex initialization, conditional beans" },
                                                {
                                                    name: "Ex:-\n\n@Configuration\npublic class AppConfig {\n    @Bean\n    public DataSource dataSource() {\n        // Complex initialization\n        return new HikariDataSource(config);\n    }\n    \n    @Bean\n    public JdbcTemplate jdbcTemplate(DataSource dataSource) {\n        // Spring automatically injects DataSource from above @Bean\n        return new JdbcTemplate(dataSource);\n    }\n}"
                                                },
                                                { name: "Bean Name: Method name by default, @Bean(name=\"customName\") to override" },
                                                { name: "Dependencies: Can inject into method parameters (Spring resolves them)" }
                                            ]
                                        },
                                        {
                                            name: "@Component Annotation",
                                            children: [
                                                { name: "\"Generic stereotype for any Spring-managed component\"" },
                                                { name: "Auto-discovered during component scanning" },
                                                { name: "No parameters needed (class name becomes bean name)" },
                                                { name: "Ex:- @Component public class MyService { }" },
                                                { name: "Spring scans classpath at startup for @Component, @Service, @Repository, @Controller" }
                                            ]
                                        },
                                        {
                                            name: "@Service Annotation",
                                            children: [
                                                { name: "\"Specialized @Component for business logic layer\"" },
                                                { name: "Semantically indicates service/business logic" },
                                                { name: "Functionally identical to @Component (just a stereotype)" },
                                                { name: "Best practice: Use @Service for services, improves code readability" },
                                                {
                                                    name: "Ex:-\n\n@Service\npublic class UserService {\n    public void registerUser(User user) { }\n    public User findById(Long id) { }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@Repository Annotation",
                                            children: [
                                                { name: "\"Specialized @Component for data access layer\"" },
                                                { name: "Semantically indicates data access / persistence" },
                                                { name: "PersistenceExceptionTranslator: Translates database exceptions to Spring exceptions" },
                                                { name: "Functionally similar to @Component but with exception translation" },
                                                {
                                                    name: "Ex:-\n\n@Repository\npublic class UserRepository {\n    public User findById(Long id) { }\n    public void save(User user) { }\n}"
                                                },
                                                { name: "Note: For Spring Data JPA, repository interfaces extend CrudRepository (no @Repository needed)" }
                                            ]
                                        },
                                        {
                                            name: "@Controller Annotation",
                                            children: [
                                                { name: "\"Specialized @Component for web controllers\"" },
                                                { name: "Handles HTTP requests, returns views or data" },
                                                { name: "Methods can return: String (view name), ModelAndView, ResponseEntity, POJO (converted to JSON)" },
                                                {
                                                    name: "Ex:-\n\n@Controller\n@RequestMapping(\"/users\")\npublic class UserController {\n    @GetMapping(\"/{id}\")\n    public String getUser(@PathVariable Long id, Model model) {\n        // Fetch user, add to model, return view name\n        model.addAttribute(\"user\", userService.findById(id));\n        return \"user-detail\"; // View name (user-detail.html)\n    }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@Configuration Annotation",
                                            children: [
                                                { name: "\"Mark class as Spring configuration source\"" },
                                                { name: "Contains @Bean method definitions" },
                                                { name: "Processed at startup to create beans" },
                                                { name: "Enables conditional bean registration (@Conditional)" },
                                                {
                                                    name: "Ex:-\n\n@Configuration\npublic class DatabaseConfig {\n    @Bean\n    public DataSource devDataSource() {\n        return new HikariDataSource(devConfig);\n    }\n    \n    @Bean\n    public DataSource prodDataSource() {\n        return new HikariDataSource(prodConfig);\n    }\n}"
                                                },
                                                { name: "CGLIB: Spring uses CGLIB to enhance @Configuration classes (intercepts method calls)" }
                                            ]
                                        },
                                        {
                                            name: "Component Scanning",
                                            children: [
                                                { name: "\"Automatic discovery and registration of @Component beans\"" },
                                                { name: "Triggered at application startup by Spring Boot" },
                                                { name: "Default: Scans same package and sub-packages as @SpringBootApplication" },
                                                { name: "@ComponentScan: Explicitly specify packages to scan" },
                                                {
                                                    name: "Ex:-\n\n@Configuration\n@ComponentScan(basePackages = {\"com.example.service\", \"com.example.repository\"})\npublic class AppConfig { }"
                                                },
                                                { name: "Exclusion: @ComponentScan(excludeFilters = @ComponentScan.Filter(type=FilterType.ANNOTATION, classes=Deprecated.class))" },
                                                { name: "Performance: Narrower scan scope improves startup time" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Bean Lifecycle",
                                    children: [
                                        {
                                            name: "Complete Lifecycle Flow",
                                            children: [
                                                { name: "1. Instantiation: Spring creates bean instance via constructor" },
                                                { name: "2. Populate Properties: Set field values via setters" },
                                                { name: "3. Set Bean Name: BeanNameAware.setBeanName() called (if implements interface)" },
                                                { name: "4. Set Application Context: ApplicationContextAware.setApplicationContext() (if implements)" },
                                                { name: "5. Pre-Initialization: BeanPostProcessor.postProcessBeforeInitialization() called" },
                                                { name: "6. Initialization: @PostConstruct method OR InitializingBean.afterPropertiesSet() OR init-method in @Bean" },
                                                { name: "7. Post-Initialization: BeanPostProcessor.postProcessAfterInitialization()" },
                                                { name: "8. Bean Ready: Available in container for injection/use" },
                                                { name: "9. Destruction: @PreDestroy method OR DisposableBean.destroy() on shutdown" },
                                                { name: "Order of init methods: @PostConstruct > InitializingBean.afterPropertiesSet() > @Bean(initMethod)" }
                                            ]
                                        },
                                        {
                                            name: "@PostConstruct Annotation",
                                            children: [
                                                { name: "\"Called after dependency injection complete\"" },
                                                { name: "Perfect for initialization logic (connect to DB, load cache, validate)" },
                                                { name: "Runs only once, before bean returned to container" },
                                                { name: "Can throw exception to prevent bean creation" },
                                                {
                                                    name: "Ex:-\n\n@Service\npublic class UserService {\n    @Autowired\n    private UserRepository userRepository;\n    \n    private Cache<Integer, User> userCache;\n    \n    @PostConstruct\n    public void init() {\n        userCache = CacheBuilder.newBuilder().build();\n        // Load initial data\n        List<User> users = userRepository.findAll();\n        users.forEach(u -> userCache.put(u.getId(), u));\n        System.out.println(\"UserService initialized with \" + users.size() + \" users\");\n    }\n}"
                                                },
                                                { name: "Exception in @PostConstruct: Prevents bean creation → BeanCreationException" }
                                            ]
                                        },
                                        {
                                            name: "@PreDestroy Annotation",
                                            children: [
                                                { name: "\"Called just before bean destruction (on shutdown)\"" },
                                                { name: "Perfect for cleanup: close DB connection, flush cache, release resources" },
                                                { name: "Called when ApplicationContext.close() OR JVM shutdown (via shutdown hooks)" },
                                                {
                                                    name: "Ex:-\n\n@Service\npublic class ConnectionPoolManager {\n    private HikariDataSource dataSource;\n    \n    @PostConstruct\n    public void init() {\n        dataSource = new HikariDataSource(config);\n        System.out.println(\"Connection pool initialized\");\n    }\n    \n    @PreDestroy\n    public void cleanup() {\n        if (dataSource != null) {\n            dataSource.close();\n            System.out.println(\"Connection pool closed\");\n        }\n    }\n}"
                                                },
                                                { name: "Timeout: Spring waits for @PreDestroy completion before proceeding" }
                                            ]
                                        },
                                        {
                                            name: "InitializingBean Interface",
                                            children: [
                                                { name: "\"Alternative to @PostConstruct (older approach)\"" },
                                                { name: "Implement afterPropertiesSet() method" },
                                                { name: "Called after all properties set and dependencies injected" },
                                                { name: "Less readable than @PostConstruct (couples to Spring API)" },
                                                {
                                                    name: "Ex:-\n\n@Service\npublic class ConfigService implements InitializingBean {\n    @Override\n    public void afterPropertiesSet() throws Exception {\n        // Initialization logic\n    }\n}"
                                                },
                                                { name: "Preference: @PostConstruct preferred (decouples from Spring)" }
                                            ]
                                        },
                                        {
                                            name: "DisposableBean Interface",
                                            children: [
                                                { name: "\"Alternative to @PreDestroy (older approach)\"" },
                                                { name: "Implement destroy() method" },
                                                { name: "Called before bean destruction" },
                                                {
                                                    name: "Ex:-\n\n@Service\npublic class ResourceManager implements DisposableBean {\n    @Override\n    public void destroy() throws Exception {\n        // Cleanup logic\n    }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "BeanPostProcessor",
                                            children: [
                                                { name: "\"Customize bean creation before/after initialization\"" },
                                                { name: "Implements: postProcessBeforeInitialization() and postProcessAfterInitialization()" },
                                                { name: "Applied to ALL beans in container (or filtered by type)" },
                                                {
                                                    name: "Ex:-\n\n@Component\npublic class LoggingBeanPostProcessor implements BeanPostProcessor {\n    @Override\n    public Object postProcessAfterInitialization(Object bean, String beanName) {\n        System.out.println(\"Bean \" + beanName + \" of type \" + bean.getClass() + \" initialized\");\n        return bean; // Return modified or original bean\n    }\n}"
                                                },
                                                { name: "Use Cases: Proxy creation (AOP), property validation, bean enhancement" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Bean Scopes",
                                    children: [
                                        {
                                            name: "Singleton (Default)",
                                            children: [
                                                { name: "\"One instance created, shared across entire application\"" },
                                                { name: "Instance created at container startup (eager initialization)" },
                                                { name: "Every injection receives same instance" },
                                                { name: "Memory efficient (shared resources)" },
                                                { name: "Thread-safe responsibility on developer (avoid mutable state)" },
                                                {
                                                    name: "Ex:-\n\n@Service\n// @Scope(\"singleton\") // default, no need to specify\npublic class UserService {\n    // All components injecting UserService get SAME instance\n}"
                                                },
                                                { name: "Best Practice: Keep singleton beans stateless (immutable)" },
                                                { name: "Thread Safety: If state needed, use ThreadLocal or synchronization" }
                                            ]
                                        },
                                        {
                                            name: "Prototype",
                                            children: [
                                                { name: "\"New instance created for EACH injection/request\"" },
                                                { name: "No shared state between callers" },
                                                { name: "Higher memory usage (multiple instances)" },
                                                { name: "@PreDestroy not called (responsibility on caller)" },
                                                {
                                                    name: "Ex:-\n\n@Service\n@Scope(\"prototype\")\npublic class RequestContext {\n    // Each component gets NEW RequestContext instance\n}"
                                                },
                                                { name: "Use Cases: Request-scoped state (user input, temporary data), beans with mutable state" },
                                                { name: "Performance: Create overhead, avoid for frequently used beans" }
                                            ]
                                        },
                                        {
                                            name: "Request Scope (Web Only)",
                                            children: [
                                                { name: "\"New instance per HTTP request\"" },
                                                { name: "Instance created at request start, destroyed at request end" },
                                                { name: "Available throughout request lifecycle" },
                                                { name: "Useful: Request-specific data (user, authentication, request ID)" },
                                                {
                                                    name: "Ex:-\n\n@Service\n@Scope(\"request\")\n@RequestScope // Shorthand\npublic class RequestLogger {\n    @PostConstruct\n    public void init() {\n        System.out.println(\"Request started\");\n    }\n    \n    @PreDestroy\n    public void cleanup() {\n        System.out.println(\"Request ended\");\n    }\n}"
                                                },
                                                { name: "ScopedProxyMode.TARGET_CLASS: Proxy bean for lazy initialization" }
                                            ]
                                        },
                                        {
                                            name: "Session Scope (Web Only)",
                                            children: [
                                                { name: "\"New instance per HTTP session\"" },
                                                { name: "Lives throughout user session (persists across requests)" },
                                                { name: "Destroyed when session expires/invalidates" },
                                                { name: "Good for: User preferences, shopping cart, authentication state" },
                                                {
                                                    name: "Ex:-\n\n@Service\n@Scope(\"session\")\n@SessionScope // Shorthand\npublic class UserCart {\n    private List<Item> items = new ArrayList<>();\n    \n    public void addItem(Item item) {\n        items.add(item); // Persists across requests\n    }\n}"
                                                },
                                                { name: "Memory: Each user session has separate instance" }
                                            ]
                                        },
                                        {
                                            name: "Application Scope (Web Only)",
                                            children: [
                                                { name: "\"One instance per ServletContext (entire web application)\"" },
                                                { name: "Shared across all sessions and requests" },
                                                { name: "Similar to singleton but application-specific" },
                                                { name: "Good for: Global app state, shared resources" },
                                                {
                                                    name: "Ex:-\n\n@Service\n@Scope(\"application\")\n@ApplicationScope // Shorthand\npublic class ApplicationConfig {\n    private String appVersion = \"1.0\";\n    private int totalUsers = 0;\n    // Shared across entire app\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Scoped Proxies & Thread Safety",
                                            children: [
                                                { name: "Problem: Injecting request-scoped bean into singleton" },
                                                { name: "Solution: Spring creates proxy (lazy initialization) to handle lifecycle mismatch" },
                                                { name: "@Scope(value=\"request\", proxyMode=ScopedProxyMode.TARGET_CLASS)" },
                                                { name: "ScopedProxyMode.TARGET_CLASS: Class-based proxy (uses CGLIB)" },
                                                { name: "ScopedProxyMode.INTERFACES: Interface-based proxy (JDK Proxy)" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Spring Web MVC",
                            children: [
                                {
                                    name: "Controllers & Routing",
                                    children: [
                                        {
                                            name: "@Controller Annotation",
                                            children: [
                                                { name: "\"Marks class as Spring MVC controller\"" },
                                                { name: "Handles HTTP requests, returns views (HTML) or data" },
                                                { name: "Methods can return: String (view name), ModelAndView, Model, ResponseEntity, void" },
                                                {
                                                    name: "Ex (View-based):-\n\n@Controller\n@RequestMapping(\"/users\")\npublic class UserController {\n    @GetMapping(\"/{id}\")\n    public String getUser(@PathVariable Long id, Model model) {\n        User user = userService.findById(id);\n        model.addAttribute(\"user\", user);\n        return \"user-detail\"; // Thymeleaf template: user-detail.html\n    }\n}"
                                                },
                                                { name: "Template Engines: Thymeleaf, Freemarker, Velocity" },
                                                { name: "Model: Passed to view template for rendering" }
                                            ]
                                        },
                                        {
                                            name: "@RestController Annotation",
                                            children: [
                                                { name: "\"Combines @Controller + @ResponseBody\"" },
                                                { name: "Automatically serializes return value to JSON/XML" },
                                                { name: "Used for REST APIs (no view rendering)" },
                                                {
                                                    name: "Ex:-\n\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserRestController {\n    @GetMapping(\"/{id}\")\n    public UserDto getUser(@PathVariable Long id) {\n        // Return POJO → automatically converted to JSON\n        return userService.findById(id);\n    }\n    \n    @PostMapping\n    public ResponseEntity<UserDto> createUser(@RequestBody CreateUserRequest req) {\n        UserDto created = userService.create(req);\n        return ResponseEntity.status(201).body(created); // 201 CREATED\n    }\n}"
                                                },
                                                { name: "ContentNegotiation: Spring chooses JSON/XML based on Accept header" }
                                            ]
                                        },
                                        {
                                            name: "@RequestMapping",
                                            children: [
                                                { name: "\"Maps HTTP requests to handler method\"" },
                                                { name: "Flexible: Can specify path, method, headers, consumes, produces" },
                                                {
                                                    name: "Parameters:-\n\npath: \"/users\" or value: \"/users\"\nmethod: RequestMethod.GET, POST, PUT, DELETE\nheaders: \"Content-Type=application/json\"\nconsumes: \"application/json\" (request body type)\nproduces: \"application/json\" (response type)"
                                                },
                                                {
                                                    name: "Ex:-\n\n@RequestMapping(path=\"/users\", method=RequestMethod.GET, produces=\"application/json\")\npublic List<User> getAllUsers() { }\n\n@RequestMapping(path=\"/users\", method=RequestMethod.POST, consumes=\"application/json\")\npublic User createUser(@RequestBody User user) { }"
                                                },
                                                { name: "Class-level: Apply to all methods in controller" },
                                                { name: "Method-level: Override class-level mapping" }
                                            ]
                                        },
                                        {
                                            name: "@GetMapping",
                                            children: [
                                                { name: "\"Shorthand for @RequestMapping(method=GET)\"" },
                                                { name: "Maps HTTP GET requests" },
                                                {
                                                    name: "Ex:-\n\n@GetMapping(\"/users/{id}\")\npublic User getUser(@PathVariable Long id) { }\n\n@GetMapping(\"/users\")\npublic List<User> getAllUsers() { }"
                                                },
                                                { name: "Safe & Idempotent: No side effects, multiple calls = same result" },
                                                { name: "Query Parameters: @RequestParam String search, int page, int size" }
                                            ]
                                        },
                                        {
                                            name: "@PostMapping",
                                            children: [
                                                { name: "\"Shorthand for @RequestMapping(method=POST)\"" },
                                                { name: "Maps HTTP POST requests (create new resources)" },
                                                {
                                                    name: "Ex:-\n\n@PostMapping(\"/users\")\npublic ResponseEntity<User> createUser(@RequestBody CreateUserRequest req) {\n    User created = userService.create(req);\n    return ResponseEntity.status(201).location(URI.create(\"/users/\" + created.getId())).body(created);\n}"
                                                },
                                                { name: "Idempotency: POST not idempotent (each call creates new resource)" },
                                                { name: "Status: Return 201 CREATED with Location header pointing to new resource" }
                                            ]
                                        },
                                        {
                                            name: "@PutMapping",
                                            children: [
                                                { name: "\"Shorthand for @RequestMapping(method=PUT)\"" },
                                                { name: "Maps HTTP PUT requests (replace entire resource)" },
                                                {
                                                    name: "Ex:-\n\n@PutMapping(\"/users/{id}\")\npublic User updateUser(@PathVariable Long id, @RequestBody UpdateUserRequest req) {\n    return userService.update(id, req);\n}"
                                                },
                                                { name: "Idempotent: Multiple identical PUT calls = same result" },
                                                { name: "vs PATCH: PUT replaces entire resource, PATCH partial update" },
                                                { name: "Difference: PUT(entire body required), PATCH(only modified fields)" }
                                            ]
                                        },
                                        {
                                            name: "@DeleteMapping",
                                            children: [
                                                { name: "\"Shorthand for @RequestMapping(method=DELETE)\"" },
                                                { name: "Maps HTTP DELETE requests (remove resource)" },
                                                {
                                                    name: "Ex:-\n\n@DeleteMapping(\"/users/{id}\")\npublic ResponseEntity<Void> deleteUser(@PathVariable Long id) {\n    userService.delete(id);\n    return ResponseEntity.noContent().build(); // 204 NO CONTENT\n}"
                                                },
                                                { name: "Idempotent: Deleting already-deleted resource = same result" },
                                                { name: "Status: Return 204 NO CONTENT (no body) or 200 OK" }
                                            ]
                                        },
                                        {
                                            name: "@PathVariable",
                                            children: [
                                                { name: "\"Extract value from URL path\"" },
                                                { name: "Variable enclosed in {braces} in path" },
                                                {
                                                    name: "Ex:-\n\n@GetMapping(\"/users/{id}/posts/{postId}\")\npublic Post getUserPost(@PathVariable Long id, @PathVariable Long postId) {\n    return postService.findById(postId); // id=100, postId=5\n}"
                                                },
                                                { name: "Type Conversion: Spring auto-converts string to Long, UUID, etc." },
                                                { name: "Required: true (default), path variable must exist (throw 404 if missing)" },
                                                { name: "Name: Optional, defaults to parameter name (must match if using different name)" },
                                                {
                                                    name: "Ex (regex validation):-\n\n@GetMapping(\"/posts/{id:\\\\d+}\")\npublic Post getPost(@PathVariable Long id) {\n    // Only matches numeric IDs\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@RequestParam",
                                            children: [
                                                { name: "\"Extract query parameters from URL\"" },
                                                { name: "Key=value pairs after ? in URL" },
                                                {
                                                    name: "Ex:-\n\n@GetMapping(\"/users\")\npublic List<User> searchUsers(\n    @RequestParam(required=false) String name,\n    @RequestParam(defaultValue=\"0\") int page,\n    @RequestParam(defaultValue=\"10\") int size\n) {\n    // /users?name=John&page=2&size=20\n}"
                                                },
                                                { name: "required=false: Parameter optional (null if missing)" },
                                                { name: "defaultValue: Provide default if missing" },
                                                { name: "Multiple values: List<String> tags → /search?tags=java&tags=spring" },
                                                {
                                                    name: "Ex (multiple):-\n\n@GetMapping(\"/search\")\npublic List<Article> search(@RequestParam List<String> tags) {\n    // tags = [\"java\", \"spring\"]\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "REST Routing Best Practices",
                                            children: [
                                                { name: "Use nouns for resources, not verbs: /users NOT /getUsers" },
                                                { name: "Hierarchical resources: /users/{id}/posts/{postId}/comments/{commentId}" },
                                                { name: "Standard HTTP methods: GET (read), POST (create), PUT (update), DELETE (delete), PATCH (partial)" },
                                                { name: "Status codes: 200 OK, 201 CREATED, 204 NO CONTENT, 400 BAD REQUEST, 404 NOT FOUND, 500 INTERNAL ERROR" },
                                                { name: "Versioning: /api/v1/users OR Accept header: Accept: application/vnd.myapi.v1+json" },
                                                { name: "Consistency: Use same naming convention (camelCase, kebab-case, snake_case)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Request & Response Handling",
                                    children: [
                                        {
                                            name: "@RequestBody",
                                            children: [
                                                { name: "\"Deserialize HTTP request body to Java object\"" },
                                                { name: "Automatically converts JSON → POJO (or XML, etc.)" },
                                                { name: "Content-Type header determines serializer (application/json)" },
                                                {
                                                    name: "Ex:-\n\n@PostMapping(\"/users\")\npublic User createUser(@RequestBody CreateUserRequest request) {\n    // HTTP body: {\"name\": \"John\", \"email\": \"john@example.com\"}\n    // Spring converts to CreateUserRequest object\n    return userService.create(request);\n}"
                                                },
                                                { name: "Validation: Use @Valid annotation with @RequestBody for constraint validation" },
                                                { name: "Deserialization: Uses Jackson ObjectMapper by default" },
                                                { name: "Type Safety: Mismatch in JSON → HttpMessageNotReadableException" }
                                            ]
                                        },
                                        {
                                            name: "@ResponseBody",
                                            children: [
                                                { name: "\"Serialize Java object to HTTP response body\"" },
                                                { name: "Converts POJO → JSON (or XML)" },
                                                { name: "Can be applied to controller class or method" },
                                                {
                                                    name: "Ex:-\n\n@GetMapping(\"/users/{id}\")\n@ResponseBody // Optional with @RestController\npublic User getUser(@PathVariable Long id) {\n    // Returns: {\"id\": 1, \"name\": \"John\", \"email\": \"john@example.com\"}\n    return userService.findById(id);\n}"
                                                },
                                                { name: "Automatic: @RestController includes @ResponseBody" },
                                                { name: "Serialization: Jackson's ObjectMapper converts POJO → JSON" }
                                            ]
                                        },
                                        {
                                            name: "ResponseEntity<T>",
                                            children: [
                                                { name: "\"Provides complete control over HTTP response (status, headers, body)\"" },
                                                { name: "Fluent builder API for constructing responses" },
                                                {
                                                    name: "Common Status Codes:-\n\nOK(200): GET successful\nCREATED(201): POST successful (resource created)\nNO_CONTENT(204): DELETE/update successful (no body)\nBAD_REQUEST(400): Validation error\nUNAUTHORIZED(401): Missing/invalid authentication\nFORBIDDEN(403): Authenticated but no permission\nNOT_FOUND(404): Resource doesn't exist\nINTERNAL_SERVER_ERROR(500): Server error"
                                                },
                                                {
                                                    name: "Ex:-\n\n@PostMapping(\"/users\")\npublic ResponseEntity<User> createUser(@RequestBody CreateUserRequest req) {\n    User created = userService.create(req);\n    return ResponseEntity\n        .status(HttpStatus.CREATED)\n        .header(\"X-Resource-Id\", created.getId().toString())\n        .body(created);\n    // OR shorthand:\n    // return ResponseEntity.created(URI.create(\"/users/\" + created.getId())).body(created);\n}\n\n@GetMapping(\"/users/{id}\")\npublic ResponseEntity<User> getUser(@PathVariable Long id) {\n    Optional<User> user = userService.findById(id);\n    return user\n        .map(u -> ResponseEntity.ok(u))\n        .orElse(ResponseEntity.notFound().build());\n}\n\n@DeleteMapping(\"/users/{id}\")\npublic ResponseEntity<Void> deleteUser(@PathVariable Long id) {\n    userService.delete(id);\n    return ResponseEntity.noContent().build(); // 204 NO CONTENT\n}"
                                                },
                                                { name: "HTTP Headers: Set custom headers (Location, X-Custom-Header)" },
                                                { name: "vs @ResponseStatus: ResponseEntity more flexible (status per execution path)" }
                                            ]
                                        },
                                        {
                                            name: "HttpStatus Enum",
                                            children: [
                                                { name: "\"Pre-defined HTTP status codes\"" },
                                                { name: "Common: OK, CREATED, NO_CONTENT, BAD_REQUEST, UNAUTHORIZED, FORBIDDEN, NOT_FOUND, CONFLICT, GONE, INTERNAL_SERVER_ERROR, SERVICE_UNAVAILABLE" },
                                                {
                                                    name: "Ex:-\n\nreturn ResponseEntity.status(HttpStatus.CONFLICT).body(\"Resource already exists\");\nreturn ResponseEntity.status(418).body(\"I'm a teapot\"); // Custom numeric code"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@ExceptionHandler",
                                            children: [
                                                { name: "\"Handle exceptions in controller method\"" },
                                                { name: "Catches specified exception type and returns response" },
                                                { name: "Method-level or class-level (@ControllerAdvice)" },
                                                {
                                                    name: "Ex:-\n\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @GetMapping(\"/{id}\")\n    public User getUser(@PathVariable Long id) {\n        return userService.findById(id); // throws UserNotFoundException\n    }\n    \n    @ExceptionHandler(UserNotFoundException.class)\n    public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex) {\n        ErrorResponse error = new ErrorResponse(\"User not found\", ex.getMessage(), 404);\n        return ResponseEntity.status(404).body(error);\n    }\n}"
                                                },
                                                { name: "Priority: More specific exceptions handled first" },
                                                { name: "Inheritance: Handler catches exception and subclasses" }
                                            ]
                                        },
                                        {
                                            name: "@ControllerAdvice",
                                            children: [
                                                { name: "\"Global exception handler for entire application\"" },
                                                { name: "Centralized error handling across all controllers" },
                                                { name: "Reduces code duplication (@ExceptionHandler in every controller)" },
                                                {
                                                    name: "Ex:-\n\n@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(UserNotFoundException.class)\n    public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex) {\n        ErrorResponse error = new ErrorResponse(\"User not found\", ex.getMessage(), 404);\n        return ResponseEntity.status(404).body(error);\n    }\n    \n    @ExceptionHandler(InvalidRequestException.class)\n    public ResponseEntity<ErrorResponse> handleInvalidRequest(InvalidRequestException ex) {\n        ErrorResponse error = new ErrorResponse(\"Invalid request\", ex.getMessage(), 400);\n        return ResponseEntity.status(400).body(error);\n    }\n    \n    @ExceptionHandler(Exception.class) // Catch-all\n    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {\n        ErrorResponse error = new ErrorResponse(\"Internal server error\", ex.getMessage(), 500);\n        return ResponseEntity.status(500).body(error);\n    }\n}"
                                                },
                                                { name: "Order: More specific handlers take precedence" },
                                                { name: "BasePackages: @ControllerAdvice(basePackages=\"com.example.api\") to limit scope" }
                                            ]
                                        },
                                        {
                                            name: "Error Response Best Practices",
                                            children: [
                                                { name: "Standard error structure: {\"error\": \"...\", \"message\": \"...\", \"status\": 400, \"timestamp\": \"...\"}" },
                                                { name: "Consistent error codes: Use application-specific codes (USER_NOT_FOUND, INVALID_EMAIL)" },
                                                { name: "Don't expose stack traces in production (log internally)" },
                                                { name: "Provide actionable messages: \"User with ID 123 not found\" NOT \"NPE\"" },
                                                { name: "HTTP status semantics: Use correct codes (not all errors are 500)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Interceptors & Filters",
                                    children: [
                                        {
                                            name: "Interceptors (Spring-aware)",
                                            children: [
                                                { name: "\"Spring-managed components that intercept HTTP requests/responses\"" },
                                                { name: "Can access Spring beans and ApplicationContext" },
                                                { name: "Implement HandlerInterceptor interface" },
                                                {
                                                    name: "Methods:-\n\npreHandle(): Before controller method (return false to stop)\npostHandle(): After controller, before response rendering\nafterCompletion(): After response sent to client"
                                                },
                                                {
                                                    name: "Ex:-\n\n@Component\npublic class RequestLoggingInterceptor implements HandlerInterceptor {\n    private static final Logger logger = LoggerFactory.getLogger(RequestLoggingInterceptor.class);\n    \n    @Override\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {\n        long startTime = System.currentTimeMillis();\n        request.setAttribute(\"startTime\", startTime);\n        logger.info(\"Request: {} {}\", request.getMethod(), request.getRequestURI());\n        return true; // Continue\n    }\n    \n    @Override\n    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {\n        long startTime = (Long) request.getAttribute(\"startTime\");\n        long duration = System.currentTimeMillis() - startTime;\n        logger.info(\"Response: {} in {}ms\", response.getStatus(), duration);\n    }\n}\n\n@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n    @Autowired\n    private RequestLoggingInterceptor loggingInterceptor;\n    \n    @Override\n    public void addInterceptors(InterceptorRegistry registry) {\n        registry.addInterceptor(loggingInterceptor);\n    }\n}"
                                                },
                                                { name: "Can throw exceptions (caught by @ExceptionHandler)" },
                                                { name: "Access to Model and View" }
                                            ]
                                        },
                                        {
                                            name: "Filters (Servlet-level)",
                                            children: [
                                                { name: "\"Lower-level than interceptors, execute at servlet level\"" },
                                                { name: "Don't have access to Spring context (can't @Autowired)" },
                                                { name: "Implement javax.servlet.Filter interface" },
                                                {
                                                    name: "Methods:-\n\ninit(): Initialize filter\ndoFilter(ServletRequest, ServletResponse, FilterChain): Main logic\ndestroy(): Cleanup"
                                                },
                                                {
                                                    name: "Ex:-\n\n@Component\n@WebFilter(urlPatterns = \"/*\")\npublic class RequestIdFilter implements Filter {\n    @Override\n    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)\n            throws IOException, ServletException {\n        HttpServletRequest httpRequest = (HttpServletRequest) request;\n        String requestId = UUID.randomUUID().toString();\n        httpRequest.setAttribute(\"requestId\", requestId);\n        MDC.put(\"requestId\", requestId); // For logging\n        \n        try {\n            chain.doFilter(request, response);\n        } finally {\n            MDC.remove(\"requestId\");\n        }\n    }\n}"
                                                },
                                                { name: "Execution order: Filter → Interceptor preHandle → Controller → Interceptor postHandle → Interceptor afterCompletion → Filter" },
                                                { name: "Use Cases: Security (CORS), compression, request ID generation, logging" }
                                            ]
                                        },
                                        {
                                            name: "Execution Order",
                                            children: [
                                                { name: "1. Filter.doFilter() enters" },
                                                { name: "2. Interceptor.preHandle()" },
                                                { name: "3. Controller method executes" },
                                                { name: "4. Interceptor.postHandle()" },
                                                { name: "5. View rendering (if applicable)" },
                                                { name: "6. Interceptor.afterCompletion()" },
                                                { name: "7. Filter.doFilter() exits" }
                                            ]
                                        },
                                        {
                                            name: "Practical Example: Authentication",
                                            children: [
                                                {
                                                    name: "Ex:-\n\n@Component\npublic class AuthenticationInterceptor implements HandlerInterceptor {\n    @Autowired\n    private JwtTokenProvider tokenProvider;\n    \n    @Override\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) \n            throws ServletException {\n        String token = extractToken(request);\n        \n        if (token == null || !tokenProvider.validateToken(token)) {\n            response.setStatus(401);\n            response.getWriter().write(\"Unauthorized\");\n            return false; // Block request\n        }\n        \n        UserPrincipal user = tokenProvider.getUserFromToken(token);\n        request.setAttribute(\"user\", user);\n        SecurityContextHolder.getContext().setAuthentication(user);\n        return true; // Continue\n    }\n    \n    private String extractToken(HttpServletRequest request) {\n        String header = request.getHeader(\"Authorization\");\n        if (header != null && header.startsWith(\"Bearer \")) {\n            return header.substring(7);\n        }\n        return null;\n    }\n}"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Spring Data & Persistence",
                            children: [
                                {
                                    name: "Spring Data JPA",
                                    children: [
                                        {
                                            name: "JPA (Java Persistence API) Basics",
                                            children: [
                                                { name: "\"Specification for object-relational mapping (ORM)\"" },
                                                { name: "Hibernate is most common implementation" },
                                                { name: "Abstracts database details, works with SQL/NoSQL" },
                                                { name: "Automatic CRUD operations, lazy/eager loading, transactions" }
                                            ]
                                        },
                                        {
                                            name: "@Entity Annotation",
                                            children: [
                                                { name: "\"Mark class as JPA entity (maps to database table)\"" },
                                                { name: "Class name becomes table name (can override with @Table)" },
                                                { name: "Must have no-arg constructor (public or protected)" },
                                                { name: "Attributes become columns (can customize with @Column)" },
                                                {
                                                    name: "Ex:-\n\n@Entity\n@Table(name = \"users\") // Explicit table name\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    \n    @Column(name = \"user_name\", nullable = false, length = 100)\n    private String name;\n    \n    @Column(unique = true, nullable = false)\n    private String email;\n    \n    @CreationTimestamp // Automatic\n    private LocalDateTime createdAt;\n    \n    @UpdateTimestamp\n    private LocalDateTime updatedAt;\n    \n    // Getters, setters, constructors\n}"
                                                },
                                                { name: "Naming: Table name convention (user_profile OR UserProfile)" }
                                            ]
                                        },
                                        {
                                            name: "@Id Annotation",
                                            children: [
                                                { name: "\"Mark field as primary key\"" },
                                                { name: "Every entity must have one @Id" },
                                                { name: "Composite primary key: Use @EmbeddedId or @IdClass" },
                                                {
                                                    name: "Ex (composite):-\n\n@Embeddable\npublic class AuthorBookId {\n    private Long authorId;\n    private Long bookId;\n}\n\n@Entity\npublic class AuthorBook {\n    @EmbeddedId\n    private AuthorBookId id;\n    \n    private Integer rating;\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@GeneratedValue",
                                            children: [
                                                { name: "\"Auto-generate primary key values\"" },
                                                { name: "Strategy types: IDENTITY, SEQUENCE, TABLE, AUTO" },
                                                {
                                                    name: "IDENTITY (Database auto-increment):-\n\n@Id\n@GeneratedValue(strategy = GenerationType.IDENTITY)\nprivate Long id;\n// Database generates: 1, 2, 3...\n// Good for: MySQL, PostgreSQL\n// Limitation: JPA may not know ID until insert completes"
                                                },
                                                {
                                                    name: "SEQUENCE (Database sequence):-\n\n@Id\n@GeneratedValue(strategy = GenerationType.SEQUENCE, generator=\"user_seq\")\n@SequenceGenerator(name=\"user_seq\", sequenceName=\"seq_user\", allocationSize=1)\nprivate Long id;\n// Good for: Oracle, PostgreSQL\n// Benefit: ID available before insert (better for batch)"
                                                },
                                                {
                                                    name: "UUID (Recommended for distributed systems):-\n\n@Id\n@GeneratedValue(generator=\"UUID\")\n@GenericGenerator(name=\"UUID\", strategy=\"org.hibernate.id.UUIDGenerator\")\nprivate String id;"
                                                },
                                                { name: "AUTO (Let JPA choose based on database)" }
                                            ]
                                        },
                                        {
                                            name: "@Column Annotation",
                                            children: [
                                                { name: "\"Customize column properties\"" },
                                                {
                                                    name: "Parameters:-\n\nname: \"user_name\" (custom column name)\nnullable: false (NOT NULL constraint)\nlength: 100 (VARCHAR length)\nunique: true (UNIQUE constraint)\ncolumnDefinition: \"VARCHAR(200) NOT NULL\" (raw SQL)\nupdatable: false (cannot modify after creation)\ninsertable: false (cannot insert value)"
                                                },
                                                {
                                                    name: "Ex:-\n\n@Column(name=\"email_address\", nullable=false, unique=true, length=255)\nprivate String email;\n\n@Column(updatable=false) // Created date never changes\nprivate LocalDateTime createdAt;"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@ManyToOne Relationship",
                                            children: [
                                                { name: "\"Multiple child entities to one parent entity (N:1)\"" },
                                                { name: "Child table contains foreign key to parent" },
                                                { name: "Always use FetchType.LAZY to prevent N+1 queries" },
                                                {
                                                    name: "Ex:-\n\n@Entity\npublic class Post {\n    @Id\n    @GeneratedValue\n    private Long id;\n    \n    private String title;\n    \n    @ManyToOne(fetch=FetchType.LAZY) // LAZY: load only when accessed\n    @JoinColumn(name=\"user_id\", nullable=false)\n    private User author;\n}\n\n// Result: posts table has user_id column (FK)"
                                                },
                                                { name: "@JoinColumn: Specifies foreign key column name" },
                                                { name: "Cascade: PERSIST (save parent → save child), REMOVE (delete parent → delete child)" },
                                                { name: "WARNING: EAGER loading causes N+1 problem (join parent for each child)" }
                                            ]
                                        },
                                        {
                                            name: "@OneToMany Relationship",
                                            children: [
                                                { name: "\"One parent entity to multiple child entities (1:N)\"" },
                                                { name: "Parent has collection of children (List, Set)" },
                                                { name: "Inverse side of @ManyToOne (usually on parent)" },
                                                {
                                                    name: "Ex:-\n\n@Entity\npublic class User {\n    @Id\n    @GeneratedValue\n    private Long id;\n    \n    private String name;\n    \n    @OneToMany(mappedBy=\"author\", fetch=FetchType.LAZY, cascade=CascadeType.ALL, orphanRemoval=true)\n    private List<Post> posts = new ArrayList<>();\n}\n\n// Result: No new column in database (FK in posts table)\n// mappedBy: Points to @ManyToOne field in child"
                                                },
                                                { name: "mappedBy: Which field in child entity owns the relationship" },
                                                { name: "orphanRemoval=true: Delete child if removed from parent's collection" },
                                                { name: "CascadeType: Define what operations propagate from parent to children" }
                                            ]
                                        },
                                        {
                                            name: "@ManyToMany Relationship",
                                            children: [
                                                { name: "\"Multiple entities related to multiple entities (M:N)\"" },
                                                { name: "Requires join/junction table to map both sides" },
                                                { name: "Can be bidirectional or unidirectional" },
                                                {
                                                    name: "Ex (Student-Course):-\n\n@Entity\npublic class Student {\n    @Id\n    @GeneratedValue\n    private Long id;\n    \n    private String name;\n    \n    @ManyToMany(fetch=FetchType.LAZY)\n    @JoinTable(\n        name=\"student_course\",\n        joinColumns=@JoinColumn(name=\"student_id\"),\n        inverseJoinColumns=@JoinColumn(name=\"course_id\")\n    )\n    private List<Course> courses = new ArrayList<>();\n}\n\n@Entity\npublic class Course {\n    @Id\n    @GeneratedValue\n    private Long id;\n    \n    private String title;\n    \n    @ManyToMany(mappedBy=\"courses\", fetch=FetchType.LAZY)\n    private List<Student> students = new ArrayList<>();\n}\n\n// Result: Junction table (student_course) created automatically"
                                                },
                                                { name: "@JoinTable: Specifies junction table details" },
                                                { name: "mappedBy: On inverse side (reduces redundancy)" },
                                                { name: "Caveat: Adding extra columns to junction table requires separate @Entity" }
                                            ]
                                        },
                                        {
                                            name: "@OneToOne Relationship",
                                            children: [
                                                { name: "\"One entity related to exactly one other entity (1:1)\"" },
                                                { name: "Can be owning or inverse side" },
                                                {
                                                    name: "Ex (User-Profile):-\n\n@Entity\npublic class User {\n    @Id\n    @GeneratedValue\n    private Long id;\n    \n    private String name;\n    \n    @OneToOne(fetch=FetchType.LAZY, cascade=CascadeType.ALL)\n    @JoinColumn(name=\"profile_id\")\n    private UserProfile profile;\n}\n\n@Entity\npublic class UserProfile {\n    @Id\n    @GeneratedValue\n    private Long id;\n    \n    private String bio;\n    \n    @OneToOne(mappedBy=\"profile\")\n    private User user;\n}"
                                                },
                                                { name: "Owning side: Contains @JoinColumn (users table has profile_id)" },
                                                { name: "Inverse side: Uses mappedBy" }
                                            ]
                                        },
                                        {
                                            name: "CascadeType Options",
                                            children: [
                                                { name: "PERSIST: Parent save → Child save" },
                                                { name: "MERGE: Parent update → Child merge" },
                                                { name: "REMOVE: Parent delete → Child delete" },
                                                { name: "REFRESH: Parent refresh → Child refresh" },
                                                { name: "DETACH: Parent detach → Child detach" },
                                                { name: "ALL: All above operations" },
                                                { name: "Use carefully: REMOVE can accidentally delete related data" },
                                                {
                                                    name: "Ex:-\n\n@OneToMany(cascade=CascadeType.ALL, orphanRemoval=true)\nprivate List<Comment> comments;\n// Deleting post → auto-delete all comments"
                                                }
                                            ]
                                        },
                                        {
                                            name: "FetchType (CRITICAL for Performance)",
                                            children: [
                                                {
                                                    name: "EAGER (Default for @ManyToOne, @OneToOne)",
                                                    "children": [
                                                        { name: "Load related data immediately (INNER JOIN)" },
                                                        { name: "Pros: Data available, no lazy loading exception" },
                                                        { name: "Cons: Multiple queries or expensive JOIN, N+1 problem" },
                                                        { name: "Causes N+1: SELECT users (1 query) + SELECT profile for each user (N queries)" }
                                                    ]
                                                },
                                                {
                                                    name: "LAZY (Default for @OneToMany, @ManyToMany)",
                                                    "children": [
                                                        { name: "Load related data only when accessed (PROXY)" },
                                                        { name: "Pros: Faster initial query, only load needed data" },
                                                        { name: "Cons: LazyInitializationException if accessed outside transaction, requires active session" },
                                                        { name: "Best practice: Use LAZY for all relationships, join explicitly when needed" }
                                                    ]
                                                },
                                                {
                                                    name: "LazyInitializationException Prevention:-\n\n// Problem:\nUser user = userRepository.findById(1L);\nuser.getPosts(); // Session closed → LazyInitializationException\n\n// Solution 1: Eager fetch (bad - N+1)\n@ManyToOne(fetch=FetchType.EAGER)\n\n// Solution 2: @Transactional (keep session open)\n@Transactional\nUser user = userRepository.findById(1L);\nuser.getPosts(); // OK\n\n// Solution 3: JOIN FETCH\n@Query(\"SELECT DISTINCT u FROM User u LEFT JOIN FETCH u.posts WHERE u.id = :id\")\nUser findByIdWithPosts(@Param(\"id\") Long id);\n\n// Solution 4: Entity Graph\n@EntityGraph(attributePaths = {\"posts\"})\nUser findById(Long id);"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Repository Pattern",
                                    children: [
                                        {
                                            name: "CrudRepository<T, ID>",
                                            children: [
                                                { name: "\"Basic CRUD operations interface\"" },
                                                { name: "T: Entity type, ID: Primary key type" },
                                                {
                                                    name: "Methods:-\n\nsave(T): Save/update entity, returns saved entity\nsaveAll(Iterable<T>): Batch save\nfindById(ID): Get by PK (Optional<T>)\nfindAll(): Get all (Iterable<T>)\ncount(): Total records\nexists(ID): Check existence\ndelete(T): Delete entity\ndeleteById(ID): Delete by PK\ndeleteAll(): Delete all"
                                                },
                                                {
                                                    name: "Ex:-\n\n@Repository\npublic interface UserRepository extends CrudRepository<User, Long> {\n}\n\n// Usage:\nUser user = new User(\"John\", \"john@example.com\");\nuserRepository.save(user); // Insert\n\nOptional<User> found = userRepository.findById(1L);\nfound.ifPresent(u -> System.out.println(u.getName()));\n\nuserRepository.deleteById(1L); // Delete"
                                                },
                                                { name: "Optional: Returned by findById (no null checks needed)" }
                                            ]
                                        },
                                        {
                                            name: "PagingAndSortingRepository",
                                            children: [
                                                { name: "\"Extends CrudRepository with pagination and sorting\"" },
                                                { name: "findAll(Pageable pageable): Page<T> with pagination info" },
                                                { name: "Pageable: Encapsulates page number, size, sort" },
                                                {
                                                    name: "Ex:-\n\n@Repository\npublic interface UserRepository extends PagingAndSortingRepository<User, Long> {\n}\n\n// Usage:\nPageable pageable = PageRequest.of(0, 10, Sort.by(\"name\").ascending());\nPage<User> page = userRepository.findAll(pageable);\n\npage.getContent(); // List<User>\npage.getTotalElements(); // Total records\npage.getTotalPages(); // Total pages\npage.hasNext(); // More pages?\npage.getNumber(); // Current page (0-indexed)"
                                                },
                                                { name: "Sort: Sort.by(\"name\").ascending() or .descending()" },
                                                { name: "Multiple sorts: Sort.by(Order.asc(\"name\"), Order.desc(\"createdAt\"))" }
                                            ]
                                        },
                                        {
                                            name: "@Query Annotation",
                                            children: [
                                                { name: "\"Write custom JPQL or SQL queries\"" },
                                                { name: "Useful: Complex logic, aggregations, subqueries" },
                                                {
                                                    name: "JPQL (Object-oriented SQL):-\n\n@Query(\"SELECT u FROM User u WHERE u.name = :name\")\nUser findByName(@Param(\"name\") String name);\n\n@Query(\"SELECT u FROM User u WHERE u.age > :age AND u.city = :city\")\nList<User> findByAgeAndCity(@Param(\"age\") int age, @Param(\"city\") String city);\n\n@Query(\"SELECT new map(u.id as id, u.name as name, COUNT(p) as postCount) \" +\n       \"FROM User u LEFT JOIN u.posts p GROUP BY u.id\")\nList<Map<String, Object>> getUsersWithPostCount();"
                                                },
                                                {
                                                    name: "Native SQL (Database-specific):-\n\n@Query(value=\"SELECT * FROM users WHERE age > ? ORDER BY name LIMIT ?\", nativeQuery=true)\nList<User> findOldestUsers(int age, int limit);\n\n@Query(value=\"SELECT * FROM users WHERE created_at > :date\", nativeQuery=true)\nList<User> findRecentUsers(@Param(\"date\") LocalDateTime date);"
                                                },
                                                { name: "@Param: Named parameter binding (prevents SQL injection)" },
                                                { name: "Positional (?1, ?2): Legacy, less readable" }
                                            ]
                                        },
                                        {
                                            name: "Query Method Naming Convention",
                                            children: [
                                                { name: "\"Auto-generate queries from method names\"" },
                                                { name: "Spring parses method name and creates query" },
                                                {
                                                    name: "Patterns:-\n\nfindBy<Property>(...): SELECT * WHERE property = ?\nfindBy<Prop1>And<Prop2>(...): WHERE prop1 = ? AND prop2 = ?\nfindBy<Property>GreaterThan(...): WHERE property > ?\nfindBy<Property>LessThan(...): WHERE property < ?\nfindBy<Property>Between(...): WHERE property BETWEEN ? AND ?\nfindBy<Property>In(Collection): WHERE property IN (...)\nfindBy<Property>StartingWith(String): WHERE property LIKE 'prefix%'\nfindBy<Property>EndingWith(String): WHERE property LIKE '%suffix'\nfindBy<Property>Containing(String): WHERE property LIKE '%substr%'\nexistsBy<Property>(...): Check existence\ncountBy<Property>(...): Count records"
                                                },
                                                {
                                                    name: "Ex:-\n\npublic interface UserRepository extends CrudRepository<User, Long> {\n    User findByEmail(String email);\n    List<User> findByAge(int age);\n    List<User> findByAgeGreaterThan(int age);\n    List<User> findByAgeGreaterThanAndCityEquals(int age, String city);\n    List<User> findByAgeBetween(int minAge, int maxAge);\n    List<User> findByNameContaining(String substring);\n    boolean existsByEmail(String email);\n    long countByCity(String city);\n}"
                                                },
                                                { name: "Limitations: Complex queries → use @Query" },
                                                { name: "Case-sensitive: Property names must match entity fields" }
                                            ]
                                        },
                                        {
                                            name: "Update & Delete Queries",
                                            children: [
                                                { name: "@Modifying: Required for INSERT/UPDATE/DELETE queries" },
                                                { name: "@Transactional: Required with @Modifying" },
                                                {
                                                    name: "Ex:-\n\n@Modifying\n@Transactional\n@Query(\"UPDATE User u SET u.status = 'ACTIVE' WHERE u.id = :id\")\nint activateUser(@Param(\"id\") Long id);\n\n@Modifying\n@Transactional\n@Query(\"DELETE FROM User u WHERE u.createdAt < :date\")\nint deleteOldUsers(@Param(\"date\") LocalDateTime date);"
                                                },
                                                { name: "Return value: Number of rows affected" },
                                                { name: "Bulk operations: No lazy loading, direct DB update" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Transactions",
                                    children: [
                                        {
                                            name: "@Transactional Annotation",
                                            children: [
                                                { name: "\"Mark method/class as transaction boundary\"" },
                                                { name: "Spring creates transaction at method start, commits on success, rollbacks on exception" },
                                                { name: "Can be applied to: service method (common), repository, controller (less common)" },
                                                {
                                                    name: "Ex:-\n\n@Service\npublic class UserService {\n    @Autowired\n    private UserRepository userRepository;\n    \n    @Autowired\n    private EmailService emailService;\n    \n    @Transactional\n    public User registerUser(CreateUserRequest req) {\n        // All DB operations in single transaction\n        User user = new User(req.getName(), req.getEmail());\n        userRepository.save(user); // Queued (not executed yet)\n        \n        emailService.sendWelcomeEmail(user.getEmail()); // Throws exception\n        // Transaction rolls back → user NOT saved\n        \n        return user;\n    }\n}"
                                                },
                                                { name: "Automatic rollback: Any RuntimeException triggers rollback" },
                                                { name: "Checked exceptions: Don't rollback by default (use rollbackFor)" }
                                            ]
                                        },
                                        {
                                            name: "readOnly=true",
                                            children: [
                                                { name: "\"Optimize transaction for read-only operations\"" },
                                                { name: "Database can apply optimizations (no write lock)" },
                                                { name: "Prevents accidental modifications (some DBs enforce)" },
                                                {
                                                    name: "Ex:-\n\n@Transactional(readOnly=true)\npublic List<User> getAllUsers() {\n    return userRepository.findAll(); // Optimized for read\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Propagation Behavior",
                                            children: [
                                                {
                                                    name: "REQUIRED (Default):-\n\nUse existing transaction if active, else create new\nMethod1 → Transaction A\nMethod2 (REQUIRED) → Reuse Transaction A"
                                                },
                                                {
                                                    name: "REQUIRES_NEW:-\n\nAlways create new transaction (suspend existing)\nMethod1 → Transaction A\nMethod2 (REQUIRES_NEW) → New Transaction B (A suspended)\nIf B fails, A continues (independent)"
                                                },
                                                {
                                                    name: "SUPPORTS:-\n\nUse existing transaction if active, else non-transactional\nUseful for optional transactions"
                                                },
                                                {
                                                    name: "NOT_SUPPORTED:-\n\nExecute non-transactionally (suspend if active)\nFor operations that shouldn't be in transaction"
                                                },
                                                {
                                                    name: "MANDATORY:-\n\nRequires active transaction (throw error if none)\nFor methods that MUST run in transaction"
                                                },
                                                { name: "Use case (REQUIRES_NEW): Logging should not rollback main transaction" }
                                            ]
                                        },
                                        {
                                            name: "Isolation Levels",
                                            children: [
                                                { name: "DEFAULT: Use database default (usually READ_COMMITTED)" },
                                                { name: "READ_UNCOMMITTED: Lowest isolation (dirty reads possible)" },
                                                { name: "READ_COMMITTED: Only read committed data (most common)" },
                                                { name: "REPEATABLE_READ: Consistent view throughout transaction" },
                                                { name: "SERIALIZABLE: Highest isolation (slowest)" },
                                                {
                                                    name: "Ex:-\n\n@Transactional(isolation=Isolation.REPEATABLE_READ)\npublic Order placeOrder(OrderRequest req) {\n    // Ensures consistent read of inventory\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "rollbackFor & noRollbackFor",
                                            children: [
                                                { name: "\"Control which exceptions trigger rollback\"" },
                                                { name: "By default: RuntimeException → rollback, Checked Exception → commit" },
                                                {
                                                    name: "Ex (Rollback on Checked Exception):-\n\n@Transactional(rollbackFor=PaymentException.class)\npublic void processPayment(Payment payment) throws PaymentException {\n    // If PaymentException thrown → rollback\n    paymentGateway.charge(payment);\n}"
                                                },
                                                {
                                                    name: "Ex (Don't rollback on specific Exception):-\n\n@Transactional(noRollbackFor=DuplicateUserException.class)\npublic User registerUser(CreateUserRequest req) {\n    // If user exists → DuplicateUserException\n    // Transaction commits (user saved but with error)\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Transaction Pitfalls",
                                            children: [
                                                {
                                                    name: "1. @Transactional on same class method call:-\n\n@Service\npublic class UserService {\n    public void methodA() {\n        methodB(); // Does NOT create transaction (internal call)\n    }\n    \n    @Transactional\n    public void methodB() {\n        // No transaction because called internally\n    }\n}\n\n// Solution: Call via injected repository or separate class"
                                                },
                                                {
                                                    name: "2. Long-running transactions:-\n\n@Transactional\npublic void generateReport() {\n    // Query 1: 5 seconds\n    // Query 2: 10 seconds\n    // Lock held entire 15 seconds → Blocks other users\n}\n\n// Solution: Process in batches, keep transaction short"
                                                },
                                                {
                                                    name: "3. N+1 Queries in transaction:-\n\n@Transactional\npublic List<User> getAllUsersWithPosts() {\n    List<User> users = userRepository.findAll(); // Query 1\n    users.forEach(u -> u.getPosts().size()); // N more queries!\n}\n\n// Solution: Use JOIN FETCH or Entity Graph"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Spring Security",
                            children: [
                                {
                                    name: "Authentication",
                                    children: [
                                        {
                                            name: "PasswordEncoder",
                                            children: [
                                                { name: "\"Encode passwords for secure storage\"" },
                                                { name: "Never store plaintext passwords" },
                                                {
                                                    name: "BCryptPasswordEncoder (Recommended):-\n\n@Bean\npublic PasswordEncoder passwordEncoder() {\n    return new BCryptPasswordEncoder(12); // Strength parameter (4-31, default 10)\n}\n\n// Usage:\nString plainPassword = \"myPassword123\";\nString encoded = passwordEncoder().encode(plainPassword);\n// Encoded: $2a$10$slYQmyNdGzin/eexlxAcCOYvFH7YLJqHN8/LewKgK2K6TtxMQnqAm\n\n// Verify:\nboolean matches = passwordEncoder().matches(plainPassword, encoded);\n// matches = true\n\n// Note: Each encoding produces different hash (due to random salt)"
                                                },
                                                {
                                                    name: "Other Encoders:-\n\nArgon2PasswordEncoder: Modern, recommended, memory-hard\nPbkdf2PasswordEncoder: PBKDF2 (older, still acceptable)\nSCryptPasswordEncoder: Scrypt algorithm\nNoOpPasswordEncoder: No encoding (development only, NEVER production)"
                                                },
                                                { name: "Strength parameter: Higher = slower but more secure (12-15 recommended)" },
                                                { name: "Salt: Automatically generated, prevents rainbow table attacks" }
                                            ]
                                        },
                                        {
                                            name: "UserDetailsService",
                                            children: [
                                                { name: "\"Load user authentication details from source (DB, LDAP, etc)\"" },
                                                { name: "Implement loadUserByUsername(String username) → UserDetails" },
                                                {
                                                    name: "Ex:-\n\n@Service\npublic class CustomUserDetailsService implements UserDetailsService {\n    @Autowired\n    private UserRepository userRepository;\n    \n    @Autowired\n    private PasswordEncoder passwordEncoder;\n    \n    @Override\n    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {\n        User user = userRepository.findByEmail(email)\n            .orElseThrow(() -> new UsernameNotFoundException(\"User not found: \" + email));\n        \n        return User.builder()\n            .username(user.getEmail())\n            .password(user.getPassword()) // Should be encoded\n            .authorities(getAuthorities(user))\n            .accountExpired(false)\n            .accountLocked(false)\n            .credentialsExpired(false)\n            .disabled(false)\n            .build();\n    }\n    \n    private Collection<? extends GrantedAuthority> getAuthorities(User user) {\n        return user.getRoles().stream()\n            .map(role -> new SimpleGrantedAuthority(\"ROLE_\" + role.getName()))\n            .collect(Collectors.toList());\n    }\n}"
                                                },
                                                { name: "Called by AuthenticationManager during login" },
                                                { name: "UserDetails: Spring's interface containing user info + authorities" }
                                            ]
                                        },
                                        {
                                            name: "AuthenticationManager",
                                            children: [
                                                { name: "\"Main entry point for authentication\"" },
                                                { name: "authenticate(Authentication) → Authenticated token or exception" },
                                                { name: "Default: ProviderManager (delegates to AuthenticationProviders)" },
                                                {
                                                    name: "Ex (Manual Authentication):-\n\n@RestController\n@RequestMapping(\"/auth\")\npublic class AuthController {\n    @Autowired\n    private AuthenticationManager authenticationManager;\n    \n    @PostMapping(\"/login\")\n    public ResponseEntity<?> login(@RequestBody LoginRequest req) {\n        try {\n            Authentication auth = authenticationManager.authenticate(\n                new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword())\n            );\n            SecurityContextHolder.getContext().setAuthentication(auth);\n            // Generate JWT token\n            return ResponseEntity.ok(new LoginResponse(token));\n        } catch (BadCredentialsException e) {\n            return ResponseEntity.status(401).body(\"Invalid email or password\");\n        }\n    }\n}"
                                                },
                                                { name: "SecurityContextHolder: Stores authenticated principal" },
                                                { name: "Throws: BadCredentialsException, UsernameNotFoundException, DisabledException" }
                                            ]
                                        },
                                        {
                                            name: "Authentication Interface",
                                            children: [
                                                { name: "\"Represents security principal (authenticated user)\"" },
                                                { name: "Properties: principal (user), credentials (password, cleared after auth), authorities (roles/permissions), details (IP, session)" },
                                                {
                                                    name: "Ex:-\n\nAuthentication auth = SecurityContextHolder.getContext().getAuthentication();\nString username = auth.getName(); // Principal name\nCollection<? extends GrantedAuthority> authorities = auth.getAuthorities(); // Roles\nboolean isAuthenticated = auth.isAuthenticated();"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Authorization",
                                    children: [
                                        {
                                            name: "@Secured Annotation",
                                            children: [
                                                { name: "\"Method-level authorization by role\"" },
                                                { name: "Requires @EnableGlobalMethodSecurity(securedEnabled=true)" },
                                                { name: "Simple but limited (only role-based)" },
                                                {
                                                    name: "Ex:-\n\n@Configuration\n@EnableGlobalMethodSecurity(securedEnabled=true)\npublic class SecurityConfig { }\n\n@Service\npublic class UserService {\n    @Secured(\"ROLE_ADMIN\")\n    public void deleteUser(Long id) {\n        // Only admins can call\n    }\n    \n    @Secured({\"ROLE_ADMIN\", \"ROLE_MODERATOR\"})\n    public void suspendUser(Long id) {\n        // Admins OR moderators\n    }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@PreAuthorize (Recommended)",
                                            children: [
                                                { name: "\"SpEL (Spring Expression Language) based authorization\"" },
                                                { name: "Requires @EnableGlobalMethodSecurity(prePostEnabled=true)" },
                                                { name: "Very flexible (roles, permissions, custom logic)" },
                                                {
                                                    name: "Ex:-\n\n@Configuration\n@EnableGlobalMethodSecurity(prePostEnabled=true)\npublic class SecurityConfig { }\n\n@Service\npublic class UserService {\n    // Role-based\n    @PreAuthorize(\"hasRole('ADMIN')\")\n    public void deleteUser(Long id) { }\n    \n    // Multiple roles (OR)\n    @PreAuthorize(\"hasRole('ADMIN') or hasRole('MODERATOR')\")\n    public void suspendUser(Long id) { }\n    \n    // Custom expression\n    @PreAuthorize(\"@userService.isOwner(#id, authentication.principal.id)\")\n    public void updateProfile(Long id, ProfileRequest req) {\n        // Only owner can update own profile\n    }\n    \n    // Permission-based\n    @PreAuthorize(\"hasPermission(#id, 'User', 'DELETE')\")\n    public void deleteUserAdvanced(Long id) { }\n}"
                                                },
                                                {
                                                    name: "Common SpEL Expressions:-\n\nhasRole('ADMIN'): User has specific role\nhasAnyRole('ADMIN','USER'): User has any of roles\nhasPermission(#id, 'User', 'DELETE'): Custom permission checker\nisAuthenticated(): User is authenticated\nisAnonymous(): User is anonymous\nprincipal: Current user object\nauthentication: Current authentication token\n#id, #req: Method parameters (use # prefix)"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@PostAuthorize",
                                            children: [
                                                { name: "\"Check authorization AFTER method execution\"" },
                                                { name: "Can access method return value (returnValue)" },
                                                { name: "Less common (usually preauthorize is sufficient)" },
                                                {
                                                    name: "Ex:-\n\n@PostAuthorize(\"returnValue.author.id == principal.id\")\npublic Post getPost(Long id) {\n    // Only return if current user is author\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "GrantedAuthority & Roles",
                                            children: [
                                                { name: "\"Represents permission or role\"" },
                                                { name: "GrantedAuthority: Authority name (\"ROLE_ADMIN\", \"READ\", \"WRITE\")" },
                                                { name: "SimpleGrantedAuthority: Simple implementation with single string" },
                                                {
                                                    name: "Roles vs Permissions:-\n\nRoles: \"ADMIN\", \"USER\", \"MODERATOR\" (coarse-grained)\nPermissions: \"USER_READ\", \"USER_WRITE\", \"USER_DELETE\" (fine-grained)\nBest Practice: Assign roles to users, roles grant permissions"
                                                },
                                                {
                                                    name: "Ex:-\n\n// User has roles\nuser.setRoles([\"ADMIN\", \"MODERATOR\"]);\n\n// Roles have permissions\nROLE_ADMIN → [\"USER_READ\", \"USER_WRITE\", \"USER_DELETE\", \"USER_MANAGE\"]\nROLE_USER → [\"USER_READ\", \"POST_WRITE\", \"COMMENT_WRITE\"]"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "JWT Integration",
                                    children: [
                                        {
                                            name: "JwtTokenProvider",
                                            children: [
                                                { name: "\"Generate and validate JWT tokens\"" },
                                                { name: "Create token with user info, sign with secret, validate on each request" },
                                                {
                                                    name: "Ex:-\n\n@Component\npublic class JwtTokenProvider {\n    @Value(\"${app.jwtSecret}\")\n    private String jwtSecret;\n    \n    @Value(\"${app.jwtExpirationMs}\")\n    private long jwtExpirationMs;\n    \n    public String generateToken(UserDetails userDetails) {\n        Map<String, Object> claims = new HashMap<>();\n        claims.put(\"roles\", userDetails.getAuthorities());\n        \n        return Jwts.builder()\n            .setClaims(claims)\n            .setSubject(userDetails.getUsername())\n            .setIssuedAt(new Date())\n            .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))\n            .signWith(SignatureAlgorithm.HS512, jwtSecret)\n            .compact();\n    }\n    \n    public boolean validateToken(String token) {\n        try {\n            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);\n            return true;\n        } catch (JwtException | IllegalArgumentException e) {\n            return false;\n        }\n    }\n    \n    public String getUsernameFromToken(String token) {\n        return Jwts.parser().setSigningKey(jwtSecret)\n            .parseClaimsJws(token)\n            .getBody()\n            .getSubject();\n    }\n}"
                                                },
                                                { name: "Library: io.jsonwebtoken:jjwt for JWT handling" },
                                                { name: "Payload: Can store user ID, roles, permissions, custom claims" }
                                            ]
                                        },
                                        {
                                            name: "JwtAuthenticationFilter",
                                            children: [
                                                { name: "\"Extract and validate JWT from request\"" },
                                                { name: "Runs on every request before authentication" },
                                                {
                                                    name: "Ex:-\n\npublic class JwtAuthenticationFilter extends OncePerRequestFilter {\n    @Autowired\n    private JwtTokenProvider tokenProvider;\n    \n    @Autowired\n    private UserDetailsService userDetailsService;\n    \n    @Override\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)\n            throws ServletException, IOException {\n        try {\n            String jwt = extractTokenFromRequest(request);\n            \n            if (jwt != null && tokenProvider.validateToken(jwt)) {\n                String username = tokenProvider.getUsernameFromToken(jwt);\n                UserDetails userDetails = userDetailsService.loadUserByUsername(username);\n                \n                UsernamePasswordAuthenticationToken authentication = \n                    new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());\n                \n                SecurityContextHolder.getContext().setAuthentication(authentication);\n            }\n        } catch (Exception e) {\n            logger.error(\"Cannot set user authentication: {}\", e);\n        }\n        \n        filterChain.doFilter(request, response);\n    }\n    \n    private String extractTokenFromRequest(HttpServletRequest request) {\n        String bearerToken = request.getHeader(\"Authorization\");\n        if (bearerToken != null && bearerToken.startsWith(\"Bearer \")) {\n            return bearerToken.substring(7);\n        }\n        return null;\n    }\n}\n\n// Register filter in SecurityConfig\n@Configuration\npublic class SecurityConfig {\n    @Bean\n    public JwtAuthenticationFilter jwtAuthenticationFilter() {\n        return new JwtAuthenticationFilter();\n    }\n    \n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);\n        return http.build();\n    }\n}"
                                                },
                                                { name: "Runs on EVERY request (before Spring Security filters)" },
                                                { name: "Sets SecurityContext if token valid" }
                                            ]
                                        },
                                        {
                                            name: "UserPrincipal",
                                            children: [
                                                { name: "\"Custom principal object containing user details + JWT claims\"" },
                                                { name: "Extends or wraps UserDetails" },
                                                {
                                                    name: "Ex:-\n\npublic class UserPrincipal implements UserDetails {\n    private Long id;\n    private String email;\n    private String password;\n    private Collection<? extends GrantedAuthority> authorities;\n    \n    public static UserPrincipal create(User user) {\n        List<GrantedAuthority> authorities = user.getRoles().stream()\n            .map(role -> new SimpleGrantedAuthority(\"ROLE_\" + role.getName()))\n            .collect(Collectors.toList());\n        \n        return new UserPrincipal(\n            user.getId(),\n            user.getEmail(),\n            user.getPassword(),\n            authorities\n        );\n    }\n    \n    @Override\n    public String getUsername() { return email; }\n    \n    @Override\n    public Collection<? extends GrantedAuthority> getAuthorities() { return authorities; }\n    \n    // Other UserDetails methods...\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Token Refresh Mechanism",
                                            children: [
                                                { name: "\"Issue short-lived access token + long-lived refresh token\"" },
                                                { name: "Access token: 15 minutes expiry (frequent requests)" },
                                                { name: "Refresh token: 7 days expiry (stored in DB or httpOnly cookie)" },
                                                {
                                                    name: "Ex (Token Refresh Endpoint):-\n\n@PostMapping(\"/auth/refresh\")\npublic ResponseEntity<?> refreshToken(@RequestBody TokenRefreshRequest req) {\n    String refreshToken = req.getRefreshToken();\n    \n    // Validate refresh token\n    if (!tokenProvider.validateRefreshToken(refreshToken)) {\n        return ResponseEntity.status(401).body(\"Invalid or expired refresh token\");\n    }\n    \n    String username = tokenProvider.getUsernameFromRefreshToken(refreshToken);\n    UserDetails userDetails = userDetailsService.loadUserByUsername(username);\n    \n    // Generate new access token\n    String newAccessToken = tokenProvider.generateToken(userDetails);\n    \n    return ResponseEntity.ok(new TokenResponse(newAccessToken, refreshToken));\n}\n\n// Store refresh token in DB for revocation\n@Entity\npublic class RefreshToken {\n    @Id\n    @GeneratedValue\n    private Long id;\n    \n    @ManyToOne\n    private User user;\n    \n    private String token; // Stored refresh token\n    \n    private LocalDateTime expiryDate;\n    \n    private LocalDateTime createdAt;\n}"
                                                },
                                                { name: "Security benefit: If access token leaked, can't create new tokens" },
                                                { name: "Refresh token revocation: Delete from DB → access token no longer refreshable" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "CORS & CSRF",
                                    children: [
                                        {
                                            name: "@CrossOrigin",
                                            children: [
                                                { name: "\"Enable CORS (Cross-Origin Resource Sharing) for specific endpoints\"" },
                                                { name: "Allows browser requests from different domains" },
                                                {
                                                    name: "Ex:-\n\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @GetMapping\n    @CrossOrigin(origins=\"http://localhost:3000\", methods=RequestMethod.GET)\n    public List<User> getUsers() {\n        return userService.findAll();\n    }\n    \n    @PostMapping\n    @CrossOrigin(origins={\"http://localhost:3000\", \"http://localhost:8080\"})\n    public User createUser(@RequestBody CreateUserRequest req) {\n        return userService.create(req);\n    }\n}"
                                                },
                                                { name: "origins: Which domains allowed (empty = all)" },
                                                { name: "methods: Allowed HTTP methods (GET, POST, etc)" },
                                                { name: "allowedHeaders: Which request headers allowed" },
                                                { name: "exposedHeaders: Which response headers exposed to client" },
                                                { name: "credentials: Allow cookies/credentials (default false)" }
                                            ]
                                        },
                                        {
                                            name: "Global CORS Configuration",
                                            children: [
                                                { name: "\"Configure CORS for entire application\"" },
                                                { name: "Preferred over @CrossOrigin on every method" },
                                                {
                                                    name: "Ex:-\n\n@Configuration\npublic class CorsConfig {\n    @Bean\n    public WebMvcConfigurer corsConfigurer() {\n        return new WebMvcConfigurer() {\n            @Override\n            public void addCorsMappings(CorsRegistry registry) {\n                registry.addMapping(\"/api/**\")\n                    .allowedOrigins(\"http://localhost:3000\", \"http://localhost:8080\")\n                    .allowedMethods(\"GET\", \"POST\", \"PUT\", \"DELETE\")\n                    .allowedHeaders(\"*\")\n                    .exposedHeaders(\"Authorization\")\n                    .allowCredentials(true)\n                    .maxAge(3600); // Preflight cache 1 hour\n            }\n        };\n    }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "CSRF Protection",
                                            children: [
                                                { name: "\"Prevent Cross-Site Request Forgery attacks\"" },
                                                { name: "Enabled by default in Spring Security" },
                                                { name: "Validates CSRF token in POST/PUT/DELETE requests" },
                                                { name: "Disable for stateless APIs: http.csrf().disable()" },
                                                {
                                                    name: "Ex:-\n\n@Configuration\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf().disable() // OK for REST APIs (stateless)\n            .authorizeRequests()\n                .antMatchers(\"/api/public/**\").permitAll()\n                .antMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n                .anyRequest().authenticated()\n            .and()\n            .httpBasic();\n        return http.build();\n    }\n}"
                                                },
                                                { name: "For form-based apps: Keep CSRF enabled, token in forms" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Advanced Spring Features",
                            children: [
                                {
                                    name: "Aspect-Oriented Programming (AOP)",
                                    children: [
                                        {
                                            name: "@Aspect Annotation",
                                            children: [
                                                { name: "\"Mark class as aspect (cross-cutting concern)\"" },
                                                { name: "Separates concerns: logging, security, transactions, caching" },
                                                { name: "Advice executed before, after, or around join points" },
                                                {
                                                    name: "Key Concepts:-\n\nJoinPoint: Point in code (method execution, field access)\nPointcut: Expression selecting join points (WHERE to apply advice)\nAdvice: Action taken (WHAT to do at join points)\nWeaving: Combining aspects with target objects"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@Pointcut",
                                            children: [
                                                { name: "\"Define where aspects apply (method/class matching)\"" },
                                                { name: "Reusable pointcut expression" },
                                                {
                                                    name: "Ex:-\n\n@Aspect\n@Component\npublic class LoggingAspect {\n    @Pointcut(\"execution(public * com.example.service.*.*(..))\")\n    public void serviceLayer() { }\n    \n    @Pointcut(\"@annotation(org.springframework.web.bind.annotation.GetMapping)\")\n    public void getEndpoints() { }\n}"
                                                },
                                                {
                                                    name: "Pointcut Syntax:-\n\nexecution(modifiers-pattern? return-type-pattern declaring-type-pattern? method-name-pattern(param-pattern) throws-pattern?)\n\nExamples:\nexecution(public * com.example.service.UserService.*(..)) - Any public method in UserService\nexecution(* com.example.service..*.*(..)) - Any method in any class in service package\n@annotation(Transactional) - Methods annotated with @Transactional\n@within(Component) - Classes annotated with @Component\nwithin(com.example.service..*) - Any method in service package"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@Before",
                                            children: [
                                                { name: "\"Execute before method execution\"" },
                                                { name: "Can't prevent method execution" },
                                                { name: "Access to method parameters" },
                                                {
                                                    name: "Ex:-\n\n@Aspect\n@Component\npublic class ValidationAspect {\n    @Before(\"@annotation(Validated)\")\n    public void validateInput(JoinPoint joinPoint) {\n        Object[] args = joinPoint.getArgs();\n        for (Object arg : args) {\n            if (arg == null) {\n                throw new IllegalArgumentException(\"Null argument not allowed\");\n            }\n        }\n        System.out.println(\"Validating input for \" + joinPoint.getSignature());\n    }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@After",
                                            children: [
                                                { name: "\"Execute after method (success or exception)\"" },
                                                { name: "Always runs (finally block equivalent)" },
                                                { name: "Limited access (no return value)" },
                                                {
                                                    name: "Ex:-\n\n@After(\"execution(* com.example.repository.*.save(..))\")\npublic void logSave(JoinPoint joinPoint) {\n    System.out.println(\"Entity saved: \" + joinPoint.getSignature());\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@AfterReturning",
                                            children: [
                                                { name: "\"Execute after successful method return\"" },
                                                { name: "Access to return value" },
                                                { name: "Doesn't execute if exception thrown" },
                                                {
                                                    name: "Ex:-\n\n@AfterReturning(pointcut=\"execution(* com.example.service.*.find*(..))\" , returning=\"result\")\npublic void logResult(JoinPoint joinPoint, Object result) {\n    System.out.println(joinPoint.getSignature() + \" returned: \" + result);\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@AfterThrowing",
                                            children: [
                                                { name: "\"Execute if exception thrown\"" },
                                                { name: "Access to exception object" },
                                                { name: "Perfect for error logging" },
                                                {
                                                    name: "Ex:-\n\n@AfterThrowing(pointcut=\"execution(* com.example.service.*.*(..))\" , throwing=\"ex\")\npublic void handleException(JoinPoint joinPoint, Exception ex) {\n    logger.error(\"Exception in \" + joinPoint.getSignature() + \": \" + ex.getMessage());\n    // Can re-throw, log, or trigger notification\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@Around (Most Powerful)",
                                            children: [
                                                { name: "\"Wrap entire method execution\"" },
                                                { name: "Can execute before, after, or skip method entirely" },
                                                { name: "Full control over execution flow" },
                                                { name: "Must call joinPoint.proceed() to execute actual method" },
                                                {
                                                    name: "Ex (Performance Monitoring):-\n\n@Around(\"@annotation(Timed)\")\npublic Object measurePerformance(ProceedingJoinPoint joinPoint) throws Throwable {\n    long startTime = System.currentTimeMillis();\n    \n    try {\n        Object result = joinPoint.proceed(); // Execute actual method\n        return result;\n    } finally {\n        long duration = System.currentTimeMillis() - startTime;\n        logger.info(joinPoint.getSignature() + \" took \" + duration + \"ms\");\n    }\n}\n\n// Usage:\n@Service\npublic class UserService {\n    @Timed\n    public User findById(Long id) {\n        // Execution time logged automatically\n    }\n}"
                                                },
                                                {
                                                    name: "Ex (Caching):-\n\n@Around(\"@annotation(Cacheable)\")\npublic Object cacheResult(ProceedingJoinPoint joinPoint) throws Throwable {\n    String key = generateCacheKey(joinPoint);\n    Object cached = cache.get(key);\n    \n    if (cached != null) {\n        return cached; // Skip method, return cached value\n    }\n    \n    Object result = joinPoint.proceed(); // Execute method\n    cache.put(key, result); // Cache result\n    return result;\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Practical Example: Audit Trail",
                                            children: [
                                                {
                                                    name: "Ex:-\n\n@Aspect\n@Component\npublic class AuditAspect {\n    @Autowired\n    private AuditLogRepository auditLogRepository;\n    \n    @Around(\"@annotation(Auditable)\")\n    public Object auditOperation(ProceedingJoinPoint joinPoint) throws Throwable {\n        String methodName = joinPoint.getSignature().getName();\n        Object[] args = joinPoint.getArgs();\n        UserPrincipal user = getCurrentUser();\n        \n        long startTime = System.currentTimeMillis();\n        \n        try {\n            Object result = joinPoint.proceed();\n            \n            AuditLog log = new AuditLog();\n            log.setAction(methodName);\n            log.setUser(user);\n            log.setTimestamp(LocalDateTime.now());\n            log.setDuration(System.currentTimeMillis() - startTime);\n            log.setStatus(\"SUCCESS\");\n            \n            auditLogRepository.save(log);\n            \n            return result;\n        } catch (Exception e) {\n            AuditLog log = new AuditLog();\n            log.setAction(methodName);\n            log.setUser(user);\n            log.setTimestamp(LocalDateTime.now());\n            log.setStatus(\"FAILED\");\n            log.setError(e.getMessage());\n            \n            auditLogRepository.save(log);\n            throw e;\n        }\n    }\n}\n\n// Usage:\n@Service\npublic class UserService {\n    @Auditable\n    public void deleteUser(Long id) {\n        // Audit logged automatically\n    }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "AOP Pitfalls",
                                            children: [
                                                { name: "1. Proxy limitation: AOP doesn't apply to internal method calls (same instance)" },
                                                { name: "2. Performance: Every join point has overhead (proxy method invocation)" },
                                                { name: "3. Debugging: Stack trace includes proxy classes (confusing)" },
                                                { name: "4. Order: Multiple aspects order non-deterministic (use @Order)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Event Handling",
                                    children: [
                                        {
                                            name: "@EventListener",
                                            children: [
                                                { name: "\"Listen for application events\"" },
                                                { name: "Method called when specific event published" },
                                                {
                                                    name: "Ex:-\n\n@Component\npublic class UserEventListener {\n                                    \n    @EventListener\n    public void onUserCreated(UserCreatedEvent event) {\n        User user = event.getUser();\n        System.out.println(\"User created: \" + user.getEmail());\n        // Send welcome email, update analytics, etc\n    }\n    \n    @EventListener\n    public void onUserDeleted(UserDeletedEvent event) {\n        System.out.println(\"User deleted: \" + event.getUserId());\n        // Cleanup, notifications, etc\n    }\n}"
                                                },
                                                { name: "Method parameter type determines event interest" }
                                            ]
                                        },
                                        {
                                            name: "ApplicationEventPublisher",
                                            children: [
                                                { name: "\"Publish custom events\"" },
                                                { name: "Triggers all listeners for that event type" },
                                                {
                                                    name: "Ex:-\n\npublic class UserCreatedEvent extends ApplicationEvent {\n    private User user;\n    \n    public UserCreatedEvent(Object source, User user) {\n        super(source);\n        this.user = user;\n    }\n    \n    public User getUser() { return user; }\n}\n\n@Service\npublic class UserService {\n    @Autowired\n    private ApplicationEventPublisher eventPublisher;\n    \n    public User createUser(CreateUserRequest req) {\n        User user = new User(req.getName(), req.getEmail());\n        userRepository.save(user);\n        \n        // Publish event (triggers listeners)\n        eventPublisher.publishEvent(new UserCreatedEvent(this, user));\n        \n        return user;\n    }\n}"
                                                },
                                                { name: "Decoupling: Publisher doesn't know about listeners" },
                                                { name: "Synchronous: Listeners execute in same thread by default" }
                                            ]
                                        },
                                        {
                                            name: "@TransactionalEventListener",
                                            children: [
                                                { name: "\"Only publish event after transaction commits\"" },
                                                { name: "Prevents race conditions (event listener sees uncommitted data)" },
                                                {
                                                    name: "Ex:-\n\n@Component\npublic class UserEventListener {\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)\n    public void onUserCreated(UserCreatedEvent event) {\n        // Guaranteed: user is already saved to DB\n        String email = event.getUser().getEmail();\n        emailService.sendWelcomeEmail(email); // Safe to send\n    }\n}"
                                                },
                                                { name: "Phases: BEFORE_COMMIT, AFTER_COMMIT, AFTER_ROLLBACK, AFTER_COMPLETION" }
                                            ]
                                        },
                                        {
                                            name: "Async Event Listeners",
                                            children: [
                                                { name: "\"Make listeners execute asynchronously\"" },
                                                { name: "Doesn't block publisher (fire-and-forget)" },
                                                {
                                                    name: "Ex:-\n\n@Component\npublic class EmailEventListener {\n    @EventListener\n    @Async\n    public void onUserCreated(UserCreatedEvent event) {\n        // Runs in thread pool (non-blocking)\n        Thread.sleep(5000); // Slow email sending\n        emailService.send(event.getUser().getEmail());\n    }\n}"
                                                },
                                                { name: "Requires @EnableAsync on @Configuration class" },
                                                { name: "Use case: Email, notifications, analytics (don't block user)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Scheduling",
                                    children: [
                                        {
                                            name: "@EnableScheduling",
                                            children: [
                                                { name: "\"Enable method scheduling in application\"" },
                                                { name: "Added to @Configuration or @SpringBootApplication" },
                                                {
                                                    name: "Ex:-\n\n@SpringBootApplication\n@EnableScheduling\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@Scheduled Annotation",
                                            children: [
                                                { name: "\"Execute method on schedule\"" },
                                                { name: "Multiple scheduling options" },
                                                {
                                                    name: "fixedDelay (milliseconds):-\n\n@Scheduled(fixedDelay = 5000) // 5 second delay between invocations\npublic void generateReport() {\n    System.out.println(\"Generating report...\");\n    // Takes 2 seconds to execute\n    // Next execution: 5 seconds after this one completes\n}"
                                                },
                                                {
                                                    name: "fixedRate (milliseconds):-\n\n@Scheduled(fixedRate = 10000) // Execute every 10 seconds\npublic void checkHealth() {\n    System.out.println(\"Health check...\");\n    // Runs every 10 seconds regardless of how long it takes\n    // Concurrent executions possible if method takes >10 seconds\n}"
                                                },
                                                {
                                                    name: "cron (Cron expression):-\n\n@Scheduled(cron = \"0 0 2 * * *\") // 2 AM daily\npublic void nightly_maintenance() {\n    System.out.println(\"Running nightly job...\");\n}\n\n// Common cron patterns:\n\"0 0 * * * *\" → Every hour at :00\n\"0 */15 * * * *\" → Every 15 minutes\n\"0 0 2 * * MON-FRI\" → 2 AM on weekdays\n\"0 0 1 1 * *\" → 1 AM on 1st of month"
                                                },
                                                {
                                                    name: "initialDelay:-\n\n@Scheduled(initialDelay = 10000, fixedRate = 5000)\npublic void delayedTask() {\n    // First execution after 10 seconds, then every 5 seconds\n}"
                                                },
                                                { name: "Synchronous: Method blocks thread (use @Async for non-blocking)" }
                                            ]
                                        },
                                        {
                                            name: "TaskScheduler Configuration",
                                            children: [
                                                { name: "\"Customize thread pool for scheduled tasks\"" },
                                                {
                                                    name: "Ex:-\n\n@Configuration\npublic class SchedulingConfig {\n    @Bean\n    public TaskScheduler taskScheduler() {\n        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();\n        scheduler.setPoolSize(5);\n        scheduler.setThreadNamePrefix(\"scheduled-task-\");\n        scheduler.setAwaitTerminationSeconds(60);\n        scheduler.setWaitForTasksToCompleteOnShutdown(true);\n        scheduler.initialize();\n        return scheduler;\n    }\n}"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Async Processing",
                                    children: [
                                        {
                                            name: "@EnableAsync",
                                            children: [
                                                { name: "\"Enable async method execution\"" },
                                                { name: "Methods run in thread pool (non-blocking)" },
                                                {
                                                    name: "Ex:-\n\n@SpringBootApplication\n@EnableAsync\npublic class Application { }\n\n// OR\n@Configuration\n@EnableAsync\npublic class AsyncConfig { }"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@Async Annotation",
                                            children: [
                                                { name: "\"Execute method asynchronously\"" },
                                                { name: "Return type: void (fire-forget) or CompletableFuture<T> (get result later)" },
                                                {
                                                    name: "Ex (Fire-and-forget):-\n\n@Service\npublic class EmailService {\n    @Async\n    public void sendEmail(String to, String subject, String body) {\n        // Executes in thread pool (doesn't block caller)\n        Thread.sleep(3000); // Simulated sending\n        System.out.println(\"Email sent to \" + to);\n    }\n}\n\n// Usage:\nemailService.sendEmail(\"user@example.com\", \"Welcome\", \"Welcome to our app\");\n// Returns immediately (email sent in background)"
                                                },
                                                {
                                                    name: "Ex (Get result with CompletableFuture):-\n\n@Service\npublic class DataProcessingService {\n    @Async\n    public CompletableFuture<String> processData(String input) {\n        // Executes asynchronously\n        String result = heavyComputation(input);\n        return CompletableFuture.completedFuture(result);\n    }\n}\n\n// Usage:\nCompletableFuture<String> future = dataService.processData(\"large_dataset\");\n// Do other work while processing\nString result = future.get(); // Block and get result\n\n// Or with callback:\nfuture.thenAccept(result -> System.out.println(\"Done: \" + result));"
                                                },
                                                { name: "ExecutorService: Thread pool executes method" },
                                                { name: "Exception handling: CompletableFuture.exceptionally(ex -> ...)" }
                                            ]
                                        },
                                        {
                                            name: "Executor Configuration",
                                            children: [
                                                { name: "\"Customize thread pool\"" },
                                                {
                                                    name: "Ex:-\n\n@Configuration\n@EnableAsync\npublic class AsyncConfig implements AsyncConfigurer {\n    @Override\n    public Executor getAsyncExecutor() {\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\n        executor.setCorePoolSize(10);\n        executor.setMaxPoolSize(50);\n        executor.setQueueCapacity(100);\n        executor.setThreadNamePrefix(\"async-task-\");\n        executor.setAwaitTerminationSeconds(60);\n        executor.setWaitForTasksToCompleteOnShutdown(true);\n        executor.initialize();\n        return executor;\n    }\n}"
                                                },
                                                { name: "CorePoolSize: Threads created initially" },
                                                { name: "MaxPoolSize: Maximum threads created if queue full" },
                                                { name: "QueueCapacity: Tasks wait in queue if all threads busy" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Caching",
                                    children: [
                                        {
                                            name: "@EnableCaching",
                                            children: [
                                                { name: "\"Enable caching annotations\"" },
                                                { name: "Added to @Configuration or @SpringBootApplication" },
                                                {
                                                    name: "Ex:-\n\n@SpringBootApplication\n@EnableCaching\npublic class Application { }\n\n// Default cache manager: ConcurrentMapCacheManager\n// For production: Use Redis (import spring-boot-starter-data-redis)"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@Cacheable",
                                            children: [
                                                { name: "\"Cache method result (if hit, skip execution)\"" },
                                                { name: "Stores result using cache key" },
                                                { name: "Subsequent calls with same arguments → return cached value" },
                                                {
                                                    name: "Ex:-\n\n@Service\npublic class UserService {\n    @Cacheable(value=\"users\", key=\"#id\")\n    public User findById(Long id) {\n        System.out.println(\"Fetching user from DB: \" + id);\n        return userRepository.findById(id).orElse(null);\n    }\n}\n\n// Usage:\nUser u1 = userService.findById(1L); // Hits DB, caches result\nUser u2 = userService.findById(1L); // Returns from cache (no DB query)\n\n// Key (default): method parameters\n@Cacheable(value=\"users\", key=\"'all_users'\")\npublic List<User> findAll() { }\n\n// Key (custom SpEL):\n@Cacheable(value=\"users\", key=\"#id + '_' + #format\")\npublic User findById(Long id, String format) { }"
                                                },
                                                { name: "value: Cache name (namespace)" },
                                                { name: "key: Cache key (defaults to method params)" },
                                                { name: "condition: Execute cache only if condition true" },
                                                { name: "unless: Don't cache if condition true" }
                                            ]
                                        },
                                        {
                                            name: "@CachePut",
                                            children: [
                                                { name: "\"Always execute method, update cache with result\"" },
                                                { name: "Unlike @Cacheable, method always runs" },
                                                {
                                                    name: "Ex:-\n\n@Service\npublic class UserService {\n    @CachePut(value=\"users\", key=\"#user.id\")\n    public User updateUser(User user) {\n        userRepository.save(user);\n        return user; // Result cached\n    }\n}"
                                                },
                                                { name: "Use case: Update operations (always save + update cache)" }
                                            ]
                                        },
                                        {
                                            name: "@CacheEvict",
                                            children: [
                                                { name: "\"Remove entry from cache\"" },
                                                { name: "Useful for invalidating stale data" },
                                                {
                                                    name: "Ex:-\n\n@Service\npublic class UserService {\n    @CacheEvict(value=\"users\", key=\"#id\")\n    public void deleteUser(Long id) {\n        userRepository.deleteById(id);\n    }\n    \n    @CacheEvict(value=\"users\", allEntries=true)\n    public void refreshCache() {\n        // Clear entire users cache\n    }\n}"
                                                },
                                                { name: "allEntries: Clear entire cache (not specific key)" }
                                            ]
                                        },
                                        {
                                            name: "@Caching",
                                            children: [
                                                { name: "\"Multiple cache operations in one method\"" },
                                                {
                                                    name: "Ex:-\n\n@Caching(\n    put = @CachePut(value=\"users\", key=\"#user.id\"),\n    evict = @CacheEvict(value=\"usersList\", allEntries=true)\n)\npublic User updateUser(User user) {\n    userRepository.save(user);\n    return user;\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Cache Manager Configuration (Redis)",
                                            children: [
                                                {
                                                    name: "Ex:-\n\n@Configuration\npublic class CacheConfig {\n    @Bean\n    public CacheManager cacheManager(RedisConnectionFactory connectionFactory) {\n        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()\n            .entryTtl(Duration.ofMinutes(10)) // Expire after 10 minutes\n            .serializeValuesWith(RedisSerializationContext.SerializationPair\n                .fromSerializer(new GenericJackson2JsonRedisSerializer()));\n        \n        return RedisCacheManager.create(connectionFactory);\n    }\n}"
                                                },
                                                { name: "Spring Data Redis dependency required" },
                                                { name: "TTL: Time-to-live for cache entries" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Spring Boot Autoconfiguration",
                            children: [
                                {
                                    name: "application.properties / application.yml",
                                    children: [
                                        { name: "\"External configuration files\"" },
                                        { name: "YAML preferred (cleaner syntax)" },
                                        { name: "Can have profiles: application-dev.yml, application-prod.yml" },
                                        {
                                            name: "Common Properties:-\n\nserver.port=8080: Server port\nserver.servlet.context-path=/api: Root path for all endpoints\n\nspring.datasource.url=jdbc:mysql://localhost:3306/mydb: DB connection\nspring.datasource.username=root\nspring.datasource.password=password\n\nspring.jpa.hibernate.ddl-auto=update: Create/update DB schema\nspring.jpa.show-sql=true: Log SQL queries\nspring.jpa.properties.hibernate.format_sql=true: Pretty SQL\n\nlogging.level.root=INFO: Root log level\nlogging.level.com.example=DEBUG: Package-specific log level\nlogging.file.name=logs/app.log: Log file location"
                                        }
                                    ]
                                },
                                {
                                    name: "@ConfigurationProperties",
                                    children: [
                                        { name: "\"Bind external properties to POJO\"" },
                                        { name: "Type-safe, validated property binding" },
                                        {
                                            name: "Ex:-\n\n// application.yml\napp:\n  jwt:\n    secret: \"my-secret-key\"\n    expiration-ms: 3600000\n  email:\n    from: \"noreply@example.com\"\n    smtp-server: \"smtp.gmail.com\"\n\n// Code\n@ConfigurationProperties(prefix=\"app.jwt\")\n@Data\npublic class JwtProperties {\n    private String secret;\n    private long expirationMs;\n}\n\n@ConfigurationProperties(prefix=\"app.email\")\n@Data\npublic class EmailProperties {\n    private String from;\n    private String smtpServer;\n}\n\n// Usage in @Configuration\n@Configuration\npublic class AppConfig {\n    @Bean\n    public JwtTokenProvider jwtTokenProvider(JwtProperties props) {\n        return new JwtTokenProvider(props.getSecret(), props.getExpirationMs());\n    }\n}"
                                        },
                                        { name: "@EnableConfigurationProperties: Enable binding explicitly" },
                                        { name: "@Validated: Enable validation (@NotBlank, @Email, etc)" }
                                    ]
                                },
                                {
                                    name: "Spring Boot Starters",
                                    children: [
                                        { name: "\"Pre-configured dependency bundles\"" },
                                        { name: "Auto-configure application based on classpath" },
                                        {
                                            name: "Common Starters:-\n\nspring-boot-starter-web: Web MVC, embedded Tomcat\nspring-boot-starter-data-jpa: Spring Data JPA, Hibernate\nspring-boot-starter-data-redis: Redis caching\nspring-boot-starter-security: Spring Security\nspring-boot-starter-validation: Bean Validation\nspring-boot-starter-logging: Logback logging\nspring-boot-starter-test: JUnit, Mockito, Spring Test"
                                        },
                                        { name: "Auto-configuration: Spring detects presence of libraries and configures beans" }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Testing in Spring Boot",
                            children: [
                                {
                                    name: "@SpringBootTest",
                                    children: [
                                        {
                                            name: "Full Application Context Test",
                                            children: [
                                                { name: "\"Loads entire Spring context for integration testing\"" },
                                                { name: "Starts embedded server (Tomcat/Jetty)" },
                                                { name: "Slow but comprehensive (tests entire stack)" },
                                                { name: "Best for: End-to-end scenarios, database interactions, configuration" },
                                                {
                                                    name: "webEnvironment Options:-\n\nMOCK (default): Mock DispatcherServlet, no real HTTP server\nRANDOM_PORT: Embedded server starts on random port\nDEFINED_PORT: Server starts on configured port (server.port)\nNONE: No web environment"
                                                },
                                                {
                                                    name: "Ex (Random Port):-\n\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\npublic class UserControllerIntegrationTest {\n    @LocalServerPort\n    private int port; // Injected random port\n    \n    @Autowired\n    private TestRestTemplate restTemplate; // Client for HTTP calls\n    \n    @Test\n    public void testGetUser() {\n        ResponseEntity<User> response = restTemplate.getForEntity(\n            \"http://localhost:\" + port + \"/api/users/1\",\n            User.class\n        );\n        \n        assertEquals(HttpStatus.OK, response.getStatusCode());\n        assertNotNull(response.getBody());\n        assertEquals(\"John\", response.getBody().getName());\n    }\n    \n    @Test\n    public void testCreateUser() {\n        CreateUserRequest request = new CreateUserRequest(\"Jane\", \"jane@example.com\");\n        \n        ResponseEntity<User> response = restTemplate.postForEntity(\n            \"http://localhost:\" + port + \"/api/users\",\n            request,\n            User.class\n        );\n        \n        assertEquals(HttpStatus.CREATED, response.getStatusCode());\n        assertNotNull(response.getBody().getId());\n    }\n}"
                                                },
                                                {
                                                    name: "Ex (Mock Environment):-\n\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)\npublic class UserControllerMockTest {\n    @Autowired\n    private MockMvc mockMvc; // No real HTTP, mocked servlet\n    \n    @MockBean\n    private UserService userService; // Mock service layer\n    \n    @Test\n    public void testGetUserMock() throws Exception {\n        User mockUser = new User(1L, \"John\", \"john@example.com\");\n        when(userService.findById(1L)).thenReturn(mockUser);\n        \n        mockMvc.perform(get(\"/api/users/1\"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath(\"$.name\").value(\"John\"));\n    }\n}"
                                                },
                                                { name: "TestRestTemplate: Client to test REST endpoints with real HTTP" },
                                                { name: "MockMvc: Test servlet layer without real HTTP" },
                                                { name: "@LocalServerPort: Inject actual port when using RANDOM_PORT" }
                                            ]
                                        },
                                        {
                                            name: "Database Testing",
                                            children: [
                                                {
                                                    name: "H2 In-Memory Database:-\n\n// application-test.yml\nspring:\n  datasource:\n    url: jdbc:h2:mem:testdb\n    driver-class-name: org.h2.Driver\n    username: sa\n  jpa:\n    database-platform: org.hibernate.dialect.H2Dialect\n\n// Test class\n@SpringBootTest\n@ActiveProfiles(\"test\") // Uses application-test.yml\npublic class UserRepositoryTest {\n    @Autowired\n    private UserRepository userRepository;\n    \n    @Test\n    public void testSaveUser() {\n        User user = new User(\"John\", \"john@example.com\");\n        User saved = userRepository.save(user);\n        \n        assertNotNull(saved.getId());\n    }\n}"
                                                },
                                                {
                                                    name: "Database Cleanup Between Tests:-\n\n@SpringBootTest\npublic class UserRepositoryCleanupTest {\n    @Autowired\n    private UserRepository userRepository;\n    \n    @BeforeEach\n    public void setup() {\n        userRepository.deleteAll(); // Clear before each test\n    }\n    \n    @Test\n    public void testFindByEmail() {\n        User user = userRepository.save(new User(\"John\", \"john@example.com\"));\n        Optional<User> found = userRepository.findByEmail(\"john@example.com\");\n        assertTrue(found.isPresent());\n    }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Context Loading Performance",
                                            children: [
                                                { name: "Full context loading: 3-10 seconds (slow)" },
                                                { name: "Reused across test methods (only loaded once per class)" },
                                                { name: "Tip: Use slice tests (@WebMvcTest, @DataJpaTest) when possible" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "@WebMvcTest (Slice Test)",
                                    children: [
                                        {
                                            name: "Controller Layer Testing",
                                            children: [
                                                { name: "\"Test controller without loading entire context\"" },
                                                { name: "Loads: DispatcherServlet, @Controller beans, @ControllerAdvice" },
                                                { name: "Mocks: @Service, @Repository beans" },
                                                { name: "Fast: Only relevant components loaded" },
                                                {
                                                    name: "Ex:-\n\n@WebMvcTest(UserController.class) // Load only UserController\npublic class UserControllerTest {\n    @Autowired\n    private MockMvc mockMvc; // Mock servlet layer\n    \n    @MockBean\n    private UserService userService; // Mock service\n    \n    @Test\n    public void testGetUser() throws Exception {\n        User mockUser = new User(1L, \"John\", \"john@example.com\");\n        when(userService.findById(1L)).thenReturn(mockUser);\n        \n        mockMvc.perform(get(\"/api/users/1\")\n                .contentType(MediaType.APPLICATION_JSON))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath(\"$.name\").value(\"John\"))\n            .andExpect(jsonPath(\"$.email\").value(\"john@example.com\"));\n        \n        verify(userService, times(1)).findById(1L);\n    }\n    \n    @Test\n    public void testCreateUser() throws Exception {\n        CreateUserRequest request = new CreateUserRequest(\"Jane\", \"jane@example.com\");\n        User created = new User(2L, \"Jane\", \"jane@example.com\");\n        \n        when(userService.create(any(CreateUserRequest.class))).thenReturn(created);\n        \n        mockMvc.perform(post(\"/api/users\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(asJsonString(request)))\n            .andExpect(status().isCreated())\n            .andExpect(jsonPath(\"$.id\").value(2));\n    }\n    \n    @Test\n    public void testDeleteUser() throws Exception {\n        mockMvc.perform(delete(\"/api/users/1\"))\n            .andExpect(status().isNoContent());\n        \n        verify(userService).delete(1L);\n    }\n    \n    // Helper\n    private static String asJsonString(Object obj) throws JsonProcessingException {\n        return new ObjectMapper().writeValueAsString(obj);\n    }\n}"
                                                },
                                                { name: "@MockBean: Mock service dependencies" },
                                                { name: "MockMvc: Perform HTTP requests without real server" },
                                                { name: "Fast: ~1 second (vs 3-10 for full context)" }
                                            ]
                                        },
                                        {
                                            name: "MockMvc Methods",
                                            children: [
                                                {
                                                    name: "HTTP Request Methods:-\n\nmockMvc.perform(get(\"/api/users\")) → GET request\nmockMvc.perform(post(\"/api/users\")) → POST request\nmockMvc.perform(put(\"/api/users/1\")) → PUT request\nmockMvc.perform(delete(\"/api/users/1\")) → DELETE request\nmockMvc.perform(patch(\"/api/users/1\")) → PATCH request"
                                                },
                                                {
                                                    name: "Request Configuration:-\n\n.contentType(MediaType.APPLICATION_JSON) → Set Content-Type header\n.content(jsonBody) → Set request body\n.header(\"Authorization\", \"Bearer token\") → Add custom header\n.param(\"page\", \"1\") → Add query parameter\n.accept(MediaType.APPLICATION_JSON) → Set Accept header"
                                                },
                                                {
                                                    name: "Response Assertions (andExpect):-\n\n.andExpect(status().isOk()) → Verify 200 status\n.andExpect(status().isCreated()) → Verify 201 status\n.andExpect(status().isNotFound()) → Verify 404 status\n.andExpect(jsonPath(\"$.name\").value(\"John\")) → Verify JSON field\n.andExpect(jsonPath(\"$.length()\").value(3)) → Verify array length\n.andExpect(header().exists(\"Location\")) → Verify header exists\n.andExpect(content().string(\"Expected content\")) → Verify response body"
                                                },
                                                {
                                                    name: "Output & Debugging (andDo):-\n\n.andDo(print()) → Print request/response details\n.andDo(print(System.err)) → Print to stderr"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Testing Error Handling",
                                            children: [
                                                {
                                                    name: "Ex:-\n\n@WebMvcTest(UserController.class)\npublic class UserControllerErrorTest {\n    @Autowired\n    private MockMvc mockMvc;\n    \n    @MockBean\n    private UserService userService;\n    \n    @Test\n    public void testUserNotFound() throws Exception {\n        when(userService.findById(999L))\n            .thenThrow(new UserNotFoundException(\"User not found\"));\n        \n        mockMvc.perform(get(\"/api/users/999\"))\n            .andExpect(status().isNotFound())\n            .andExpect(jsonPath(\"$.error\").value(\"User not found\"));\n    }\n    \n    @Test\n    public void testInvalidInput() throws Exception {\n        mockMvc.perform(post(\"/api/users\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(\"{\\\"name\\\": \\\"\\\"}\")) // Empty name\n            .andExpect(status().isBadRequest())\n            .andExpect(jsonPath(\"$.fieldErrors.name\").exists());\n    }\n}"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "@DataJpaTest (Slice Test)",
                                    children: [
                                        {
                                            name: "Repository Layer Testing",
                                            children: [
                                                { name: "\"Test JPA repositories without loading entire context\"" },
                                                { name: "Loads: @Entity classes, @Repository beans, Spring Data infrastructure" },
                                                { name: "Mocks: @Service, @Controller beans" },
                                                { name: "Database: Uses H2 in-memory by default (if in classpath)" },
                                                { name: "Transactional: Auto-rollback after each test (data isolation)" },
                                                {
                                                    name: "Ex:-\n\n@DataJpaTest\npublic class UserRepositoryTest {\n    @Autowired\n    private UserRepository userRepository;\n    \n    @Autowired\n    private TestEntityManager entityManager; // Query DB directly\n    \n    @Test\n    public void testSaveUser() {\n        User user = new User(\"John\", \"john@example.com\");\n        User saved = userRepository.save(user);\n        \n        assertNotNull(saved.getId());\n        assertEquals(\"John\", saved.getName());\n    }\n    \n    @Test\n    public void testFindByEmail() {\n        // Setup\n        User user = new User(\"John\", \"john@example.com\");\n        entityManager.persistAndFlush(user);\n        entityManager.clear(); // Clear persistence context\n        \n        // Execute\n        Optional<User> found = userRepository.findByEmail(\"john@example.com\");\n        \n        // Verify\n        assertTrue(found.isPresent());\n        assertEquals(\"john@example.com\", found.get().getEmail());\n    }\n    \n    @Test\n    public void testFindByAgeGreaterThan() {\n        entityManager.persistAndFlush(new User(\"John\", \"john@example.com\", 30));\n        entityManager.persistAndFlush(new User(\"Jane\", \"jane@example.com\", 25));\n        entityManager.persistAndFlush(new User(\"Bob\", \"bob@example.com\", 35));\n        entityManager.clear();\n        \n        List<User> users = userRepository.findByAgeGreaterThan(28);\n        \n        assertEquals(2, users.size());\n        assertTrue(users.stream().allMatch(u -> u.getAge() > 28));\n    }\n}"
                                                },
                                                { name: "TestEntityManager: Persist/flush entities directly" },
                                                { name: "Auto-rollback: Each test starts with clean data" },
                                                { name: "Fast: Only JPA infrastructure loaded" }
                                            ]
                                        },
                                        {
                                            name: "Testing Lazy Loading & Relationships",
                                            children: [
                                                {
                                                    name: "Ex:-\n\n@DataJpaTest\npublic class UserPostRepositoryTest {\n    @Autowired\n    private UserRepository userRepository;\n    \n    @Autowired\n    private PostRepository postRepository;\n    \n    @Autowired\n    private TestEntityManager entityManager;\n    \n    @Test\n    public void testFindUserWithPosts() {\n        User user = new User(\"John\", \"john@example.com\");\n        user.addPost(new Post(\"Title 1\", \"Content 1\"));\n        user.addPost(new Post(\"Title 2\", \"Content 2\"));\n        \n        entityManager.persistAndFlush(user);\n        entityManager.clear();\n        \n        // Fetching user\n        User found = userRepository.findById(user.getId()).get();\n        \n        // Accessing lazy-loaded posts (LAZY by default for @OneToMany)\n        assertThat(found.getPosts()).hasSize(2);\n    }\n}"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Mocking with Mockito",
                                    children: [
                                        {
                                            name: "@MockBean Annotation",
                                            children: [
                                                { name: "\"Mock Spring bean in application context\"" },
                                                { name: "Replaces actual bean with Mockito mock" },
                                                { name: "Used in @WebMvcTest, @SpringBootTest" },
                                                {
                                                    name: "Ex:-\n\n@SpringBootTest\npublic class UserServiceTest {\n    @MockBean // Mock the repository\n    private UserRepository userRepository;\n    \n    @Autowired\n    private UserService userService; // Real service using mocked repo\n    \n    @Test\n    public void testCreateUser() {\n        CreateUserRequest req = new CreateUserRequest(\"John\", \"john@example.com\");\n        User expected = new User(1L, \"John\", \"john@example.com\");\n        \n        when(userRepository.save(any(User.class))).thenReturn(expected);\n        \n        User result = userService.create(req);\n        \n        assertEquals(expected.getId(), result.getId());\n        verify(userRepository, times(1)).save(any(User.class));\n    }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@SpyBean Annotation",
                                            children: [
                                                { name: "\"Partial mock: Real implementation + override some methods\"" },
                                                { name: "Calls real method by default, can override specific calls" },
                                                { name: "Useful for testing real logic with some dependencies mocked" },
                                                {
                                                    name: "Ex:-\n\n@SpringBootTest\npublic class UserServiceSpyTest {\n    @SpyBean // Real service with some methods mocked\n    private UserService userService;\n    \n    @MockBean\n    private EmailService emailService;\n    \n    @Test\n    public void testRegisterUserWithEmailSpy() {\n        // Call real createUser, mock sendWelcomeEmail\n        doNothing().when(emailService).sendWelcomeEmail(anyString());\n        \n        User user = userService.registerUser(\n            new CreateUserRequest(\"John\", \"john@example.com\")\n        );\n        \n        assertNotNull(user.getId()); // Real user created\n        verify(emailService).sendWelcomeEmail(\"john@example.com\"); // Email sent\n    }\n}"
                                                },
                                                { name: "Use sparingly: Harder to reason about, prefer @MockBean" }
                                            ]
                                        },
                                        {
                                            name: "Mockito Stubbing",
                                            children: [
                                                {
                                                    name: "Basic Stubbing:-\n\nwhen(mock.method(arg)).thenReturn(value);\nwhen(mock.method(arg)).thenThrow(exception);\n\n// Multiple calls\nwhen(mock.method()).thenReturn(1).thenReturn(2).thenReturn(3);\n\n// Argument matchers\nwhen(mock.findById(anyLong())).thenReturn(user);\nwhen(mock.save(any(User.class))).thenReturn(user);\nwhen(mock.findByName(startsWith(\"J\"))).thenReturn(list);"
                                                },
                                                {
                                                    name: "Verification:-\n\nverify(mock).method(arg); // Called at least once\nverify(mock, times(2)).method(arg); // Called exactly 2 times\nverify(mock, never()).method(arg); // Never called\nverify(mock, atLeastOnce()).method(arg);\nverify(mock, atMostOnce()).method(arg);\nverify(mock, inOrder(mock1, mock2)).method(); // Call order"
                                                },
                                                {
                                                    name: "Real Usage Example:-\n\n@Test\npublic void testUpdateUserEmail() {\n    // Setup\n    User user = new User(1L, \"John\", \"john@example.com\");\n    when(userRepository.findById(1L)).thenReturn(Optional.of(user));\n    when(userRepository.save(any(User.class))).thenAnswer(invocation -> {\n        User u = invocation.getArgument(0);\n        u.setId(1L);\n        return u;\n    });\n    \n    // Execute\n    User updated = userService.updateEmail(1L, \"newemail@example.com\");\n    \n    // Verify\n    assertEquals(\"newemail@example.com\", updated.getEmail());\n    verify(userRepository).findById(1L);\n    verify(userRepository).save(any(User.class));\n}"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Test Fixtures & Setup",
                                    children: [
                                        {
                                            name: "@BeforeEach & @AfterEach",
                                            children: [
                                                { name: "\"Setup/cleanup before/after each test\"" },
                                                { name: "Replaces JUnit 3 setUp() and tearDown()" },
                                                {
                                                    name: "Ex:-\n\n@SpringBootTest\npublic class UserServiceSetupTest {\n    @Autowired\n    private UserService userService;\n    \n    @Autowired\n    private UserRepository userRepository;\n    \n    private User testUser;\n    \n    @BeforeEach\n    public void setUp() {\n        // Create test data before each test\n        testUser = userRepository.save(new User(\"John\", \"john@example.com\"));\n    }\n    \n    @AfterEach\n    public void tearDown() {\n        // Clean up after each test\n        userRepository.deleteAll();\n    }\n    \n    @Test\n    public void testUpdateUser() {\n        User updated = userService.updateName(testUser.getId(), \"Jane\");\n        assertEquals(\"Jane\", updated.getName());\n    }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@BeforeClass & @AfterClass (Static)",
                                            children: [
                                                { name: "\"Setup/cleanup once per class (before all tests)\"" },
                                                { name: "Must be static methods" },
                                                { name: "Use for expensive operations (database setup, file creation)" },
                                                {
                                                    name: "Ex:-\n\npublic class ExpensiveSetupTest {\n    private static DataSource dataSource;\n    \n    @BeforeClass\n    public static void setUpClass() throws Exception {\n        // Expensive one-time setup\n        dataSource = createDataSource();\n    }\n    \n    @AfterClass\n    public static void tearDownClass() throws Exception {\n        dataSource.close();\n    }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Test Data Builders",
                                            children: [
                                                {
                                                    name: "Ex:-\n\npublic class UserBuilder {\n    private Long id = 1L;\n    private String name = \"John\";\n    private String email = \"john@example.com\";\n    private int age = 25;\n    \n    public UserBuilder withName(String name) {\n        this.name = name;\n        return this;\n    }\n    \n    public UserBuilder withEmail(String email) {\n        this.email = email;\n        return this;\n    }\n    \n    public User build() {\n        return new User(id, name, email, age);\n    }\n}\n\n// Usage in tests:\n@Test\npublic void testWithDifferentUsers() {\n    User user1 = new UserBuilder().withName(\"Alice\").build();\n    User user2 = new UserBuilder().withName(\"Bob\").withAge(30).build();\n    \n    // Test with different users\n}"
                                                },
                                                { name: "Fluent API for creating test objects" },
                                                { name: "Improves test readability" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Parameterized Tests",
                                    children: [
                                        {
                                            name: "@ParameterizedTest with @ValueSource",
                                            children: [
                                                { name: "\"Run same test with multiple input values\"" },
                                                { name: "Reduces code duplication" },
                                                {
                                                    name: "Ex:-\n\n@ParameterizedTest\n@ValueSource(ints = {1, 2, 3, 4, 5})\npublic void testValidIds(int id) {\n    assertTrue(userService.existsById((long) id));\n}\n\n@ParameterizedTest\n@ValueSource(strings = {\"john@example.com\", \"jane@example.com\"})\npublic void testValidEmails(String email) {\n    assertTrue(isValidEmail(email));\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "@ParameterizedTest with @CsvSource",
                                            children: [
                                                { name: "\"Test with CSV data\"" },
                                                {
                                                    name: "Ex:-\n\n@ParameterizedTest\n@CsvSource({\n    \"John, john@example.com, 25\",\n    \"Jane, jane@example.com, 30\",\n    \"Bob, bob@example.com, 35\"\n})\npublic void testCreateUserWithParams(String name, String email, int age) {\n    User user = userService.create(new CreateUserRequest(name, email, age));\n    \n    assertEquals(name, user.getName());\n    assertEquals(email, user.getEmail());\n}"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Test Best Practices",
                                    children: [
                                        {
                                            name: "AAA Pattern (Arrange-Act-Assert)",
                                            children: [
                                                {
                                                    name: "Ex:-\n\n@Test\npublic void testUserRegistration() {\n    // Arrange: Setup test data\n    CreateUserRequest request = new CreateUserRequest(\"John\", \"john@example.com\");\n    \n    // Act: Execute the method being tested\n    User result = userService.register(request);\n    \n    // Assert: Verify the outcome\n    assertNotNull(result.getId());\n    assertEquals(\"John\", result.getName());\n    assertEquals(\"john@example.com\", result.getEmail());\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "One Assertion per Test",
                                            children: [
                                                { name: "\"Test one behavior per test method\"" },
                                                { name: "Easier to identify failure cause" },
                                                { name: "Exception: Related assertions (e.g., id, name, email of same object)" }
                                            ]
                                        },
                                        {
                                            name: "Descriptive Test Names",
                                            children: [
                                                { name: "✅ Good: testUserNotFoundThrowsException()" },
                                                { name: "❌ Bad: test1()" },
                                                { name: "Format: test<Method><Condition><Expected>" }
                                            ]
                                        },
                                        {
                                            name: "Avoid Test Interdependencies",
                                            children: [
                                                { name: "Tests must be independent (any order, parallel execution)" },
                                                { name: "Don't share state between tests" },
                                                { name: "Use @BeforeEach for setup, not class-level fields" }
                                            ]
                                        },
                                        {
                                            name: "Mock External Dependencies",
                                            children: [
                                                { name: "Mock: Database, APIs, email services, file systems" },
                                                { name: "Don't: Mock objects under test or Spring framework" },
                                                { name: "Reduces flakiness, speeds up tests" }
                                            ]
                                        },
                                        {
                                            name: "Test Coverage Goals",
                                            children: [
                                                { name: "Happy path: Main success scenario" },
                                                { name: "Error paths: Exceptions, validation failures" },
                                                { name: "Edge cases: Null, empty, boundary values" },
                                                { name: "Target: 70-80% code coverage (not 100% - diminishing returns)" }
                                            ]
                                        },
                                        {
                                            name: "Performance Considerations",
                                            children: [
                                                { name: "@WebMvcTest: ~1 second (fast)" },
                                                { name: "@DataJpaTest: ~2-3 seconds (medium)" },
                                                { name: "@SpringBootTest: ~5-10 seconds (slow)" },
                                                { name: "Strategy: Use slice tests when possible, full tests only for integration scenarios" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Spring Boot Actuator & Monitoring",
                                    children: [
                                        {
                                            name: "Actuator Endpoints",
                                            children: [
                                                {
                                                    name: "Common Endpoints:-\n\nGET /actuator/health: Application health status\nGET /actuator/metrics: Performance and resource metrics\nGET /actuator/env: Environment variables & properties\nGET /actuator/beans: Registered beans in context\nGET /actuator/threaddump: Current thread dump\nGET /actuator/loggers: Logger configuration\nGET /actuator/prometheus: Metrics in Prometheus format"
                                                },
                                                {
                                                    name: "Ex (Health Check):-\n\n// GET /actuator/health\n{\n  \"status\": \"UP\",\n  \"components\": {\n    \"db\": {\n      \"status\": \"UP\",\n      \"details\": {\n        \"database\": \"PostgreSQL\"\n      }\n    },\n    \"redis\": {\n      \"status\": \"DOWN\",\n      \"details\": {\n        \"error\": \"Connection refused\"\n      }\n    }\n  }\n}"
                                                },
                                                {
                                                    name: "Configuration (application.yml):-\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,metrics,env,loggers\n      base-path: /actuator\n  endpoint:\n    health:\n      show-details: when-authorized # Show details only when authorized\n      show-components: when-authorized"
                                                },
                                                { name: "Security: Actuator endpoints should be secured (not public)" },
                                                { name: "Production: Show minimal details (health, metrics) to prevent info leakage" }
                                            ]
                                        },
                                        {
                                            name: "Health Indicators",
                                            children: [
                                                { name: "\"Custom health checks\"" },
                                                {
                                                    name: "Ex:-\n\n@Component\npublic class DatabaseHealthIndicator implements HealthIndicator {\n    @Autowired\n    private DataSource dataSource;\n    \n    @Override\n    public Health health() {\n        try (Connection conn = dataSource.getConnection()) {\n            return Health.up()\n                .withDetail(\"database\", \"PostgreSQL\")\n                .withDetail(\"version\", getVersion(conn))\n                .build();\n        } catch (SQLException e) {\n            return Health.down()\n                .withDetail(\"error\", e.getMessage())\n                .build();\n        }\n    }\n}\n\n// Result at /actuator/health:\n{\n  \"status\": \"UP\",\n  \"components\": {\n    \"database\": {\n      \"status\": \"UP\",\n      \"details\": {\n        \"database\": \"PostgreSQL\",\n        \"version\": \"13.5\"\n      }\n    }\n  }\n}"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Metrics Collection",
                                            children: [
                                                {
                                                    name: "Micrometer Integration:-\n\nspring-boot-starter-actuator includes Micrometer\nSupports: Prometheus, CloudWatch, New Relic, etc\n\n// Dependency\nspring-boot-starter-micrometer-registry-prometheus"
                                                },
                                                {
                                                    name: "Custom Metrics:-\n\n@Component\npublic class UserMetrics {\n    private final MeterRegistry meterRegistry;\n    private final AtomicInteger activeUsers;\n    \n    public UserMetrics(MeterRegistry meterRegistry) {\n        this.meterRegistry = meterRegistry;\n        this.activeUsers = meterRegistry.gauge(\n            \"users.active\",\n            new AtomicInteger(0)\n        );\n    }\n    \n    public void recordUserLogin() {\n        activeUsers.incrementAndGet();\n        meterRegistry.counter(\"users.login.total\").increment();\n    }\n    \n    public void recordUserLogout() {\n        activeUsers.decrementAndGet();\n    }\n}"
                                                },
                                                { name: "Prometheus Scraping: Metrics at /actuator/prometheus" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Common Pitfalls & Best Practices",
                                    children: [
                                        {
                                            name: "Circular Dependencies",
                                            children: [
                                                { name: "\"Bean A depends on B, Bean B depends on A\"" },
                                                { name: "Constructor injection: Detected at startup (FAIL FAST)" },
                                                { name: "Field injection: Detected at runtime (FAIL LATE)" },
                                                { name: "Solution: Refactor to extract common dependency into third bean" }
                                            ]
                                        },
                                        {
                                            name: "@Transactional Misuse",
                                            children: [
                                                {
                                                    name: "Problem 1: Internal method call doesn't trigger transaction:-\n\n@Service\npublic class UserService {\n    public void methodA() {\n        methodB(); // Doesn't create transaction\n    }\n    \n    @Transactional\n    public void methodB() {\n        // No transaction (internal call bypasses proxy)\n    }\n}\n\nSolution: Call via injected dependency or self-inject"
                                                },
                                                {
                                                    name: "Problem 2: Long-running transactions hold locks:-\n\n@Transactional\npublic void generateReport() {\n    // Query 1: 5 seconds\n    // Query 2: 10 seconds\n    // Lock held entire 15 seconds\n}\n\nSolution: Process in batches, keep transaction short"
                                                },
                                                {
                                                    name: "Problem 3: Checked exceptions don't rollback:-\n\n@Transactional\npublic void processPayment() throws PaymentException {\n    paymentGateway.charge(); // If throws PaymentException\n    // Transaction commits (doesn't rollback by default)\n}\n\nSolution: Use rollbackFor parameter\n@Transactional(rollbackFor = PaymentException.class)"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Lazy Loading Issues",
                                            children: [
                                                {
                                                    name: "LazyInitializationException:-\n\n@Transactional\nUser user = userRepository.findById(1L);\n\nuser.getPosts(); // OK (transaction still active)\n\n// Outside transaction:\nUser user = userRepository.findById(1L); // Session closed\nuser.getPosts(); // LazyInitializationException!"
                                                },
                                                { name: "Solutions: Use EAGER, JOIN FETCH, Entity Graph, or @Transactional" }
                                            ]
                                        },
                                        {
                                            name: "N+1 Query Problem",
                                            children: [
                                                {
                                                    name: "Problem:-\n\nList<User> users = userRepository.findAll(); // Query 1\nusers.forEach(u -> u.getPosts().size()); // N more queries\n\nTotal: 1 + N queries"
                                                },
                                                {
                                                    name: "Solutions:-\n\n1. JOIN FETCH:\n@Query(\"SELECT DISTINCT u FROM User u LEFT JOIN FETCH u.posts\")\nList<User> findAllWithPosts();\n\n2. Entity Graph:\n@EntityGraph(attributePaths = {\"posts\"})\nList<User> findAll();\n\n3. Batch Loading:\n@BatchSize(size = 10)\nprivate List<Post> posts;"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Security Best Practices",
                                            children: [
                                                { name: "Never hardcode credentials: Use environment variables or vault" },
                                                { name: "Use HTTPS in production (never HTTP)" },
                                                { name: "Enable CSRF for form apps, disable for stateless APIs" },
                                                { name: "Hash passwords with BCrypt/Argon2, never plaintext" },
                                                { name: "Validate & sanitize input (SQL injection, XSS)" },
                                                { name: "Use short-lived tokens (JWT: 15 min access, 7 day refresh)" },
                                                { name: "Implement rate limiting (prevent brute force)" },
                                                { name: "Log authentication failures, monitor for attacks" }
                                            ]
                                        },
                                        {
                                            name: "Performance Best Practices",
                                            children: [
                                                { name: "Use LAZY loading for relationships (avoid N+1)" },
                                                { name: "Index frequently searched columns" },
                                                { name: "Cache read-heavy data (Redis)" },
                                                { name: "Use connection pooling (HikariCP)" },
                                                { name: "Async for slow operations (email, notifications)" },
                                                { name: "Pagination for large result sets" },
                                                { name: "Use CDN for static files" },
                                                { name: "Monitor: logs, metrics, traces (Actuator, ELK, Prometheus)" }
                                            ]
                                        },
                                        {
                                            name: "Configuration Management",
                                            children: [
                                                { name: "Use application.yml (YAML cleaner than properties)" },
                                                { name: "Profiles: application-dev.yml, application-prod.yml" },
                                                { name: "Environment variables: Override via ENV" },
                                                { name: "Secrets: Never in code, use vault or AWS Secrets Manager" },
                                                { name: "@ConfigurationProperties: Type-safe config binding" }
                                            ]
                                        },
                                        {
                                            name: "Testing Best Practices",
                                            children: [
                                                { name: "Use @WebMvcTest for controllers (fast, isolated)" },
                                                { name: "Use @DataJpaTest for repositories (fast, isolated)" },
                                                { name: "Use @SpringBootTest for integration scenarios (slow, comprehensive)" },
                                                { name: "Mock external dependencies (APIs, email, file systems)" },
                                                { name: "One assertion per test (or related assertions)" },
                                                { name: "Descriptive test names (what is being tested)" },
                                                { name: "Independent tests (can run in any order)" },
                                                { name: "Test happy path + error paths + edge cases" }
                                            ]
                                        },
                                        {
                                            name: "API Design Best Practices",
                                            children: [
                                                { name: "Use nouns for resources: /users NOT /getUsers" },
                                                { name: "Use HTTP methods semantically: GET (read), POST (create), PUT (replace), DELETE (remove)" },
                                                { name: "Use correct status codes: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found)" },
                                                { name: "Consistent naming: camelCase OR snake_case (not mixed)" },
                                                { name: "Version your APIs: /api/v1/users OR Accept header versioning" },
                                                { name: "Pagination for large datasets: page, size, sort parameters" },
                                                { name: "Error responses: Consistent structure with error codes & messages" },
                                                { name: "HATEOAS: Include links to related resources (optional, nice to have)" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Build Tools",
                    children: [
                        { name: "Maven (lifecycle, dependencies)" },
                        { name: "Gradle" },
                    ],
                },
                {
                    name: "Testing",
                    children: [
                        { name: "JUnit (unit testing)" },
                        { name: "Mockito (mocking)" },
                        { name: "Integration Testing (@SpringBootTest)" },
                    ],
                },
            ],
        },

        {
            "name": "DBMS",
            "children": [
                {
                    "name": "DBMS Foundations",
                    "children": [
                        {
                            "name": "What is DBMS?",
                            "children": [
                                { "name": "\"Software system to manage data efficiently and reliably\"" },
                                { "name": "Provides abstraction over raw file storage" },
                                { "name": "Ensures data consistency, security, and concurrent access" },
                                { "name": "Examples: PostgreSQL, MySQL, Oracle, MongoDB" }
                            ]
                        }
                    ]
                },
                {
                    "name": "Data Modeling (ER Model)",
                    "children": [
                        {
                            "name": "ER Model Basics",
                            "children": [
                                { "name": "\"Conceptual model to represent real-world entities and relationships\"" },
                                { "name": "High-level design before implementation" },
                                { "name": "Easy to visualize with ER Diagrams" }
                            ]
                        },
                        {
    "name": "Entities & Entity Sets",
    "children": [
        { "name": "Entity → object with independent existence (Ex: Student, Course)" },
        { "name": "Strong Entity → has its own primary key" },
        { "name": "Weak Entity → depends on another entity for identity (Ex: Dependent depends on Employee)" },
        {
            "name": "Discriminator (Partial Key)",
            "children": [
                { "name": "\"Attribute that distinguishes weak entities belonging to the SAME owner entity\"" },
                { "name": "Also called: Partial Key" },
                { "name": "By itself, discriminator does NOT uniquely identify a row across the whole table" },
                { "name": "Only unique WITHIN the scope of one owner entity" },
                { "name": "Combined with owner's primary key (FK) → forms the weak entity's composite primary key" },
                {
                    "name": "Ex:-\n\nEmployee(emp_id) -- strong entity, own PK\nDependent(emp_id, dep_name, age)\n  -- dep_name is the discriminator\n  -- emp_id + dep_name = composite PK\n\n// emp_id=101 can have dep_name='Alex' and dep_name='Sara'\n// emp_id=102 can ALSO have dep_name='Alex' (different employee)\n// dep_name alone is NOT unique — only unique per emp_id"
                },
                { "name": "Represented in ER diagrams with a DOUBLE underline (vs single underline for full PK)" },
                { "name": "Not to be confused with the 'discriminator column' used in specialization/generalization mapping (Single Table Strategy), which stores a type flag like 'Student'/'Employee' instead of identifying rows within an owner" }
            ]
        }
    ]
},
                        {
                            "name": "Attributes & Types",
                            "children": [
                                { "name": "Simple Attribute → cannot be divided (Ex: age, name)" },
                                { "name": "Composite Attribute → can be divided (Ex: address = street + city + zip)" },
                                { "name": "Multi-Valued Attribute → multiple values per entity (Ex: phone_numbers)" },
                                { "name": "Derived Attribute → computed from others (Ex: age from birth_date)" }
                            ]
                        },
                        {
                            "name": "Relationships & Cardinality",
                            "children": [
                                { "name": "Relationship → association between entities" },
                                {
                                    "name": "Cardinality Constraints",
                                    "children": [
                                        { "name": "One-to-One (1:1) → Ex: Student ↔ University ID" },
                                        { "name": "One-to-Many (1:N) → Ex: Professor → many Courses" },
                                        { "name": "Many-to-Many (M:N) → Ex: Students ↔ Courses" }
                                    ]
                                },
                                {
                                    "name": "Participation Constraints",
                                    "children": [
                                        { "name": "Total (Mandatory) → Every entity must participate (Ex: Every Student MUST enroll)" },
                                        { "name": "Partial → Entity may or may not participate (Ex: Student MAY take Scholarship)" }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Weak Entities & Multi-valued Attributes Mapping",
                            "children": [
                                { "name": "Weak Entity: Create table with parent's PK as FK + discriminator as composite key" },
                                { "name": "Ex: Employee(emp_id), Dependent(emp_id, dep_name, age) → PRIMARY KEY(emp_id, dep_name)" },
                                { "name": "Multi-valued: Create separate table (Ex: Phone(sid, phone_number))" }
                            ]
                        },
                        {
                            "name": "Extended ER Features (Inheritance)",
                            "children": [
                                {
                                    "name": "Specialization (Top-Down Approach)",
                                    "children": [
                                        { "name": "\"Breaking down parent entity into specialized subsets\"" },
                                        { "name": "Start with general entity, identify special categories" },
                                        { "name": "Example: Vehicle (parent) → Car, Bike, Truck, Bus (children)" },
                                        { "name": "Child entities inherit ALL parent attributes + have their own unique attributes" },
                                        { "name": "Ex: Vehicle(vehicle_id, color, mileage) → Car(vehicle_id, color, mileage, trunk_size, num_doors)" },
                                        { "name": "When to use: Some entities need special attributes others don't" }
                                    ]
                                },
                                {
                                    "name": "Generalization (Bottom-Up Approach)",
                                    "children": [
                                        { "name": "\"Combining similar entities into single general entity\"" },
                                        { "name": "Start with specific entities, identify common attributes" },
                                        { "name": "Example: Student, Professor, Staff (specific) → Person (general)" },
                                        { "name": "All three have common attributes: person_id, name, email, phone" },
                                        { "name": "Reduces redundancy by consolidating common data" },
                                        { "name": "When to use: Multiple entities share significant attributes and relationships" }
                                    ]
                                },
                                {
                                    "name": "Specialization/Generalization Constraints",
                                    "children": [
                                        {
                                            "name": "Disjoint (d) - Mutually Exclusive",
                                            "children": [
                                                { "name": "Entity in parent can belong to AT MOST ONE child entity" },
                                                { "name": "Ex: Vehicle can be Car OR Bike OR Truck (NOT both)" },
                                                { "name": "Ex: Person is Student OR Employee OR Faculty (NOT multiple)" },
                                                { "name": "SQL: Use discriminator column to track which child table" }
                                            ]
                                        },
                                        {
                                            "name": "Overlapping (o) - Non-Mutually Exclusive",
                                            "children": [
                                                { "name": "Entity in parent can belong to MULTIPLE children" },
                                                { "name": "Ex: Person can be Student AND Employee simultaneously" },
                                                { "name": "Ex: Product can be Book AND E-Book AND Audiobook" },
                                                { "name": "SQL: Multiple FK references needed (more complex)" }
                                            ]
                                        },
                                        {
                                            "name": "Total (Mandatory) - Complete Coverage",
                                            "children": [
                                                { "name": "EVERY parent entity MUST be in at least one child" },
                                                { "name": "Ex: Every Vehicle MUST be Car/Bike/Truck/Bus (no generic vehicles)" },
                                                { "name": "All parent rows MUST have corresponding child row" }
                                            ]
                                        },
                                        {
                                            "name": "Partial - Optional Coverage",
                                            "children": [
                                                { "name": "Parent entity MAY or MAY NOT be in any child" },
                                                { "name": "Ex: Some Persons are Students, some are not (unspecialized)" },
                                                { "name": "Parent can exist without being classified into child" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Mapping to Relational Model",
                                    "children": [
                                        {
                                            "name": "Strategy 1: Single Table (Type Flag)",
                                            "children": [
                                                { "name": "Create one table for parent with discriminator column (type flag)" },
                                                { "name": "Ex: Person(person_id, name, email, person_type, student_roll, employee_id)" },
                                                { "name": "person_type = 'Student' | 'Employee' | 'Faculty'" },
                                                { "name": "Pros: Simple queries, no joins" },
                                                { "name": "Cons: Wastes space (NULL columns for irrelevant types), harder to enforce constraints" }
                                            ]
                                        },
                                        {
                                            "name": "Strategy 2: Separate Tables (Class Table Inheritance)",
                                            "children": [
                                                { "name": "Parent table + separate table for each child" },
                                                { "name": "Ex: Person(person_id, name, email)" },
                                                { "name": "     Student(person_id, roll_no, gpa)" },
                                                { "name": "     Employee(person_id, emp_id, salary)" },
                                                { "name": "Child table's PK = FK to parent" },
                                                { "name": "Pros: Clean schema, no NULL columns, enforces constraints" },
                                                { "name": "Cons: Requires JOINs to get full data, complex queries" }
                                            ]
                                        },
                                        {
                                            "name": "Strategy 3: All Attributes in Child Tables",
                                            "children": [
                                                { "name": "No parent table; each child table has ALL attributes (parent + child)" },
                                                { "name": "Ex: Student(person_id, name, email, roll_no, gpa)" },
                                                { "name": "     Employee(person_id, name, email, emp_id, salary)" },
                                                { "name": "Pros: No joins needed, straightforward queries" },
                                                { "name": "Cons: Massive redundancy, hard to update common attributes" },
                                                { "name": "Use ONLY for disjoint specialization (no overlapping)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Real-World Examples",
                                    "children": [
                                        { "name": "Bank: Account (parent) → SavingsAccount, CheckingAccount, MoneyMarket (disjoint, total)" },
                                        { "name": "University: Person (parent) → Student, Faculty, Staff (overlapping, partial - some are Student AND Staff)" },
                                        { "name": "E-commerce: Product (parent) → Physical, Digital (disjoint, total)" },
                                        { "name": "Healthcare: Employee (parent) → Doctor, Nurse, Technician (disjoint, total)" },
                                        { "name": "Insurance: Party (parent) → Individual, Organization (disjoint, total)" }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "ER to Relational Model Mapping",
                            "children": [
                                { "name": "Entity → Table (attributes become columns)" },
                                { "name": "1:1 Relationship → FK on one side OR separate junction table" },
                                { "name": "1:N Relationship → FK on N-side table" },
                                { "name": "M:N Relationship → Separate junction table with FKs from both + composite PK" }
                            ]
                        }
                    ]
                },
                {
                    "name": "Relational Model & SQL",
                    "children": [
                        {
                            "name": "Relational Model Basics",
                            "children": [
                                { "name": "\"Data organized in tables (relations) with rows and columns\"" },
                                { "name": "Rows (tuples) = records, Columns (attributes) = fields" },
                                { "name": "Each table represents an entity or relationship" }
                            ]
                        },
                        {
                            "name": "SQL Language",
                            "children": [
                                {
                                    "name": "DDL (Data Definition Language)",
                                    "children": [
                                        { "name": "CREATE → Create database objects (Ex: CREATE TABLE users(...))" },
                                        { "name": "ALTER → Modify existing table structure (Ex: ALTER TABLE users ADD email VARCHAR(100))" },
                                        { "name": "DROP → Delete database object (Ex: DROP TABLE users)" }
                                    ]
                                },
                                {
                                    "name": "DML (Data Manipulation Language)",
                                    "children": [
                                        { "name": "INSERT → Add records (Ex: INSERT INTO users VALUES(1, 'Hushi'))" },
                                        { "name": "UPDATE → Modify records (Ex: UPDATE users SET name='Sam' WHERE id=1)" },
                                        { "name": "DELETE → Remove records (Ex: DELETE FROM users WHERE id=1)" }
                                    ]
                                },
                                {
                                    "name": "DQL (Data Query Language)",
                                    "children": [
                                        { "name": "SELECT → Retrieve data (Ex: SELECT * FROM users)" },
                                        { "name": "WHERE → Filter rows (Ex: SELECT * FROM users WHERE age > 18)" },
                                        { "name": "GROUP BY → Aggregate rows (Ex: SELECT dept, COUNT(*) FROM emp GROUP BY dept)" },
                                        { "name": "HAVING → Filter aggregated results (Ex: GROUP BY dept HAVING COUNT(*) > 5)" },
                                        { "name": "ORDER BY → Sort results (Ex: SELECT * FROM users ORDER BY age DESC)" },
                                        {
                                            "name": "Joins",
                                            "children": [
                                                { "name": "INNER JOIN → Matching rows from both tables" },
                                                { "name": "LEFT JOIN → All left rows + matched right rows" },
                                                { "name": "RIGHT JOIN → All right rows + matched left rows" },
                                                { "name": "FULL OUTER JOIN → All rows from both tables" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "TCL (Transaction Control Language)",
                                    "children": [
                                        { "name": "COMMIT → Save transaction permanently" },
                                        { "name": "ROLLBACK → Undo changes before commit" },
                                        { "name": "SAVEPOINT → Create checkpoint inside transaction suppose it is SP1 SP2 inside transaction we manually write it after this if we want revert SP1 so it will rollback all changes that are made till SP1" }
                                    ]
                                },
                                {
                                    "name": "DCL (Data Control Language)",
                                    "children": [
                                        { "name": "GRANT → Give user access privileges (Ex: GRANT SELECT, INSERT ON users TO developer_role) (GRANT privilege_name ON object_name TO user_or_role)" },
                                        { "name": "REVOKE → Take away user access privileges (Ex: REVOKE DELETE ON users FROM intern_role)" }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Constraints",
                            "children": [
                                { "name": "PRIMARY KEY → Uniquely identifies row, no NULLs, one per table" },
                                { "name": "FOREIGN KEY → References PK of another table, maintains referential integrity" },
                                { "name": "UNIQUE → All values different, allows one NULL" },
                                { "name": "NOT NULL → Column must contain value" },
                                { "name": "CHECK → Restrict values by condition (Ex: age INT CHECK(age >= 18))" },
                                { "name": "DEFAULT → Provide default value if not supplied" }
                            ]
                        }
                    ]
                },
                {
                    "name": "Normalization (Database Design)",
                    "children": [
                        {
                            "name": "Why Normalization?",
                            "children": [
                                { "name": "Eliminate redundancy and avoid anomalies" },
                                { "name": "Improve data consistency and integrity" },
                                { "name": "Prevent insertion, deletion, update anomalies" }
                            ]
                        },
                        {
                            "name": "Data Anomalies",
                            "children": [
                                {
                                    "name": "Insertion Anomaly",
                                    "children": [
                                        {
                                            "name": "Definition: You cannot add a new entity because required, unrelated data is missing"
                                        },
                                        {
                                            "name": "Scenario: The university creates a new course: Chemistry (CH40)"
                                        },
                                        {
                                            "name": "The Problem: No students have enrolled yet.\nBecause student details and course details\nare locked in the same table, you cannot\nsave this course unless you insert fake\nor NULL student information"
                                        },
                                        {
                                            "name": "+------------+--------------+-----------+-------------+------------+\n| Student_ID | Student_Name | Course_ID | Course_Name | Professor  |\n+------------+--------------+-----------+-------------+------------+\n| NULL       | NULL         | CH40      | Chemistry   | Dr. Smith  | <-- Can't insert\n+------------+--------------+-----------+-------------+------------+ without primary"
                                        }
                                    ]
                                },
                                {
                                    "name": "Deletion Anomaly",
                                    "children": [
                                        {
                                            "name": "Definition: Losing a specific record unintentionally destroys completely different, critical data"
                                        },
                                        {
                                            "name": "Scenario: Charlie (103) cancels his enrollment and must be deleted from the system"
                                        },
                                        {
                                            "name": "The Problem: Charlie is the only student registered for Calculus (MA20). Deleting his student record completely wipes out all existence of the Calculus course and its professor information from your database"
                                        },
                                        {
                                            "name": "+------------+--------------+-----------+-------------+------------+\n| Student_ID | Student_Name | Course_ID | Course_Name | Professor     |\n+------------+--------------+-----------+-------------+------------+\n| 103        | Charlie      | MA20      | Calculus    | Dr. Johnson   |  <-- Loses\n+------------+--------------+-----------+-------------+------------+ course & professor data!"
                                        }
                                    ]
                                },
                                {
                                    "name": "Update Anomaly",
                                    "children": [
                                        {
                                            "name": "Definition: Changing a single piece of data requires editing multiple rows, risking data contradiction"
                                        },
                                        {
                                            "name": "Scenario: Professor for Computer Sci (CS10) changes from Dr. Anderson to Dr. Williams"
                                        },
                                        {
                                            "name": "The Problem: The course data is duplicated. If you update the professor for Alice but miss Bob's row, your database contradicts itself on who actually teaches the course"
                                        },
                                        {
                                            "name": "+------------+--------------+-----------+-------------+---------------+\n| Student_ID | Student_Name | Course_ID | Course_Name | Professor     |\n+------------+--------------+-----------+-------------+---------------+\n| 101        | Alice        | CS10      | Computer Sci| Dr. Williams  |  <-- Updated\n| 102        | Bob          | CS10      | Computer Sci| Dr. Anderson  |  <-- Missed!\n+------------+--------------+-----------+-------------+---------------+ (Data Conflict)"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Database Normalization Forms",
                            "children": [
                                {
                                    "name": "First Normal Form (1NF)",
                                    "children": [
                                        {
                                            "name": "Definition: All attributes contain atomic (indivisible) values"
                                        },
                                        {
                                            "name": "Rule: No composite or multi-valued attributes in single column"
                                        },
                                        {
                                            "name": "NOT 1NF Example - Student Table with Multi-valued Attribute (click to view)",
                                            "children": [
                                                {
                                                    "name": "| StudentID | StudentName | Courses              |\n|-----------|-------------|----------------------|\n| 101       | Alice       | CS10, MA20           |\n| 102       | Bob         | CS10, EN15           |\n| 103       | Charlie     | MA20, PH12           |\n\nProblems:\n1. Searching fails: Cannot easily find all students taking CS10 - must do string pattern matching\n2. Updates are complex: To change 'CS10' to 'CS11', must parse and edit the entire Courses cell\n3. Deletions are problematic: To remove 'CS10' from Alice's record, must manually edit the string\n4. Database queries fail: SQL WHERE clauses like 'Courses = CS10' won't work properly\n5. Inconsistent data format: Some students might have 'CS10,MA20' and others 'CS10 / MA20' - different delimiters"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "IS 1NF Example - Separated into Two Tables (click to view)",
                                            "children": [
                                                {
                                                    "name": "Student Table:\n| StudentID | StudentName |\n|-----------|-------------|\n| 101       | Alice       |\n| 102       | Bob         |\n| 103       | Charlie     |\n\nEnrollment Table:\n| StudentID | CourseID |\n|-----------|----------|\n| 101       | CS10     |\n| 101       | MA20     |\n| 102       | CS10     |\n| 102       | EN15     |\n| 103       | MA20     |\n| 103       | PH12     |\n\nBenefit: Each value is atomic, easy to search for students in CS10, update or delete individual course enrollments"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Second Normal Form (2NF)",
                                    "children": [
                                        {
                                            "name": "Definition: Must be in 1NF + no partial dependencies"
                                        },
                                        {
                                            "name": "Rule: Every non-key attribute must depend on ENTIRE primary key, not just part of it"
                                        },
                                        {
                                            "name": "NOT 2NF Example - Enrollment Table with Partial Dependency (click to view)",
                                            "children": [
                                                {
                                                    "name": "| StudentID | CourseID | Course_Name       | Professor_Name |\n|-----------|----------|-------------------|----------------|\n| 101       | CS10     | Computer Science  | Dr. Anderson   |\n| 101       | MA20     | Calculus          | Dr. White      |\n| 102       | CS10     | Computer Science  | Dr. Anderson   |\n| 103       | MA20     | Calculus          | Dr. White      |\n\nProblems:\n1. Update Anomaly: If Dr. Anderson stops teaching CS10, must update EVERY row where CS10 appears - miss one row = data inconsistency\n2. Redundancy: Course information (name, professor) repeated for every student enrolled - wastes storage space\n3. Insertion Anomaly: Cannot add a new course (EN15, English, Dr. Jones) without enrolling a student first\n4. Deletion Anomaly: If Charlie is the only student in EN15, deleting his record removes the English course information entirely\n5. Query complexity: To find all professors, must search through student enrollment records instead of a dedicated table"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "IS 2NF Example - Separated into Multiple Tables (click to view)",
                                            "children": [
                                                {
                                                    "name": "Enrollment Table:\n| StudentID | CourseID |\n|-----------|----------|\n| 101       | CS10     |\n| 101       | MA20     |\n| 102       | CS10     |\n| 103       | MA20     |\n\nCourse Table:\n| CourseID | Course_Name       | Professor_Name |\n|----------|-------------------|----------------|\n| CS10     | Computer Science  | Dr. Anderson   |\n| MA20     | Calculus          | Dr. White      |\n| EN15     | English           | Dr. Jones      |\n\nBenefit: Course information stored once, can add courses without students, updates affect only one row"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Third Normal Form (3NF)",
                                    "children": [
                                        {
                                            "name": "Definition: Must be in 2NF + no transitive dependencies"
                                        },
                                        {
                                            "name": "Rule: No non-key attribute depends on another non-key attribute"
                                        },
                                        {
                                            "name": "NOT 3NF Example - Student Table with Transitive Dependency (click to view)",
                                            "children": [
                                                {
                                                    "name": "| StudentID | StudentName | DepartmentID | DepartmentName | DepartmentLocation  |\n|-----------|-------------|--------------|----------------|---------------------|\n| 101       | Alice       | D1           | Engineering    | Building A, Floor 3 |\n| 102       | Bob         | D1           | Engineering    | Building A, Floor 3 |\n| 103       | Charlie     | D2           | Science        | Building B, Floor 2 |\n\nProblems:\n1. Update Anomaly: If Engineering department moves to Building C Floor 1, must update EVERY student record in Engineering - miss one row = inconsistency\n2. Data Redundancy: Department information (name, location) repeated for every student in that department - massive wasted storage\n3. Deletion Anomaly: If Bob is the last student in Engineering, deleting his record loses the department location information\n4. Insertion Anomaly: Cannot add a new department (Math, Building D) without first adding a student to it\n5. Inconsistency Risk: Department location might be stored differently (e.g., 'Building A, Floor 3' vs 'Bldg A-Fl 3')"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "IS 3NF Example - Separated into Multiple Tables (click to view)",
                                            "children": [
                                                {
                                                    "name": "Student Table:\n| StudentID | StudentName | DepartmentID |\n|-----------|-------------|---------------|\n| 101       | Alice       | D1            |\n| 102       | Bob         | D1            |\n| 103       | Charlie     | D2            |\n\nDepartment Table:\n| DepartmentID | DepartmentName | DepartmentLocation  |\n|--------------|----------------|---------------------|\n| D1           | Engineering    | Building A, Floor 3 |\n| D2           | Science        | Building B, Floor 2 |\n\nBenefit: Department data stored once, no transitive dependencies, single update fixes all students in that department"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Boyce-Codd Normal Form (BCNF)",
                                    "children": [
                                        {
                                            "name": "Definition: More strict than 3NF"
                                        },
                                        {
                                            "name": "Rule: For every functional dependency X→Y, X must be a candidate key"
                                        },
                                        {
                                            "name": "NOT BCNF Example - Student Course Enrollment Table (click to view)",
                                            "children": [
                                                {
                                                    "name": "| StudentID | Course   | Instructor     |\n|-----------|----------|----------------|\n| 101       | CS10     | Dr. Anderson   |\n| 101       | MA20     | Dr. White      |\n| 102       | CS10     | Dr. Anderson   |\n| 103       | MA20     | Dr. White      |\n| 104       | CS10     | Dr. Anderson   |\n\nStatus: This table IS in 3NF but VIOLATES BCNF\nFunctional Dependencies:\n- (StudentID, Course) → Instructor (composite key determines instructor)\n- Course → Instructor (each course always has same instructor)\n\nWhy it violates BCNF:\nBCNF requires: For every functional dependency X→Y, X must be a candidate key\nHere: Course → Instructor is a functional dependency, but Course alone is NOT a candidate key (primary key is StudentID + Course)\n\nProblems:\n1. Update Anomaly: If Dr. Anderson stops teaching CS10, must update ALL rows where Course=CS10. Miss one row = inconsistency\n2. Insertion Anomaly: Cannot add a new course (EN15 taught by Dr. Jones) without enrolling a student in it first\n3. Deletion Anomaly: If all students drop CS10, information about Dr. Anderson teaching CS10 is lost\n4. Data Redundancy: Dr. Anderson appears multiple times for the same course CS10\n5. Query Inefficiency: To find which instructor teaches CS10, must search through student enrollment records"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "IS BCNF Example - Separated into Multiple Tables (click to view)",
                                            "children": [
                                                {
                                                    "name": "Enrollment Table:\n| StudentID | Course |\n|-----------|--------|\n| 101       | CS10   |\n| 101       | MA20   |\n| 102       | CS10   |\n| 103       | MA20   |\n| 104       | CS10   |\n\nCourse Table:\n| Course | Instructor     |\n|--------|----------------|\n| CS10   | Dr. Anderson   |\n| MA20   | Dr. White      |\n| EN15   | Dr. Jones      |\n\nBenefit: Course → Instructor moved to Course table where Course IS a candidate key, all functional dependencies now have candidate keys on left side, can add courses without students, single update to instructor fixes all enrollments"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Note: Rarely needed in practice, 3NF sufficient for most cases"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Denormalization Tradeoff",
                            "children": [
                                { "name": "Intentionally break normalization rules for performance" },
                                { "name": "Benefit: Reduces joins → faster reads" },
                                { "name": "Cost: Slower writes, storage overhead, consistency challenges" },
                                { "name": "Use only for read-heavy workloads with justifiable performance gain" }
                            ]
                        }
                    ]
                },
                {
                    "name": "Transactions & ACID Properties",
                    "children": [
                        {
                            "name": "Transactions Basics",
                            "children": [
                                { "name": "\"Group of operations treated as single atomic unit\"" },
                                { "name": "Either all succeed or all fail (no partial execution)" },
                                { "name": "COMMIT → save permanently, ROLLBACK → undo changes" }
                            ]
                        },
                        {
                            "name": "ACID Properties",
                            "children": [
                                {
                                    "name": "Atomicity",
                                    "children": [
                                        { "name": "All operations succeed or all fail" },
                                        { "name": "No partial transaction allowed" },
                                        { "name": "Ex: Bank transfer → deduct from A AND add to B together, or neither" }
                                    ]
                                },
                                {
                                    "name": "Consistency",
                                    "children": [
                                        { "name": "Database always remains in valid state" },
                                        { "name": "Rules, constraints, relationships stay correct" },
                                        { "name": "Ex: Balance cannot go negative if CHECK constraint exists" }
                                    ]
                                },
                                {
                                    "name": "Isolation",
                                    "children": [
                                        { "name": "Concurrent transactions should not interfere" },
                                        { "name": "Each transaction behaves as if running alone" },
                                        { "name": "Other transactions cannot see unfinished/intermediate changes" },
                                        { "name": "Only committed results become visible to others" },
                                        { "name": "Locks temporarily block other transactions from accessing same data" },
                                        { "name": "Ex: Tx1 books seat A1 → locked temporarily → if COMMIT, Tx2 sees as booked; if ROLLBACK, Tx2 can book" }
                                    ]
                                },
                                {
                                    "name": "Durability",
                                    "children": [
                                        { "name": "Committed data survives system crash" },
                                        { "name": "Changes permanently stored on disk after COMMIT" },
                                        { "name": "Ex: Payment marked SUCCESS persists even if server crashes" }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Isolation Levels (Most Important)",
                            "children": [
                                {
                                    "name": "Read Uncommitted",
                                    "children": [
                                        { "name": "Lowest isolation level" },
                                        { "name": "Can read uncommitted (dirty) data from other transactions" },
                                        { "name": "Risk: dirty reads, non-repeatable reads, phantom reads" }
                                    ]
                                },
                                {
                                    "name": "Read Committed",
                                    "children": [
                                        { "name": "Only reads committed data" },
                                        { "name": "Prevents dirty reads" },
                                        { "name": "May still have non-repeatable reads" }
                                    ]
                                },
                                {
                                    "name": "Repeatable Read",
                                    "children": [
                                        { "name": "Consistent view throughout transaction" },
                                        { "name": "Prevents dirty reads and non-repeatable reads" },
                                        { "name": "May still have phantom reads" }
                                    ]
                                },
                                {
                                    "name": "Serializable",
                                    "children": [
                                        { "name": "Highest isolation level" },
                                        { "name": "Complete isolation → transactions run as if serial" },
                                        { "name": "Prevents all anomalies but slowest performance" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Indexing & Query Optimization",
                    "children": [
                        {
                            "name": "Indexing Basics",
                            "children": [
                                { "name": "Improves query/search performance by avoiding full table scans" },
                                { "name": "Works like book index → DB jumps directly to data" },
                                {
                                    "name": "Data Structures for Indexing",
                                    "children": [
                                        {
                                            "name": "B+ Tree (Standard in PostgreSQL/MySQL)",
                                            "children": [
                                                { "name": "High branching factor keeps tree shallow (3-4 levels for 1M rows vs 20 for BST)" },
                                                { "name": "All data stored at leaf nodes; internal nodes guide searches" },
                                                { "name": "Leaf nodes are linked → efficient range queries without re-traversal" },
                                                { "name": "Optimized for disk I/O: minimizes random seeks, maximizes sequential access" },
                                                { "name": "Why B+ over BST: BST gets too deep (more disk reads), unpredictable access patterns" },
                                                { "name": "Why B+ over standard B-Tree: Data scattered throughout standard B-Tree causes random I/O; B+ keeps it at leaves" }
                                            ]
                                        },
                                        { "name": "Binary Search Tree (BST) → Deep trees, unbalanced, poor for disk-based systems" },
                                        { "name": "Hash Index → Very fast for exact matches, NOT suitable for range queries" }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Types of Indexes",
                            "children": [
                                { "name": "Primary Index (Clustering) → Created on PK automatically, physically orders data, only one per table, fastest" },
                                { "name": "Secondary Index (Non-Clustering) → Created on non-PK columns, multiple allowed, points to actual data" },
                                { "name": "Unique Index → Ensures all values unique (Ex: email column)" },
                                { "name": "Composite Index → Index on multiple columns (order matters)" },
                                {
                                    "name": "B-Tree Index → Efficient for range queries + sorting",
                                    "children": [
                                        { "name": "Example: WHERE age > 20 benefits from B-Tree (sequential leaf scan)" },
                                        { "name": "Example: ORDER BY name uses B-Tree for sorted traversal" },
                                        { "name": "Composite B-Tree on (customer_id, order_date) supports both exact match and range" }
                                    ]
                                },
                                {
                                    "name": "Hash Index → Very fast for exact matches only",
                                    "children": [
                                        { "name": "Example: WHERE email = 'x@y.com' is O(1)" },
                                        { "name": "Cannot do: WHERE email LIKE 'x%' or range queries" }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Index Tradeoffs",
                            "children": [
                                { "name": "Benefits: Faster reads/searches, faster JOIN operations, faster ORDER BY/GROUP BY" },
                                { "name": "Costs: Slower INSERT/UPDATE/DELETE (index must be maintained), extra storage space, index rebuilding overhead" },
                                { "name": "Write penalty: Every INSERT/UPDATE requires index re-balancing (more for B-Tree than Hash)" }
                            ]
                        },
                        {
                            "name": "When to Use Indexes",
                            "children": [
                                { "name": "Frequently searched columns (high SELECT ratio)" },
                                { "name": "Columns used in WHERE, JOIN, ORDER BY clauses" },
                                { "name": "Foreign keys (for joins)" },
                                { "name": "Large tables with many SELECT queries relative to writes" },
                                { "name": "Don't index: Low-cardinality columns (few unique values), write-heavy tables, tiny tables" }
                            ]
                        },
                        {
                            "name": "Query Optimization Techniques",
                            "children": [
                                { "name": "Avoid SELECT * → specify only needed columns" },
                                { "name": "Filter early using WHERE (before JOIN if possible)" },
                                { "name": "Use proper JOIN conditions to leverage indexes" },
                                { "name": "Avoid deeply nested subqueries → flatten or use CTEs" },
                                { "name": "Use indexes on WHERE, JOIN, ORDER BY columns" },
                                { "name": "Avoid functions in WHERE clause (prevents index usage)" }
                            ]
                        },
                        {
                            "name": "Execution Plans (EXPLAIN)",
                            "children": [
                                { "name": "Database strategy used to execute query → shows cost, rows affected, actual execution time" },
                                { "name": "Shows operation types: Seq Scan, Index Scan, Index Only Scan, Join methods" },
                                {
                                    "name": "Reading EXPLAIN output",
                                    "children": [
                                        { "name": "Seq Scan = full table scan (no index used, slow for large tables)" },
                                        { "name": "Index Scan = using index to locate data (faster)" },
                                        { "name": "Index Only Scan = entire result in index (fastest, no table access)" },
                                        { "name": "Cost = relative estimate (lower is better, unit-less)" },
                                        { "name": "Rows = estimated rows returned (compare to 'actual rows' in ANALYZE)" }
                                    ]
                                },
                                {
                                    "name": "PostgreSQL usage",
                                    "children": [
                                        { "name": "EXPLAIN SELECT ... → shows estimated plan" },
                                        { "name": "EXPLAIN ANALYZE SELECT ... → executes query, shows actual vs estimated" }
                                    ]
                                },
                                {
                                    "name": "MySQL usage",
                                    "children": [
                                        { "name": "EXPLAIN SELECT ... → shows type, possible_keys, key, rows, Extra" },
                                        { "name": "EXPLAIN FORMAT=JSON SELECT ... → detailed JSON output" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Concurrency & Locks",
                    "children": [
                        {
                            "name": "Concurrency Issues",
                            "children": [
                                { "name": "Dirty Read → Reading uncommitted changes from another transaction (data may be rolled back)" },
                                { "name": "Non-Repeatable Read → Same query returns different results during transaction (another tx modified data)" },
                                { "name": "Phantom Read → New rows satisfy WHERE condition during transaction (another tx inserted matching rows)" }
                            ]
                        },
                        {
                            "name": "Locking Mechanisms",
                            "children": [
                                { "name": "Shared Lock (Read Lock) → Multiple transactions can hold simultaneously, prevents modifications" },
                                { "name": "Exclusive Lock (Write Lock) → Only one transaction can hold, prevents reads AND writes by others" }
                            ]
                        },
                        {
                            "name": "Deadlock",
                            "children": [
                                { "name": "\"Two or more transactions wait for each other's locks\"" },
                                { "name": "Ex: Tx1 locks A (waits for B); Tx2 locks B (waits for A) → circular dependency" },
                                { "name": "Prevention: acquire locks in same order, timeout, deadlock detection" }
                            ]
                        }
                    ]
                },
                {
                    "name": "NoSQL Databases",
                    "children": [
                        {
                            "name": "SQL vs NoSQL Comparison",
                            "children": [
                                {
                                    "name": "SQL",
                                    "children": [
                                        { "name": "Structured data with fixed schema" },
                                        { "name": "ACID guarantees" },
                                        { "name": "Strong consistency" },
                                        { "name": "Vertical scaling" },
                                        { "name": "Complex queries with JOINs" }
                                    ]
                                },
                                {
                                    "name": "NoSQL",
                                    "children": [
                                        { "name": "Flexible schema (schema-less or semi-structured)" },
                                        { "name": "Eventually consistent (BASE model)" },
                                        { "name": "High availability & partition tolerance" },
                                        { "name": "Horizontal scaling" },
                                        { "name": "Simple queries (map/reduce style)" }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Types of NoSQL",
                            "children": [
                                { "name": "Document (MongoDB, Firebase) → JSON/BSON, flexible schema, good for content management" },
                                { "name": "Key-Value (Redis, DynamoDB) → Ultra-fast lookups, cache layer, sessions" },
                                { "name": "Column-Family (Cassandra) → Organized by columns, time-series data, huge datasets" },
                                { "name": "Graph (Neo4j) → Nodes + relationships, social networks, recommendations" }
                            ]
                        },
                        {
                            "name": "When to Use",
                            "children": [
                                { "name": "SQL: Structured data, ACID critical, complex queries, strong consistency needed" },
                                { "name": "NoSQL: Unstructured data, horizontal scaling, rapid schema evolution, real-time big data" }
                            ]
                        }
                    ]
                },
                {
                    "name": "Distributed Systems & Scaling",
                    "children": [
                        {
                            "name": "CAP Theorem",
                            "children": [
                                { "name": "\"System can guarantee only 2 of 3 properties\"" },
                                { "name": "Consistency (C) → All nodes see same data" },
                                { "name": "Availability (A) → System always responds" },
                                { "name": "Partition Tolerance (P) → System tolerates network partitions" },
                                { "name": "Real-world: CP = PostgreSQL/MongoDB (sacrifice availability); AP = Cassandra (sacrifice strong consistency)" }
                            ]
                        },
                        {
                            "name": "Replication",
                            "children": [
                                { "name": "Master-Slave (Master-Replica) → Master handles writes, slaves replicate, slaves handle reads (read replicas)" },
                                { "name": "Benefits: Better read performance, availability (promote slave if master fails)" },
                                { "name": "Risk: Replication lag (slaves may have stale data temporarily)" }
                            ]
                        },
                        {
                            "name": "Partitioning (Sharding)",
                            "children": [
                                { "name": "\"Split large dataset across multiple servers\"" },
                                { "name": "Each shard holds subset of data" },
                                { "name": "Enables horizontal scaling" },
                                { "name": "Challenges: Distributed transactions complex, joins across shards difficult, rebalancing needed" }
                            ]
                        },
                        {
                            "name": "Scaling Strategies",
                            "children": [
                                { "name": "Vertical Scaling (Scale-Up) → Add resources to single server (RAM, CPU), easier but hardware limited" },
                                { "name": "Horizontal Scaling (Scale-Out) → Add more servers, no theoretical limit, better for distributed systems" }
                            ]
                        }
                    ]
                },
                {
                    "name": "ORM & Data Access",
                    "children": [
                        {
                            "name": "ORM Basics",
                            "children": [
                                { "name": "\"Object-Relational Mapping\"" },
                                { "name": "Maps database tables to Java classes (Entity)" },
                                { "name": "Repository = interface for database operations (CRUD)" },
                                { "name": "Examples: Hibernate, JPA, Spring Data JPA" }
                            ]
                        },
                        {
                            "name": "Lazy vs Eager Loading",
                            "children": [
                                { "name": "Lazy Loading → Load related data only when accessed, reduces initial query time, risk: LazyInitializationException" },
                                { "name": "Eager Loading → Load related data immediately, complete data but risk: N+1 queries problem" }
                            ]
                        },
                        {
                            "name": "N+1 Problem",
                            "children": [
                                { "name": "One query to load parent + N queries to load children" },
                                { "name": "Ex: Load 100 students → 1 query + 100 queries for each student's courses" },
                                { "name": "Solution: Use JOIN FETCH or batch loading" }
                            ]
                        }
                    ]
                },
                {
                    "name": "Caching",
                    "children": [
                        {
                            "name": "Caching Basics",
                            "children": [
                                { "name": "\"Store frequently accessed data in fast storage\"" },
                                { "name": "Reduce database hits and response time" },
                                { "name": "Examples: Redis, Memcached" }
                            ]
                        },
                        {
                            "name": "Cache Strategies",
                            "children": [
                                { "name": "Cache-Aside (Lazy Loading) → App checks cache first, miss → fetch DB, update cache (simple, risk: stale)" },
                                { "name": "Write-Through → Write to cache AND DB simultaneously (consistent, slower writes)" },
                                { "name": "Write-Behind → Write to cache only, async update to DB (fast, risk: data loss if cache fails)" }
                            ]
                        },
                        {
                            "name": "Cache Management",
                            "children": [
                                { "name": "TTL (Time-To-Live) → Auto-expire cache entries after time (prevents stale data)" },
                                { "name": "Distributed Locks → There are mupltiple servers with mupltiple threads all thread shares common redis during cache miss all thread want ticket for database only one win because of all thread have common redis which has only one ticket and rest all threads wait and again wait for cache in cache 9999 threads get using Random Backoff " }
                            ]
                        }
                    ]
                }
            ]
        },

        {
            name: "API Design & Communication",
            children: [
                {
                    name: "REST",
                    children: [
                        { name: "Resource design" },
                        { name: "HTTP semantics" },
                        { name: "Pagination & filtering" },
                        { name: "Versioning & error handling" },
                    ],
                },
                {
                    name: "GraphQL",
                    children: [
                        { name: "Schema & Queries" },
                        { name: "Resolvers" },
                        { name: "When to use vs REST" },
                    ],
                },
                {
                    name: "gRPC",
                    children: [
                        { name: "Protocol Buffers" },
                        { name: "Unary & Streaming calls" },
                    ],
                },
                {
                    name: "Message Queues",
                    children: [
                        {
                            name: "Kafka / RabbitMQ basics",
                            children: [
                                {
                                    name: "Kafka",
                                    children: [
                                        { name: "Distributed event streaming platform" },
                                        { name: "Broker Architecture: Cluster of brokers, ZooKeeper coordination" },
                                        { name: "Topics: Logical channels for messages" },
                                        { name: "Log-based storage: Messages stored as immutable logs" },
                                        { name: "Retention Policy: Time-based, Size-based, Compact logs" },
                                        { name: "Use cases: Real-time analytics, Log aggregation, Event sourcing" },
                                        { name: "Performance: High throughput (millions msg/sec), Low latency" },
                                        { name: "Durability: Replication across brokers for fault tolerance" },
                                        { name: "Ordering guarantees: Per-partition message ordering" },
                                        { name: "Kafka Cluster Setup: Multiple brokers, Leader-Follower model" }
                                    ]
                                },
                                {
                                    name: "RabbitMQ",
                                    children: [
                                        { name: "Message broker with AMQP protocol" },
                                        { name: "Queue-based model: Messages routed to specific queues" },
                                        { name: "Exchange Types: Direct, Fanout, Topic, Headers" },
                                        { name: "Routing Keys: Dynamic message routing to queues" },
                                        { name: "Acknowledgments: Manual or automatic message confirmation" },
                                        { name: "Message Persistence: Optional durability guarantees" },
                                        { name: "TTL (Time To Live): Message expiration support" },
                                        { name: "Priority Queues: Message priority levels" },
                                        { name: "Delayed Queues: Schedule message delivery" },
                                        { name: "Clustering & Mirroring: High availability setup" }
                                    ]
                                },
                                {
                                    name: "Kafka vs RabbitMQ Comparison",
                                    children: [
                                        { name: "Kafka: Better for high-volume, streaming, event sourcing" },
                                        { name: "RabbitMQ: Better for traditional queuing, routing complexity" },
                                        { name: "Kafka: Message replay capability, RabbitMQ: One-time delivery" },
                                        { name: "Kafka: Horizontal scaling through partitions" },
                                        { name: "RabbitMQ: Simpler setup, lower operational overhead" }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Producers & Consumers",
                            children: [
                                {
                                    name: "Kafka Producers",
                                    children: [
                                        { name: "Producer Configuration: bootstrap.servers, key.serializer, value.serializer" },
                                        { name: "Delivery Semantics: acks=0 (no ack), acks=1 (leader ack), acks=all (all replicas)" },
                                        { name: "Send Methods: fire-and-forget, sync, async with callbacks" },
                                        { name: "Batching: batch.size, linger.ms for throughput optimization" },
                                        { name: "Compression: snappy, lz4, gzip, zstd" },
                                        { name: "Idempotent Producers: enable.idempotence=true to prevent duplicates" },
                                        { name: "Transactional Producers: Exactly-once semantics (EOS)" },
                                        { name: "Retries & Backoff: retry.backoff.ms, max.in.flight.requests" },
                                        { name: "Partitioning: Default (round-robin), Key-based, Custom partitioner" },
                                        { name: "Error Handling: Exceptions, Callbacks, Monitoring" }
                                    ]
                                },
                                {
                                    name: "Kafka Consumers",
                                    children: [
                                        { name: "Consumer Configuration: bootstrap.servers, group.id, auto.offset.reset" },
                                        { name: "Group Management: Multiple consumers in a group for parallel processing" },
                                        { name: "Offset Management: Tracking read position in partition" },
                                        { name: "Auto Commit: auto.commit.interval.ms, enable.auto.commit" },
                                        { name: "Manual Commit: commitSync(), commitAsync() for explicit control" },
                                        { name: "Rebalancing: Process when consumers join/leave group" },
                                        { name: "Fetch Configuration: fetch.min.bytes, fetch.max.wait.ms" },
                                        { name: "Session Management: session.timeout.ms, heartbeat.interval.ms" },
                                        { name: "Offset Reset Policies: earliest (from beginning), latest (from end)" },
                                        { name: "Consumer Lag: Monitoring lag between latest & consumed offset" }
                                    ]
                                },
                                {
                                    name: "RabbitMQ Producers",
                                    children: [
                                        { name: "Connection: Channel, Virtual Host setup" },
                                        { name: "Publishing: basicPublish() method with exchange & routing key" },
                                        { name: "Message Properties: content-type, correlation-id, reply-to" },
                                        { name: "Publisher Confirms: confirm.select() for delivery acknowledgment" },
                                        { name: "Mandatory Flag: Receive notification if message not routed" },
                                        { name: "Error Handling: nack (negative acknowledgment) handling" }
                                    ]
                                },
                                {
                                    name: "RabbitMQ Consumers",
                                    children: [
                                        { name: "Subscription: basicConsume() with consumer callback" },
                                        { name: "QoS (Quality of Service): basicQos() for prefetch limit" },
                                        { name: "Manual Ack: basicAck() after processing message" },
                                        { name: "Nack & Requeue: basicNack() to reject and requeue message" },
                                        { name: "Consumer Tags: Unique identifier for consumer instance" },
                                        { name: "Message Handling: Process in callback function" }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Partitions & Consumer Groups",
                            children: [
                                {
                                    name: "Kafka Partitions",
                                    children: [
                                        { name: "Partition Concept: Horizontal scaling unit of a topic" },
                                        { name: "Leader-Follower: One leader, multiple followers (in-sync replicas)" },
                                        { name: "Replication Factor: Number of copies across brokers" },
                                        { name: "In-Sync Replicas (ISR): Replicas caught up with leader" },
                                        { name: "Leader Election: Automatic failover if leader fails" },
                                        { name: "Min.insync.replicas: Minimum ISRs for acks=all to succeed" },
                                        { name: "Partition Assignment: Static vs Dynamic (Sticky Assignor)" },
                                        { name: "Offset Management: Each partition maintains separate offsets" },
                                        { name: "Log Compaction: Retain latest message per key for compacted topics" },
                                        { name: "Partition Key: Determines which partition gets the message" }
                                    ]
                                },
                                {
                                    name: "Consumer Groups",
                                    children: [
                                        { name: "Group Concept: Multiple consumers reading from same topic in parallel" },
                                        { name: "Parallel Processing: Each partition assigned to one consumer in group" },
                                        { name: "Scalability: Add consumers to group = automatic load balancing" },
                                        { name: "Rebalancing: Reassignment of partitions when consumers join/leave" },
                                        { name: "Group Coordinator: Broker managing group metadata & rebalancing" },
                                        { name: "Group State: Stable, PreparingRebalance, CompletingRebalance, Dead" },
                                        { name: "Consumer ID: Instance ID for tracking in group" },
                                        { name: "Generation ID: Epoch number for partition assignment" },
                                        { name: "Partition Ordering: Guarantees order within partition, not across" },
                                        { name: "Lag Monitoring: Track consumer lag for alerting & debugging" }
                                    ]
                                },
                                {
                                    name: "Partition & Group Scenarios",
                                    children: [
                                        { name: "Scenario 1: More consumers than partitions → Some stay idle" },
                                        { name: "Scenario 2: Fewer consumers than partitions → Each consumes multiple" },
                                        { name: "Scenario 3: Consumer crashes → Partition reassigned to healthy consumer" },
                                        { name: "Scenario 4: Scale up → Add consumer, trigger rebalance, faster processing" },
                                        { name: "Rebalance Overhead: Stop world pause, latency spike during rebalancing" },
                                        { name: "Sticky Assignment: Minimize partition movement during rebalance" }
                                    ]
                                },
                                {
                                    name: "RabbitMQ Queues",
                                    children: [
                                        { name: "Queue Concept: Destination for routed messages" },
                                        { name: "Durable Queues: Survive broker restart" },
                                        { name: "Exclusive Queues: Only one consumer, deleted on disconnect" },
                                        { name: "Auto-delete Queues: Deleted when last consumer unsubscribes" },
                                        { name: "Queue Arguments: Message TTL, Max length, Dead letter exchange" },
                                        { name: "Queue Binding: Connect queue to exchange with routing key" },
                                        { name: "Message Ordering: FIFO within single queue" },
                                        { name: "Queue Durability vs Message Durability: Both must be set for guarantee" }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Retries & Dead Letter Queues",
                            children: [
                                {
                                    name: "Kafka Retries",
                                    children: [
                                        { name: "Producer Retries: retries property (default infinite)" },
                                        { name: "Retry Backoff: retry.backoff.ms exponential backoff delay" },
                                        { name: "Max in-flight Requests: max.in.flight.requests.per.connection (affects ordering)" },
                                        { name: "Timeout Configuration: request.timeout.ms" },
                                        { name: "Idempotent Retries: enable.idempotence prevents duplicate on retry" },
                                        { name: "Transactional Retries: Automatic retry within transaction boundary" },
                                        { name: "Consumer Retries: Application-level retry logic in consumer" },
                                        { name: "Offset Commit Retries: Auto-retry offset commit failures" }
                                    ]
                                },
                                {
                                    name: "Dead Letter Queues (DLQ) in Kafka",
                                    children: [
                                        { name: "DLQ Concept: Separate topic for failed messages" },
                                        { name: "DLQ Design: Create dedicated topic for poison messages" },
                                        { name: "DLQ Naming Convention: {topic}-dlq or {topic}-dead-letter" },
                                        { name: "Failure Conditions: Message processing exception, max retries exceeded" },
                                        { name: "DLQ Handling: Send to DLQ after N retries in consumer" },
                                        { name: "Message Metadata: Add headers for error cause, timestamp, retry count" },
                                        { name: "DLQ Monitoring: Alert on messages arriving in DLQ" },
                                        { name: "Manual Replay: Re-process DLQ messages after fixing root cause" },
                                        { name: "DLQ Retention: Keep DLQ messages longer for investigation" }
                                    ]
                                },
                                {
                                    name: "RabbitMQ Retries",
                                    children: [
                                        { name: "Manual Retries: Application-level retry logic on nack" },
                                        { name: "basicNack with Requeue: Requeue message for retry" },
                                        { name: "Retry Delay: Use TTL + DLX to implement delay before retry" },
                                        { name: "Max Retries: Track retry count in message headers" },
                                        { name: "Exponential Backoff: Implement custom delay strategy" },
                                        { name: "Circuit Breaker: Stop retrying if consumer keeps failing" }
                                    ]
                                },
                                {
                                    name: "Dead Letter Exchange (DLX) in RabbitMQ",
                                    children: [
                                        { name: "DLX Concept: Exchange for handling failed messages" },
                                        { name: "Dead Letter Reasons: Message nacked, TTL expired, Queue length exceeded" },
                                        { name: "DLX Configuration: x-dead-letter-exchange header on queue" },
                                        { name: "DLX Routing: Use x-dead-letter-routing-key to route to DLQ" },
                                        { name: "DLQ Setup: Create queue, bind to DLX for failed messages" },
                                        { name: "Headers Preservation: Dead letter headers contain original routing info" },
                                        { name: "DLX Monitoring: Monitor DLX for failed message handling" }
                                    ]
                                },
                                {
                                    name: "Transactional Outbox Pattern",
                                    children: [
                                        { name: "Pattern Concept: Ensure message sent if database transaction succeeds" },
                                        { name: "Outbox Table: Store messages in DB before publishing" },
                                        { name: "Atomicity: Single transaction for both business & outbox data" },
                                        { name: "Outbox Polling: Separate process reads outbox, publishes to queue" },
                                        { name: "Exactly-once Semantics: Guarantees message delivery" },
                                        { name: "Idempotency: Include correlation-id for duplicate detection" },
                                        { name: "Polling Interval: Balance latency vs CPU usage" },
                                        { name: "Cleanup: Delete published messages from outbox" },
                                        { name: "Implementation: Spring Cloud Stream, Debezium CDC, Custom polling" }
                                    ]
                                },
                                {
                                    name: "Write-Ahead Logging (WAL)",
                                    children: [
                                        { name: "WAL Concept: Log changes before applying to data" },
                                        { name: "Durability Guarantee: Survives crashes & power failures" },
                                        { name: "Recovery: Replay WAL to restore state after failure" },
                                        { name: "Message Broker Use: Kafka uses WAL in broker persistence" },
                                        { name: "Database Use: PostgreSQL, MySQL use WAL for replication" },
                                        { name: "Fsync Operations: Flush to disk for persistence" },
                                        { name: "Performance Trade-off: Durability vs Write latency" },
                                        { name: "Checkpoint: Periodic snapshots to speed up recovery" }
                                    ]
                                },
                                {
                                    name: "Error Handling Strategy",
                                    children: [
                                        { name: "Classification: Transient (retry) vs Permanent (DLQ) errors" },
                                        { name: "Retry Backoff: Exponential, Linear, or Fixed delay" },
                                        { name: "Circuit Breaker: Stop retries if downstream keeps failing" },
                                        { name: "Bulkhead Pattern: Isolate failing consumer from others" },
                                        { name: "Graceful Degradation: Handle failures without stopping pipeline" },
                                        { name: "Alerting: Monitor DLQ, error rates, consumer lag" },
                                        { name: "Debugging: Log headers, body, error stack trace" },
                                        { name: "Recovery Automation: Auto-replay DLQ after issue resolution" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ],
        },
        {
            name: "System Design & Architecture",
            children: [
                {
                    name: "Low-Level Design",
                    children: [
                        { name: "SOLID Principles" },
                        { name: "Design Patterns (Factory, Strategy, Observer)" },
                        { name: "Layered Architecture" },
                    ],
                },
                {
                    name: "High-Level Design",
                    children: [
                        { name: "Scalability (horizontal vs vertical)" },
                        { name: "Load Balancing" },
                        { name: "Caching (Redis)" },
                    ],
                },
                {
                    name: "Distributed Systems",
                    children: [
                        { name: "CAP Theorem" },
                        { name: "Eventual Consistency" },
                        { name: "Idempotency" },
                        { name: "Retries & Timeouts" },
                    ],
                },
                {
                    "name": "Resilience & Failure Handling",
                    "children": [
                        {
                            "name": "Failure Modes in Microservices",
                            "children": [
                                { "name": "Cascading failures: One service slowdown brings down entire system" },
                                { "name": "Thread starvation: All Tomcat threads blocked waiting for slow dependency" },
                                { "name": "Resource exhaustion: Connections, memory fill up while waiting for responses" },
                                { "name": "Timeout chains: Long timeouts compound across service calls" }
                            ]
                        },
                        {
                            "name": "Circuit Breaker Pattern",
                            "children": [
                                {
                                    "name": "Three States",
                                    "children": [
                                        {
                                            "name": "Closed (Normal Operation)",
                                            "children": [
                                                { "name": "Everything working → requests flow normally to downstream service" },
                                                { "name": "Each failure is counted against a threshold" },
                                                { "name": "Example: Rental Service calls Payment Service normally" }
                                            ]
                                        },
                                        {
                                            "name": "Open (Fast Fail)",
                                            "children": [
                                                { "name": "Threshold of failures exceeded → circuit 'trips'" },
                                                { "name": "All requests immediately rejected without calling downstream" },
                                                { "name": "Fallback response returned instantly (default, cached data, or error)" },
                                                { "name": "Threads released almost immediately instead of waiting for timeout" },
                                                { "name": "Example: Payment Service is down → Rental Service returns cached booking or 'payment unavailable'" }
                                            ]
                                        },
                                        {
                                            "name": "Half-Open (Recovery Test)",
                                            "children": [
                                                { "name": "After configured timeout (e.g., 30s), circuit allows a few test requests" },
                                                { "name": "If test requests succeed → circuit returns to Closed (back to normal)" },
                                                { "name": "If test requests fail → circuit returns to Open (continue failing fast)" },
                                                { "name": "Example: After 30s, Rental Service tries calling Payment Service again" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "State Transition Flow",
                                    "children": [
                                        { "name": "Closed → Open: Failures exceed threshold (e.g., 5 failures in 10s)" },
                                        { "name": "Open → Half-Open: Wait timeout expires (e.g., 30 seconds)" },
                                        { "name": "Half-Open → Closed: Test requests succeed" },
                                        { "name": "Half-Open → Open: Test requests fail (reset and try again later)" }
                                    ]
                                },
                                {
                                    "name": "How It Prevents Cascading Failures",
                                    "children": [
                                        {
                                            "name": "Problem Without Circuit Breaker",
                                            "children": [
                                                { "name": "Rental Service calls slow Payment Service" },
                                                { "name": "Each request waits for timeout (e.g., 30s)" },
                                                { "name": "All Tomcat threads become blocked waiting for Payment Service" },
                                                { "name": "Thread pool exhausted → new requests queued or rejected" },
                                                { "name": "Failure spreads: Rental Service becomes slow for ALL users, not just Payment" },
                                                { "name": "Other services calling Rental also start timing out (cascading effect)" }
                                            ]
                                        },
                                        {
                                            "name": "Solution With Circuit Breaker",
                                            "children": [
                                                { "name": "First few failures: Closed state, normal retries" },
                                                { "name": "Threshold hit: Circuit opens, stops calling Payment Service" },
                                                { "name": "Fallback executed: Returns cached price or 'payment pending' immediately (~1-5ms)" },
                                                { "name": "Threads released: Tomcat threads freed instantly, not held by long timeouts" },
                                                { "name": "Rental Service remains responsive: Can serve other bookings, other services" },
                                                { "name": "Isolation achieved: Payment Service failure doesn't cascade to others" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Configuration Parameters",
                                    "children": [
                                        { "name": "failure-rate-threshold: Percentage of failures to trigger open (e.g., 50%)" },
                                        { "name": "slow-call-duration-threshold: Time to consider request as 'slow' (e.g., 2s)" },
                                        { "name": "slow-call-rate-threshold: % of slow calls to trigger open (e.g., 100%)" },
                                        { "name": "wait-duration-in-open-state: Time before trying Half-Open (e.g., 30s)" },
                                        { "name": "minimum-number-of-calls: Min calls before evaluating failure rate (e.g., 10)" }
                                    ]
                                },
                                {
                                    "name": "Fallback Strategies",
                                    "children": [
                                        { "name": "Default value: Return hardcoded/cached response (fastest)" },
                                        { "name": "Cached data: Return last successful response from service" },
                                        { "name": "Alternative service: Call a backup/secondary service" },
                                        { "name": "Graceful degradation: Return partial data or reduced functionality" },
                                        { "name": "Error response: Return explicit error with retry instructions" }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Retry Pattern",
                            "children": [
                                { "name": "Retry transient failures (network hiccup, temporary timeout)" },
                                { "name": "Exponential backoff: Wait 1s, 2s, 4s between retries" },
                                { "name": "Max retries: Limit attempts (e.g., max 3 times)" },
                                { "name": "Don't retry permanent failures (4xx errors, invalid data)" }
                            ]
                        },
                        {
                            "name": "Timeout Pattern",
                            "children": [
                                { "name": "Set maximum wait time for external call (e.g., 2s)" },
                                { "name": "Fail fast: Return error or fallback instead of waiting indefinitely" },
                                { "name": "Prevent thread starvation: Threads not stuck forever" }
                            ]
                        },
                        {
                            "name": "Bulkhead Pattern",
                            "children": [
                                { "name": "Isolate resources (threads, connections) per service" },
                                { "name": "Payment service gets 10 threads, Order service gets 20 threads" },
                                { "name": "If Payment threads exhaust, Order Service still responsive" }
                            ]
                        },
                        {
                            "name": "Implementation in Java (Resilience4j)",
                            "children": [
                                { "name": "@CircuitBreaker(name = 'paymentService', fallbackMethod = 'fallback')" },
                                { "name": "Wraps method call: if fails repeatedly, opens circuit" },
                                { "name": "Fallback method called when circuit is Open" }
                            ]
                        }
                    ]
                },
                {
                    name: "Security",
                    children: [
                        { name: "Authentication & Authorization" },
                        { name: "Password Hashing (BCrypt)" },
                        { name: "HTTPS & Encryption basics" },
                    ],
                },
            ],
        },

        {
            name: "Infrastructure & Deployment",
            children: [
                {
                    name: "Containers",
                    children: [
                        { name: "Docker (images, Dockerfile)" },
                        { name: "Kubernetes (pods, deployments)" },
                    ],
                },
                {
                    name: "Cloud",
                    children: [
                        { name: "Compute (EC2 / GCE)" },
                        { name: "Storage (S3)" },
                        { name: "Managed Databases" },
                    ],
                },
                {
                    name: "Observability",
                    children: [
                        { name: "Logging" },
                        { name: "Metrics" },
                        { name: "Tracing basics" },
                    ],
                },
            ],
        },
    ],
};