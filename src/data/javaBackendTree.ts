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
                                                                { name: "Connects Java with native (C/C++) code" }
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
                                                        { "name": "\"Provides placeholder/surrogate for another object\"" },
                                                        { "name": "Controls access to real object\"" },
                                                        { "name": "Useful for lazy loading, caching, access control\"" }
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
                                                { "name": "Enables loose coupling\"" }
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
                                    "name": "java.lang.Object (ROOT OF ALL CLASSES)",
                                    "children": [

                                        {
                                            "name": "Methods of Object (inherited by ALL classes)",
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
                                                        { "name": "returns integer hash value" },
                                                        { "name": "used in HashMap, HashSet, Hashtable" },
                                                        { "name": "equal objects must return same hashCode" },
                                                        { "name": "different objects may share same hashCode (collision)" }
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
                                        },
                                        {
                                            "name": "String",
                                            "children": [
                                                { "name": "final class - immutable" },
                                                { "name": "Represents sequence of characters" }
                                            ]
                                        },
                                        {
                                            "name": "Wrapper Classes",
                                            "children": [
                                                {
                                                    "name": "Boolean",
                                                    "children": [
                                                        { "name": "Wraps primitive: boolean" },
                                                        { "name": "Constants: TRUE, FALSE" },
                                                        { "name": "Ex:- Boolean flag = true;" }
                                                    ]
                                                },
                                                {
                                                    "name": "Character",
                                                    "children": [
                                                        { "name": "Wraps primitive: char" },
                                                        { "name": "Ex:- Character ch = 'A';" }
                                                    ]
                                                },
                                                {
                                                    "name": "Number (abstract class)",
                                                    "children": [
                                                        {
                                                            "name": "Byte",
                                                            "children": [
                                                                { "name": "Wraps primitive: byte" },
                                                                { "name": "Constants: MIN_VALUE = -128, MAX_VALUE = 127" },
                                                                {
                                                                    "name": "Methods of Byte",
                                                                    "children": [
                                                                        { "name": ".parseByte(String s) → converts String to primitive byte" },
                                                                        { "name": ".valueOf(byte b) → returns Byte object" },
                                                                        { "name": ".toString() → converts Byte to String" },
                                                                        { "name": ".compareTo(Byte b) → compares two Byte objects" },
                                                                        { "name": ".byteValue() → converts Byte object to primitive byte" }
                                                                    ]
                                                                },
                                                                { "name": "Ex:- Byte b = 25;" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Short",
                                                            "children": [
                                                                { "name": "Wraps primitive: short" },
                                                                { "name": "Constants: MIN_VALUE = -32,768, MAX_VALUE = 32,767" },
                                                                {
                                                                    "name": "Methods of Short",
                                                                    "children": [
                                                                        { "name": ".parseShort(String s) → converts String to primitive short" },
                                                                        { "name": ".valueOf(short s) → returns Short object" },
                                                                        { "name": ".toString() → converts Short to String" },
                                                                        { "name": ".compareTo(Short s) → compares two Short objects" },
                                                                        { "name": ".shortValue() → converts Short object to primitive short" }
                                                                    ]
                                                                },
                                                                { "name": "Ex:- Short s = 30000;" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Integer",
                                                            "children": [
                                                                { "name": "Wraps primitive: int" },
                                                                { "name": "Constants: MIN_VALUE, MAX_VALUE, SIZE = 32" },
                                                                {
                                                                    "name": "Methods of Integer",
                                                                    "children": [
                                                                        { "name": ".parseInt(String s) → converts String to primitive int" },
                                                                        { "name": ".valueOf(int i) → returns Integer object" },
                                                                        { "name": ".toBinaryString(int i) → converts int to binary String" },
                                                                        { "name": ".toHexString(int i) → converts int to hexadecimal String" },
                                                                        { "name": ".compare(int x, int y) → compares two ints" },
                                                                        { "name": ".max(int a, int b) → returns larger value" },
                                                                        { "name": ".min(int a, int b) → returns smaller value" },
                                                                        { "name": ".sum(int a, int b) → adds two ints" },
                                                                        { "name": ".intValue() → converts Integer object to primitive int" }
                                                                    ]
                                                                },
                                                                { "name": "Ex:- Integer num = 95;" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Long",
                                                            "children": [
                                                                { "name": "Wraps primitive: long" },
                                                                { "name": "Constants: MIN_VALUE, MAX_VALUE, SIZE = 64" },
                                                                {
                                                                    "name": "Methods of Long",
                                                                    "children": [
                                                                        { "name": ".parseLong(String s) → converts String to primitive long" },
                                                                        { "name": ".valueOf(long l) → returns Long object" },
                                                                        { "name": ".compare(long x, long y) → compares two longs" },
                                                                        { "name": ".max(long a, long b) → returns larger value" },
                                                                        { "name": ".min(long a, long b) → returns smaller value" },
                                                                        { "name": ".sum(long a, long b) → adds two longs" },
                                                                        { "name": ".longValue() → converts Long object to primitive long" }
                                                                    ]
                                                                },
                                                                { "name": "Ex:- Long pop = 7800000000L;" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Float",
                                                            "children": [
                                                                { "name": "Wraps primitive: float" },
                                                                { "name": "Constants: MIN_VALUE, MAX_VALUE, NaN, POSITIVE_INFINITY, NEGATIVE_INFINITY" },
                                                                {
                                                                    "name": "Methods of Float",
                                                                    "children": [
                                                                        { "name": ".parseFloat(String s) → converts String to primitive float" },
                                                                        { "name": ".valueOf(float f) → returns Float object" },
                                                                        { "name": ".isNaN(float v) → checks if value is NaN" },
                                                                        { "name": ".isInfinite(float v) → checks if value is infinite" },
                                                                        { "name": ".compare(float x, float y) → compares two floats" },
                                                                        { "name": ".floatValue() → converts Float object to primitive float" }
                                                                    ]
                                                                },
                                                                { "name": "Ex:- Float price = 99.5f;" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Double",
                                                            "children": [
                                                                { "name": "Wraps primitive: double" },
                                                                { "name": "Constants: MIN_VALUE, MAX_VALUE, NaN, POSITIVE_INFINITY, NEGATIVE_INFINITY" },
                                                                {
                                                                    "name": "Methods of Double",
                                                                    "children": [
                                                                        { "name": ".parseDouble(String s) → converts String to primitive double" },
                                                                        { "name": ".valueOf(double d) → returns Double object" },
                                                                        { "name": ".isNaN(double v) → checks if value is NaN" },
                                                                        { "name": ".isInfinite(double v) → checks if value is infinite" },
                                                                        { "name": ".compare(double x, double y) → compares two doubles" },
                                                                        { "name": ".doubleValue() → converts Double object to primitive double" }
                                                                    ]
                                                                },
                                                                { "name": "Ex:- Double pi = 3.1415926535;" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "BigInteger",
                                                            "children": [
                                                                { "name": "Immutable arbitrary-precision integers" },
                                                                { "name": "No limit on size" },
                                                                {
                                                                    "name": "Methods of BigInteger",
                                                                    "children": [
                                                                        { "name": ".add(BigInteger val) → adds two BigInteger values" },
                                                                        { "name": ".subtract(BigInteger val) → subtracts BigInteger values" },
                                                                        { "name": ".multiply(BigInteger val) → multiplies BigInteger values" },
                                                                        { "name": ".divide(BigInteger val) → divides BigInteger values" },
                                                                        { "name": ".mod(BigInteger val) → returns remainder" },
                                                                        { "name": ".pow(int exponent) → raises value to power" },
                                                                        { "name": ".gcd(BigInteger val) → finds greatest common divisor" },
                                                                        { "name": ".compareTo(BigInteger val) → compares two BigInteger values" }
                                                                    ]
                                                                },
                                                                { "name": "Ex:- BigInteger big = new BigInteger(\"123456789012345678901234567890\");" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "BigDecimal",
                                                            "children": [
                                                                { "name": "Immutable arbitrary-precision decimal numbers" },
                                                                { "name": "Used for precise monetary/financial calculations" },
                                                                {
                                                                    "name": "Methods of BigDecimal",
                                                                    "children": [
                                                                        { "name": ".add(BigDecimal val) → adds two BigDecimal values" },
                                                                        { "name": ".subtract(BigDecimal val) → subtracts BigDecimal values" },
                                                                        { "name": ".multiply(BigDecimal val) → multiplies BigDecimal values" },
                                                                        { "name": ".divide(BigDecimal val) → divides BigDecimal values" },
                                                                        { "name": ".setScale(int scale) → sets decimal precision/rounding scale" },
                                                                        { "name": ".compareTo(BigDecimal val) → compares two BigDecimal values" },
                                                                        { "name": ".round(MathContext mc) → rounds value using MathContext" }
                                                                    ]
                                                                },
                                                                { "name": "Ex:- BigDecimal price = new BigDecimal(\"19.99\");" }
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
                                                    "name": "Error vs Exception",
                                                    "children": [
                                                        { "name": "Error → Serious JVM/system-level problem" },
                                                        { "name": "Exception → Application-level problem that can often be handled" },
                                                        { "name": "Errors are usually unrecoverable" },
                                                        { "name": "Exceptions are usually recoverable" },
                                                        { "name": "Errors occur due to JVM/resource failures" },
                                                        { "name": "Exceptions usually occur due to programmer/input/runtime issues" },
                                                        { "name": "Errors should generally NOT be caught" },
                                                        { "name": "Exceptions are expected to be caught or handled" }
                                                    ]
                                                },
                                                {
                                                    "name": "Error",
                                                    "children": [
                                                        { "name": "Serious problem caused by JVM/system" },
                                                        {
                                                            "name": "Common Errors",
                                                            "children": [
                                                                { "name": "OutOfMemoryError → JVM runs out of heap memory" },
                                                                { "name": "StackOverflowError → infinite/deep recursion exhausts stack" },
                                                                { "name": "VirtualMachineError → JVM internal failure" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Note",
                                                            "children": [
                                                                { "name": "Should generally NOT be caught" },
                                                                { "name": "Application usually cannot recover safely" }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Exception",
                                                    "children": [
                                                        { "name": "Problems that application may recover from" },
                                                        {
                                                            "name": "Checked Exceptions (Compiletime Exception)",
                                                            "children": [
                                                                { "name": "Checked at compile-time" },
                                                                { "name": "Must be caught or declared using throws" },
                                                                {
                                                                    "name": "Common Checked Exceptions",
                                                                    "children": [
                                                                        { "name": "IOException → file/input-output operation failure" },
                                                                        { "name": "SQLException → database access failure" },
                                                                        { "name": "ClassNotFoundException → class loader cannot find class" },
                                                                        { "name": "FileNotFoundException → requested file does not exist" }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Unchecked Exceptions (RuntimeException)",
                                                            "children": [
                                                                { "name": "Occurs during program execution" },
                                                                { "name": "Optional to catch" },
                                                                { "name": "Usually caused by programming mistakes" },
                                                                {
                                                                    "name": "Common Runtime Exceptions",
                                                                    "children": [
                                                                        { "name": "NullPointerException → accessing member on null reference" },
                                                                        { "name": "IllegalArgumentException → invalid argument passed to method" },
                                                                        { "name": "ArithmeticException → illegal arithmetic operation (ex: divide by zero)" },
                                                                        { "name": "IndexOutOfBoundsException → invalid index access" },
                                                                        { "name": "ArrayIndexOutOfBoundsException → invalid array index" },
                                                                        { "name": "StringIndexOutOfBoundsException → invalid String index" },
                                                                        { "name": "ClassCastException → invalid object type casting" },
                                                                        { "name": "IllegalStateException → method called at wrong object state" },
                                                                        { "name": "UnsupportedOperationException → operation not supported" }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Class",
                                            "children": [
                                                { "name": "Represents a class/interface at runtime" },
                                                { "name": "Methods: getName(), getMethods(), getFields(), forName()" },
                                                { "name": "Used in reflection" }
                                            ]
                                        },
                                        {
                                            "name": "Enum",
                                            "children": [
                                                { "name": "Base class for all enumerations" },
                                                { "name": "Methods: values(), valueOf(), ordinal()" },
                                                { "name": "Ex:- enum Color { RED, GREEN, BLUE }" }
                                            ]
                                        },
                                        {
                                            "name": "System",
                                            "children": [
                                                { "name": "Final class - cannot be instantiated" },
                                                { "name": "Methods: exit(), currentTimeMillis(), arraycopy(), gc()" },
                                                { "name": "Properties: out, err, in" }
                                            ]
                                        },
                                        {
                                            "name": "Thread",
                                            "children": [
                                                { "name": "Represents a thread of execution" },
                                                { "name": "Methods: start(), run(), sleep(), join(), interrupt()" },
                                                { "name": "Implements: Runnable" }
                                            ]
                                        },
                                        {
                                            "name": "Math",
                                            "children": [
                                                { "name": "Final class - utility methods" },
                                                { "name": "Methods: abs(), sqrt(), pow(), sin(), cos(), min(), max(), random()" }
                                            ]
                                        },
                                        {
                                            "name": "Collections",
                                            "children": [
                                                { "name": "Final class - utility methods for collections" },
                                                { "name": "All methods are static" },
                                                {
                                                    "name": "Methods of Collections",
                                                    "children": [
                                                        { "name": ".sort(List<T> list) → sorts list in ascending order" },
                                                        { "name": ".sort(List<T> list, Comparator<T> c) → sorts with custom comparator" },
                                                        { "name": ".shuffle(List<?> list) → randomly shuffles list" },
                                                        { "name": ".reverse(List<?> list) → reverses list order" },
                                                        { "name": ".binarySearch(List<T> list, T key) → binary search in sorted list" },
                                                        { "name": ".max(Collection<T> coll) → returns maximum element" },
                                                        { "name": ".min(Collection<T> coll) → returns minimum element" },
                                                        { "name": ".frequency(Collection<?> c, Object o) → counts occurrences" },
                                                        { "name": ".disjoint(Collection<?> c1, Collection<?> c2) → checks if no common elements" },
                                                        { "name": ".unmodifiableList(List<T> list) → returns immutable list view" },
                                                        { "name": ".unmodifiableSet(Set<T> set) → returns immutable set view" },
                                                        { "name": ".unmodifiableMap(Map<K,V> m) → returns immutable map view" },
                                                        { "name": ".synchronizedList(List<T> list) → returns thread-safe list" },
                                                        { "name": ".synchronizedSet(Set<T> set) → returns thread-safe set" },
                                                        { "name": ".synchronizedMap(Map<K,V> m) → returns thread-safe map" },
                                                        { "name": ".emptyList() → returns immutable empty list" },
                                                        { "name": ".emptySet() → returns immutable empty set" },
                                                        { "name": ".emptyMap() → returns immutable empty map" },
                                                        { "name": ".singletonList(T o) → returns immutable list with single element" },
                                                        { "name": ".singleton(T o) → returns immutable set with single element" },
                                                        { "name": ".singletonMap(K key, V value) → returns immutable map with single entry" },
                                                        { "name": ".copy(List<T> dest, List<S> src) → copies all elements from src to dest" },
                                                        { "name": ".fill(List<T> list, T obj) → replaces all elements with obj" },
                                                        { "name": ".rotate(List<?> list, int distance) → rotates list by distance" },
                                                        { "name": ".swap(List<?> list, int i, int j) → swaps elements at indices i and j" },
                                                        { "name": ".addAll(Collection<T> c, T... elements) → adds all elements to collection" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "name": "StringBuilder",
                                            "children": [
                                                { "name": "Mutable sequence of characters" },
                                                { "name": "Not thread-safe (faster)" },
                                                { "name": "Methods: append(), insert(), delete(), reverse(), toString()" }
                                            ]
                                        },
                                        {
                                            "name": "StringBuffer",
                                            "children": [
                                                { "name": "Mutable sequence of characters" },
                                                { "name": "Thread-safe (synchronized)" },
                                                { "name": "Methods: append(), insert(), delete(), reverse(), toString()" }
                                            ]
                                        },
                                        {
                                            "name": "Runtime",
                                            "children": [
                                                { "name": "Singleton class" },
                                                { "name": "Methods: getRuntime(), exec(), availableProcessors(), totalMemory()" }
                                            ]
                                        },
                                        {
                                            "name": "Process",
                                            "children": [
                                                { "name": "Represents an external process" },
                                                { "name": "Obtained from Runtime.exec()" }
                                            ]
                                        },
                                        {
                                            "name": "Iterable (interface)",
                                            "children": [
                                                { "name": "Root interface for objects that can be iterated using loop" },
                                                { "name": "Enables enhanced for-each loop" },
                                                { "name": "Defines iterator() method" },
                                                {
                                                    "name": "Methods of Iterable",
                                                    "children": [
                                                        { "name": ".iterator() → returns Iterator object" },
                                                        { "name": ".forEach() → performs action for each element" },
                                                        { "name": ".spliterator() → used for parallel traversal/streams" }
                                                    ]
                                                },
                                                { "name": "Ex:- for(String s : list) { System.out.println(s); }" },
                                                {
                                                    "name": "Collection (interface)",
                                                    "children": [
                                                        { "name": "Base interface for Java Collection Framework" },
                                                        { "name": "Represents group of objects/elements" },
                                                        {
                                                            "name": "Methods of Collection",
                                                            "children": [
                                                                { "name": ".add(E e) → adds element" },
                                                                { "name": ".remove(Object o) → removes element" },
                                                                { "name": ".contains(Object o) → checks existence" },
                                                                { "name": ".size() → returns number of elements" },
                                                                { "name": ".isEmpty() → checks if empty" },
                                                                { "name": ".clear() → removes all elements" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "List (interface - ordered, allows duplicates)",
                                                            "children": [
                                                                { "name": "Maintains insertion order" },
                                                                { "name": "Allows duplicate elements" },
                                                                { "name": "Supports index-based access" },
                                                                {
                                                                    "name": "Methods of List",
                                                                    "children": [
                                                                        { "name": ".get(int index) → retrieves element by index" },
                                                                        { "name": ".set(int index, E element) → replaces element" },
                                                                        { "name": ".add(int index, E element) → inserts at index" },
                                                                        { "name": ".remove(int index) → removes by index" },
                                                                        { "name": ".indexOf(Object o) → returns first matching index" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "ArrayList",
                                                                    "children": [
                                                                        { "name": "Resizable array implementation" },
                                                                        { "name": "Random access: O(1)" },
                                                                        { "name": "Add/Remove at end: O(1) amortized" },
                                                                        { "name": "Add/Remove at middle: O(n)" },
                                                                        {
                                                                            "name": "Methods of ArrayList",
                                                                            "children": [
                                                                                { "name": ".add(E e) → appends element" },
                                                                                { "name": ".get(int index) → fast random access" },
                                                                                { "name": ".remove(int index) → removes by index" },
                                                                                { "name": ".contains(Object o) → checks existence" },
                                                                                { "name": ".trimToSize() → reduces capacity to current size" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "LinkedList",
                                                                    "children": [
                                                                        { "name": "Doubly linked list implementation" },
                                                                        { "name": "Sequential access: O(n)" },
                                                                        { "name": "Add/Remove at ends: O(1)" },
                                                                        { "name": "Implements: List, Deque, Queue" },
                                                                        {
                                                                            "name": "Methods of LinkedList",
                                                                            "children": [
                                                                                { "name": ".addFirst(E e) → inserts at beginning" },
                                                                                { "name": ".addLast(E e) → inserts at end" },
                                                                                { "name": ".removeFirst() → removes first element" },
                                                                                { "name": ".removeLast() → removes last element" },
                                                                                { "name": ".peek() → retrieves first element without removal" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "Vector",
                                                                    "children": [
                                                                        { "name": "Legacy resizable array (like ArrayList)" },
                                                                        { "name": "Thread-safe (synchronized)" },
                                                                        { "name": "Deprecated in favor of ArrayList" },
                                                                        {
                                                                            "name": "Methods of Vector",
                                                                            "children": [
                                                                                { "name": ".addElement(E obj) → adds element" },
                                                                                { "name": ".elementAt(int index) → retrieves by index" },
                                                                                { "name": ".capacity() → returns current capacity" },
                                                                                { "name": ".removeElement(Object obj) → removes element" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "CopyOnWriteArrayList",
                                                                    "children": [
                                                                        { "name": "Thread-safe for concurrent reads" },
                                                                        { "name": "Creates copy on modification" },
                                                                        { "name": "Good for read-heavy operations" },
                                                                        {
                                                                            "name": "Methods of CopyOnWriteArrayList",
                                                                            "children": [
                                                                                { "name": ".add(E e) → adds element with internal copy" },
                                                                                { "name": ".remove(Object o) → removes safely during concurrency" },
                                                                                { "name": ".iterator() → returns snapshot iterator" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Set (interface - unordered, NO duplicates)",
                                                            "children": [
                                                                { "name": "Does NOT allow duplicate elements" },
                                                                { "name": "Usually unordered (depends on implementation)" },
                                                                {
                                                                    "name": "Methods of Set",
                                                                    "children": [
                                                                        { "name": ".add(E e) → adds element if not already present" },
                                                                        { "name": ".remove(Object o) → removes element" },
                                                                        { "name": ".contains(Object o) → checks existence" },
                                                                        { "name": ".size() → returns number of elements" },
                                                                        { "name": ".clear() → removes all elements" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "HashSet",
                                                                    "children": [
                                                                        { "name": "Hash table based" },
                                                                        { "name": "Average add/remove/contains: O(1)" },
                                                                        { "name": "No insertion order guarantee" },
                                                                        { "name": "Allows one null value" },
                                                                        {
                                                                            "name": "Methods of HashSet",
                                                                            "children": [
                                                                                { "name": ".add(E e) → inserts element" },
                                                                                { "name": ".contains(Object o) → checks existence" },
                                                                                { "name": ".remove(Object o) → removes element" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "LinkedHashSet",
                                                                    "children": [
                                                                        { "name": "Maintains insertion order" },
                                                                        { "name": "Internally uses linked list + hash table" },
                                                                        {
                                                                            "name": "Methods of LinkedHashSet",
                                                                            "children": [
                                                                                { "name": ".add(E e) → inserts while preserving order" },
                                                                                { "name": ".iterator() → iterates in insertion order" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "TreeSet",
                                                                    "children": [
                                                                        { "name": "Red-Black tree based" },
                                                                        { "name": "Stores elements in sorted order" },
                                                                        { "name": "add/remove/contains: O(log n)" },
                                                                        {
                                                                            "name": "Methods of TreeSet",
                                                                            "children": [
                                                                                { "name": ".first() → returns smallest element" },
                                                                                { "name": ".last() → returns largest element" },
                                                                                { "name": ".floor(E e) → greatest element <= given element" },
                                                                                { "name": ".ceiling(E e) → smallest element >= given element" },
                                                                                { "name": ".higher(E e) → next greater element" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "CopyOnWriteArraySet",
                                                                    "children": [
                                                                        { "name": "Thread-safe Set implementation" },
                                                                        { "name": "Best for read-heavy concurrency" },
                                                                        {
                                                                            "name": "Methods of CopyOnWriteArraySet",
                                                                            "children": [
                                                                                { "name": ".add(E e) → safely adds element" },
                                                                                { "name": ".iterator() → snapshot iterator" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "EnumSet",
                                                                    "children": [
                                                                        { "name": "Optimized Set for enum types" },
                                                                        { "name": "Very memory efficient" },
                                                                        {
                                                                            "name": "Methods of EnumSet",
                                                                            "children": [
                                                                                { "name": ".of() → creates EnumSet with values" },
                                                                                { "name": ".allOf(Class<E>) → includes all enum constants" },
                                                                                { "name": ".noneOf(Class<E>) → empty EnumSet" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Queue (interface - FIFO by default)",
                                                            "children": [
                                                                { "name": "Typically follows FIFO (First In First Out)" },
                                                                {
                                                                    "name": "Methods of Queue",
                                                                    "children": [
                                                                        { "name": ".offer(E e) → inserts element" },
                                                                        { "name": ".poll() → removes and returns head" },
                                                                        { "name": ".peek() → retrieves head without removal" },
                                                                        { "name": ".remove() → removes head (throws exception if empty)" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "PriorityQueue",
                                                                    "children": [
                                                                        { "name": "Min-heap based by default" },
                                                                        { "name": "Elements retrieved in priority order" },
                                                                        {
                                                                            "name": "Methods of PriorityQueue",
                                                                            "children": [
                                                                                { "name": ".offer(E e) → inserts element into heap" },
                                                                                { "name": ".poll() → removes smallest/highest priority element" },
                                                                                { "name": ".peek() → views highest priority element" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "ConcurrentLinkedQueue",
                                                                    "children": [
                                                                        { "name": "Thread-safe non-blocking queue" },
                                                                        { "name": "Uses lock-free algorithm" },
                                                                        {
                                                                            "name": "Methods of ConcurrentLinkedQueue",
                                                                            "children": [
                                                                                { "name": ".offer(E e) → thread-safe insert" },
                                                                                { "name": ".poll() → thread-safe removal" },
                                                                                { "name": ".peek() → safely retrieves head" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Deque (Double-ended Queue - FIFO/LIFO)",
                                                            "children": [
                                                                { "name": "Supports insertion/removal from both ends" },
                                                                { "name": "Can work as Queue or Stack" },
                                                                {
                                                                    "name": "Methods of Deque",
                                                                    "children": [
                                                                        { "name": ".addFirst(E e) → inserts at front (throws exception if fails)" },
                                                                        { "name": ".addLast(E e) → inserts at rear" },
                                                                        { "name": ".offerFirst(E e) → inserts at front safely" },
                                                                        { "name": ".offerLast(E e) → inserts at rear safely" },
                                                                        { "name": ".removeFirst() → removes front element" },
                                                                        { "name": ".removeLast() → removes rear element" },
                                                                        { "name": ".pollFirst() → removes front safely (returns null if empty)" },
                                                                        { "name": ".pollLast() → removes rear safely" },
                                                                        { "name": ".getFirst() → retrieves front element" },
                                                                        { "name": ".getLast() → retrieves rear element" },
                                                                        { "name": ".peekFirst() → views front safely" },
                                                                        { "name": ".peekLast() → views rear safely" },
                                                                        { "name": ".push(E e) → stack push operation" },
                                                                        { "name": ".pop() → stack pop operation" },
                                                                        { "name": ".contains(Object o) → checks existence" },
                                                                        { "name": ".size() → returns number of elements" },
                                                                        { "name": ".iterator() → traverses front → rear" },
                                                                        { "name": ".descendingIterator() → traverses rear → front" }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "ArrayDeque",
                                                                    "children": [
                                                                        { "name": "Efficient double-ended queue" },
                                                                        { "name": "Preferred over Stack class" },
                                                                        {
                                                                            "name": "Methods of ArrayDeque",
                                                                            "children": [
                                                                                { "name": ".push(E e) → inserts at front" },
                                                                                { "name": ".pop() → removes from front" },
                                                                                { "name": ".peek() → retrieves front element" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "LinkedList (also implements Deque)",
                                                                    "children": [
                                                                        {
                                                                            "name": "Methods of LinkedList as Deque",
                                                                            "children": [
                                                                                { "name": ".addFirst(E e) → inserts at beginning" },
                                                                                { "name": ".addLast(E e) → inserts at end" },
                                                                                { "name": ".removeFirst() → removes first node" },
                                                                                { "name": ".removeLast() → removes last node" }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "name": "ConcurrentLinkedDeque",
                                                                    "children": [
                                                                        { "name": "Thread-safe Deque implementation" },
                                                                        {
                                                                            "name": "Methods of ConcurrentLinkedDeque",
                                                                            "children": [
                                                                                { "name": ".offerFirst(E e) → thread-safe insert at front" },
                                                                                { "name": ".offerLast(E e) → thread-safe insert at rear" },
                                                                                { "name": ".pollFirst() → thread-safe remove from front" },
                                                                                { "name": ".pollLast() → thread-safe remove from rear" }
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
                                            "name": "Map (interface)",
                                            "children": [
                                                { "name": "Stores data as key-value pairs" },
                                                { "name": "Keys are unique" },
                                                { "name": "Values can be duplicated" },
                                                {
                                                    "name": "Methods of Map",
                                                    "children": [
                                                        { "name": ".put(K key, V value) → inserts/replaces key-value pair" },
                                                        { "name": ".get(Object key) → retrieves value using key" },
                                                        { "name": ".remove(Object key) → removes key-value pair" },
                                                        { "name": ".containsKey(Object key) → checks if key exists" },
                                                        { "name": ".containsValue(Object value) → checks if value exists" },
                                                        { "name": ".keySet() → returns all keys as Set" },
                                                        { "name": ".values() → returns all values as Collection" },
                                                        { "name": ".entrySet() → returns key-value entries as Set" },
                                                        { "name": ".putIfAbsent(K key, V value) → inserts only if key absent" },
                                                        { "name": ".getOrDefault(Object key, V defaultVal) → returns value or default" },
                                                        { "name": ".replace(K key, V value) → replaces existing value" },
                                                        { "name": ".size() → returns number of entries" },
                                                        { "name": ".clear() → removes all entries" }
                                                    ]
                                                },
                                                {
                                                    "name": "HashMap",
                                                    "children": [
                                                        { "name": "Hash table based" },
                                                        { "name": "Average get/put/remove: O(1)" },
                                                        { "name": "Allows one null key and multiple null values" },
                                                        { "name": "Not thread-safe" },
                                                        {
                                                            "name": "Methods of HashMap",
                                                            "children": [
                                                                { "name": "new HashMap<>() → HashMap<K,V> → creates empty HashMap" },
                                                                { "name": ".put(K key, V value) → V → inserts/updates key-value pair" },
                                                                { "name": ".get(Object key) → V → retrieves value using key" },
                                                                { "name": ".containsKey(Object key) → boolean → checks if key exists" },
                                                                { "name": ".containsValue(Object value) → boolean → checks if value exists" },
                                                                { "name": ".remove(Object key) → V → removes key-value pair" },
                                                                { "name": ".size() → int → returns number of entries" },
                                                                { "name": ".isEmpty() → boolean → checks if map is empty" },
                                                                { "name": ".clear() → void → removes all entries" },
                                                                { "name": ".keySet() → Set<K> → returns all keys" },
                                                                { "name": ".values() → Collection<V> → returns all values" },
                                                                { "name": ".entrySet() → Set<Map.Entry<K,V>> → returns key-value entries" },
                                                                { "name": ".getOrDefault(K key, V defaultVal) → V → returns default if key absent" },
                                                                { "name": ".putIfAbsent(K key, V value) → V → inserts only if key absent" },
                                                                { "name": ".replace(K key, V value) → V → replaces existing value" },
                                                                { "name": ".computeIfAbsent() → V → computes value if key missing" },
                                                                { "name": ".merge() → V → merges values" }
                                                            ]
                                                        },
                                                        {
                                                            "name": "Traversal",
                                                            "children": [
                                                                { "name": "Ex:- for(Map.Entry<Integer,String> entry : map.entrySet()) { System.out.println(entry.getKey() + \" \" + entry.getValue()); }" }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "LinkedHashMap",
                                                    "children": [
                                                        { "name": "Hash table + doubly linked list" },
                                                        { "name": "Maintains insertion order (or access order)" },
                                                        { "name": "O(1) operations like HashMap" },
                                                        {
                                                            "name": "Methods of LinkedHashMap",
                                                            "children": [
                                                                { "name": ".put(K key, V value) → inserts while preserving order" },
                                                                { "name": ".get(Object key) → can update access order" },
                                                                { "name": ".removeEldestEntry() → useful for LRU cache" }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "TreeMap",
                                                    "children": [
                                                        { "name": "Red-Black tree based" },
                                                        { "name": "Sorted by key (natural/custom ordering)" },
                                                        { "name": "get/put/remove: O(log n)" },
                                                        {
                                                            "name": "Methods of TreeMap",
                                                            "children": [
                                                                { "name": ".firstKey() → returns smallest key" },
                                                                { "name": ".lastKey() → returns largest key" },
                                                                { "name": ".floorKey(K key) → greatest key <= given key" },
                                                                { "name": ".ceilingKey(K key) → smallest key >= given key" },
                                                                { "name": ".higherKey(K key) → next greater key" },
                                                                { "name": ".lowerKey(K key) → next smaller key" }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "Hashtable",
                                                    "children": [
                                                        { "name": "Legacy synchronized hash table" },
                                                        { "name": "Thread-safe" },
                                                        { "name": "Slower than HashMap" },
                                                        { "name": "Does NOT allow null key/value" },
                                                        {
                                                            "name": "Methods of Hashtable",
                                                            "children": [
                                                                { "name": ".put(K key, V value) → inserts entry" },
                                                                { "name": ".get(Object key) → retrieves value" },
                                                                { "name": ".keys() → returns Enumeration of keys" },
                                                                { "name": ".elements() → returns Enumeration of values" }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "ConcurrentHashMap",
                                                    "children": [
                                                        { "name": "Thread-safe HashMap" },
                                                        { "name": "High concurrency support" },
                                                        { "name": "Better performance than Hashtable" },
                                                        {
                                                            "name": "Methods of ConcurrentHashMap",
                                                            "children": [
                                                                { "name": ".putIfAbsent() → thread-safe conditional insert" },
                                                                { "name": ".computeIfAbsent() → atomically computes missing value" },
                                                                { "name": ".replace() → thread-safe replace" },
                                                                { "name": ".forEach() → concurrent traversal" }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "WeakHashMap",
                                                    "children": [
                                                        { "name": "Uses weak references for keys" },
                                                        { "name": "Keys eligible for garbage collection" },
                                                        { "name": "Useful for caches/memory-sensitive mappings" },
                                                        {
                                                            "name": "Methods of WeakHashMap",
                                                            "children": [
                                                                { "name": ".put(K key, V value) → inserts weakly referenced key" },
                                                                { "name": ".get(Object key) → retrieves value if key not GC'd" }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "IdentityHashMap",
                                                    "children": [
                                                        { "name": "Uses reference equality (==) instead of equals()" },
                                                        { "name": "Uses System.identityHashCode()" },
                                                        {
                                                            "name": "Methods of IdentityHashMap",
                                                            "children": [
                                                                { "name": ".put(K key, V value) → inserts using reference equality" },
                                                                { "name": ".get(Object key) → retrieves by object reference" }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "EnumMap",
                                                    "children": [
                                                        { "name": "Optimized Map for Enum keys" },
                                                        { "name": "Very memory efficient" },
                                                        { "name": "Maintains natural order of enum constants" },
                                                        {
                                                            "name": "Methods of EnumMap",
                                                            "children": [
                                                                { "name": ".put(Enum key, V value) → inserts enum key mapping" },
                                                                { "name": ".get(Object key) → retrieves value" }
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
                                        {
                                            "name": "Ex:-\n\nIPv4 → 192.168.1.10\nIPv6 → 2001:db8::1"
                                        }
                                    ]
                                },

                                {
                                    "name": "MAC Address",
                                    "children": [
                                        { "name": "Physical hardware address of network device" },
                                        { "name": "Works at Data Link Layer" },
                                        {
                                            "name": "Ex:-\n\n00:1A:2B:3C:4D:5E"
                                        }
                                    ]
                                },

                                {
                                    "name": "IP vs MAC",
                                    "children": [
                                        { "name": "IP → identifies device globally/logically" },
                                        { "name": "MAC → identifies device inside local network" },
                                        { "name": "IP can change, MAC usually fixed to hardware" }
                                    ]
                                },

                                {
                                    "name": "ARP (Address Resolution Protocol)",
                                    "children": [
                                        { "name": "Converts IP address → MAC address in local network" },
                                        {
                                            "name": "Ex:-\n\n\"Who has 192.168.1.5?\"\n→ Device replies with MAC address"
                                        }
                                    ]
                                },

                                {
                                    "name": "Gateway & Router",
                                    "children": [
                                        { "name": "Gateway → entry/exit point of local network" },
                                        { "name": "Router forwards packets between networks" },
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
                                        {
                                            "name": "Ex:-\n\nWiFi adapter\nEthernet card"
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
                                                {
                                                    "name": "Ex:-\n\nHTTP/HTTPS\nDatabase connections\nFile transfer"
                                                }
                                            ]
                                        },

                                        {
                                            "name": "UDP",
                                            "children": [
                                                { "name": "Connectionless protocol" },
                                                { "name": "No guarantee of order or delivery" },
                                                { "name": "Lower overhead and lower latency" },
                                                {
                                                    "name": "Ex:-\n\nGaming\nVideo streaming\nDNS"
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
                                                { "name": "Both sides choose random initial sequence numbers (ISN)" }
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
                                    "name": "Ports & Sockets",
                                    "children": [
                                        { "name": "Port → identifies specific service/process" },
                                        { "name": "Socket → IP + Port combination" },
                                        {
                                            "name": "Common Ports",
                                            "children": [
                                                { "name": "80 → HTTP" },
                                                { "name": "443 → HTTPS" },
                                                { "name": "3306 → MySQL" },
                                                { "name": "6379 → Redis" }
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
                                        { "name": "HTTPS → HTTP + SSL/TLS encryption" },
                                        { "name": "Stateless protocol" },
                                        {
                                            "name": "HTTP Methods",
                                            "children": [
                                                { "name": "GET → fetch data" },
                                                { "name": "POST → create data" },
                                                { "name": "PUT → update entire resource" },
                                                { "name": "PATCH → partial update" },
                                                { "name": "DELETE → remove resource" }
                                            ]
                                        },
                                        {
                                            "name": "Status Codes",
                                            "children": [
                                                { "name": "200 → Success" },
                                                { "name": "201 → Created" },
                                                { "name": "400 → Bad Request" },
                                                { "name": "401 → Unauthorized" },
                                                { "name": "404 → Not Found" },
                                                { "name": "500 → Internal Server Error" }
                                            ]
                                        }
                                    ]
                                },

                                {
                                    "name": "HTTP/1.1 vs HTTP/2",
                                    "children": [
                                        {
                                            "name": "HTTP/1.1",
                                            "children": [
                                                { "name": "One request per connection (mostly sequential)" },
                                                { "name": "Head-of-line blocking issue" }
                                            ]
                                        },
                                        {
                                            "name": "HTTP/2",
                                            "children": [
                                                { "name": "Multiplexing → multiple requests on same connection" },
                                                { "name": "Header compression" },
                                                { "name": "Binary protocol → faster" }
                                            ]
                                        }
                                    ]
                                },

                                {
                                    "name": "REST API Design",
                                    "children": [
                                        { "name": "Resource-based architecture" },
                                        { "name": "Uses HTTP methods semantically" },
                                        { "name": "Stateless communication" },
                                        {
                                            "name": "Ex:-\n\nGET /users\nPOST /users\nDELETE /users/1"
                                        }
                                    ]
                                },

                                {
                                    "name": "WebSocket",
                                    "children": [
                                        { "name": "Persistent full-duplex communication" },
                                        { "name": "Server and client can send data anytime" },
                                        { "name": "Used for real-time communication" },
                                        {
                                            "name": "Ex:-\n\nChat applications\nLive notifications\nRealtime dashboards"
                                        }
                                    ]
                                },

                                {
                                    "name": "gRPC & Protobuf",
                                    "children": [
                                        { "name": "High-performance RPC framework by Google" },
                                        { "name": "Uses HTTP/2 internally" },
                                        { "name": "Uses Protocol Buffers (binary serialization)" },
                                        { "name": "Smaller + faster than JSON" },
                                        {
                                            "name": "Used in microservice communication"
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            "name": "DNS & Security",
                            "children": [
                                {
                                    "name": "DNS (Domain Name System)",
                                    "children": [
                                        { "name": "Converts domain name → IP address" },
                                        { "name": "Works like internet phonebook" },
                                        {
                                            "name": "Flow",
                                            "children": [
                                                { "name": "Browser asks DNS resolver" },
                                                { "name": "Resolver finds IP" },
                                                { "name": "Browser connects to server" }
                                            ]
                                        },
                                        {
                                            "name": "Ex:-\n\ngoogle.com → 142.250.x.x"
                                        }
                                    ]
                                },

                                {
                                    "name": "SSL / TLS",
                                    "children": [
                                        { "name": "Provides encryption over network" },
                                        { "name": "Used in HTTPS" },
                                        { "name": "Protects against packet sniffing" },
                                        {
                                            "name": "TLS Handshake",
                                            "children": [
                                                { "name": "Exchange certificates" },
                                                { "name": "Verify server identity" },
                                                { "name": "Generate encryption keys" }
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
                                        { "name": "1. Physical" },
                                        { "name": "2. Data Link" },
                                        { "name": "3. Network" },
                                        { "name": "4. Transport" },
                                        { "name": "5. Session" },
                                        { "name": "6. Presentation" },
                                        { "name": "7. Application" }
                                    ]
                                },

                                {
                                    "name": "TCP/IP Model (4 Layers)",
                                    "children": [
                                        { "name": "1. Link Layer" },
                                        { "name": "2. Internet Layer" },
                                        { "name": "3. Transport Layer" },
                                        { "name": "4. Application Layer" }
                                    ]
                                },

                                {
                                    "name": "Public vs Private IP",
                                    "children": [
                                        { "name": "Public IP → accessible over internet" },
                                        { "name": "Private IP → used inside local networks" },
                                        {
                                            "name": "Private Ranges",
                                            "children": [
                                                { "name": "10.x.x.x" },
                                                { "name": "172.16.x.x - 172.31.x.x" },
                                                { "name": "192.168.x.x" }
                                            ]
                                        }
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
                                        {
                                            "name": "Algorithms",
                                            "children": [
                                                { "name": "Round Robin" },
                                                { "name": "Least Connections" }
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
                                                {
                                                    "name": "Ex:- Nginx"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Firewall",
                                            "children": [
                                                { "name": "Filters incoming/outgoing traffic" },
                                                { "name": "Blocks unauthorized access" }
                                            ]
                                        }
                                    ]
                                },

                                {
                                    "name": "CDN (Content Delivery Network)",
                                    "children": [
                                        { "name": "Servers distributed geographically" },
                                        { "name": "Serves static content closer to user" },
                                        { "name": "Reduces latency" },
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
                                        { "name": "Latency → delay before response starts" },
                                        { "name": "Throughput → amount of work done per second" },
                                        { "name": "Bandwidth → maximum data transfer capacity" },
                                        {
                                            "name": "Example",
                                            "children": [
                                                { "name": "High bandwidth ≠ low latency" },
                                                { "name": "Fiber internet → high bandwidth" },
                                                { "name": "Nearby server → lower latency" }
                                            ]
                                        }
                                    ]
                                },

                                {
                                    "name": "Timeouts & Retries",
                                    "children": [
                                        { "name": "Timeout → stop waiting after fixed duration" },
                                        { "name": "Retry → attempt request again after failure" },
                                        { "name": "Prevents hanging requests" },
                                        { "name": "Too many retries can overload systems" }
                                    ]
                                },

                                {
                                    "name": "Connection Pooling",
                                    "children": [
                                        { "name": "Reuse existing connections instead of creating new ones" },
                                        { "name": "Reduces connection overhead" },
                                        {
                                            "name": "Ex:-\n\nDatabase connection pools in Spring Boot"
                                        }
                                    ]
                                },

                                {
                                    "name": "Rate Limiting",
                                    "children": [
                                        { "name": "Restricts number of requests per client" },
                                        { "name": "Protects against abuse and overload" },
                                        {
                                            "name": "Ex:-\n\n100 requests/minute per user"
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
                        { name: "REST APIs & Controllers" },
                        { name: "Dependency Injection (IoC)" },
                        { name: "Request Lifecycle" },
                        { name: "Validation & Exception Handling" },
                        {
                            name: "Security",
                            children: [
                                { name: "JWT Authentication" },
                                { name: "Spring Security Filter Chain" },
                                { name: "CORS & CSRF basics" },
                            ],
                        },
                        {
                            name: "Observability",
                            children: [
                                { name: "Logging (SLF4J, Logback)" },
                                { name: "Actuator (health, metrics)" },
                            ],
                        },
                    ],
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
            "name": "Data & Persistence (Interview-Optimized DBMS)",
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
                    "name": "Database Modeling (ER Model)",
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
                                { "name": "Weak Entity → depends on another entity for identity (Ex: Dependent depends on Employee)" }
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
                                        { "name": "SAVEPOINT → Create checkpoint inside transaction" }
                                    ]
                                },
                                {
                                    "name": "DCL (Data Control Language)",
                                    "children": [
                                        { "name": "GRANT → Give user access privileges (Ex: GRANT SELECT, INSERT ON users TO developer_role)" },
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
                                { "name": "Insertion Anomaly → Cannot insert data without all required attributes (Ex: Cannot add Course without Professor)" },
                                { "name": "Deletion Anomaly → Deleting one record loses unrelated data (Ex: Remove student → lose course info)" },
                                { "name": "Update Anomaly → Updating one value requires updating multiple places (Ex: Change professor's dept in all course records)" }
                            ]
                        },
                        {
                            "name": "First Normal Form (1NF)",
                            "children": [
                                { "name": "All attributes contain atomic (indivisible) values" },
                                { "name": "No composite or multi-valued attributes in single column" },
                                { "name": "NOT 1NF: Student(sid, name, hobbies=['Reading','Gaming'])" },
                                { "name": "IS 1NF: Student(sid, name) + Hobby(sid, hobby) separate table" }
                            ]
                        },
                        {
                            "name": "Second Normal Form (2NF)",
                            "children": [
                                { "name": "Must be in 1NF + no partial dependencies" },
                                { "name": "Every non-key attribute must depend on ENTIRE primary key" },
                                { "name": "NOT 2NF: CourseEnrollment(sid, course_id, prof_name) → prof_name depends on course_id only" },
                                { "name": "IS 2NF: Enrollment(sid, course_id) + Course(course_id, prof_name) separate" }
                            ]
                        },
                        {
                            "name": "Third Normal Form (3NF)",
                            "children": [
                                { "name": "Must be in 2NF + no transitive dependencies" },
                                { "name": "No non-key attribute depends on another non-key attribute" },
                                { "name": "NOT 3NF: Student(sid, name, dept_id, dept_name) → sid→dept_id→dept_name (transitive)" },
                                { "name": "IS 3NF: Student(sid, name, dept_id) + Department(dept_id, dept_name) separate" }
                            ]
                        },
                        {
                            "name": "Boyce-Codd Normal Form (BCNF)",
                            "children": [
                                { "name": "More strict than 3NF" },
                                { "name": "For every functional dependency X→Y, X must be candidate key" },
                                { "name": "Rarely needed in practice; 3NF sufficient for most cases" }
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
                                { "name": "\"Improves query/search performance by avoiding full table scans\"" },
                                { "name": "Works like book index → DB jumps directly to data" },
                                { "name": "Commonly implemented using B-Tree" }
                            ]
                        },
                        {
                            "name": "Types of Indexes",
                            "children": [
                                { "name": "Primary Index (Clustering) → Created on PK automatically, physically orders data, only one per table, fastest" },
                                { "name": "Secondary Index (Non-Clustering) → Created on non-PK columns, multiple allowed, points to actual data" },
                                { "name": "Unique Index → Ensures all values unique (Ex: email column)" },
                                { "name": "Composite Index → Index on multiple columns (order matters)" },
                                { "name": "B-Tree Index → Efficient for range queries + sorting (Ex: WHERE age > 20)" },
                                { "name": "Hash Index → Very fast for exact matches, NOT for range queries (Ex: WHERE email = 'x@y')" }
                            ]
                        },
                        {
                            "name": "Index Tradeoffs",
                            "children": [
                                { "name": "Benefits: Faster reads/searches" },
                                { "name": "Costs: Slower INSERT/UPDATE/DELETE, extra storage, index maintenance overhead" }
                            ]
                        },
                        {
                            "name": "When to Use Indexes",
                            "children": [
                                { "name": "Frequently searched columns" },
                                { "name": "Columns used in WHERE, JOIN, ORDER BY" },
                                { "name": "Foreign keys (for joins)" },
                                { "name": "Large tables with many SELECT queries" }
                            ]
                        },
                        {
                            "name": "Query Optimization",
                            "children": [
                                { "name": "Avoid SELECT * → specify needed columns" },
                                { "name": "Filter early using WHERE" },
                                { "name": "Use proper JOIN conditions" },
                                { "name": "Avoid deeply nested subqueries" },
                                { "name": "Use indexes on WHERE, JOIN, ORDER BY columns" }
                            ]
                        },
                        {
                            "name": "Execution Plans (EXPLAIN)",
                            "children": [
                                { "name": "\"Database strategy used to execute query\"" },
                                { "name": "Shows scans, joins, indexes, sorting operations" },
                                { "name": "PostgreSQL: EXPLAIN ANALYZE SELECT ... shows cost, rows, execution time" },
                                { "name": "Seq Scan = sequential scan (full table scan) vs Index Scan = using index" }
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
                                { "name": "Distributed Locks → Lock shared resource across servers (prevent race conditions)" }
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
                        { name: "Kafka / RabbitMQ basics" },
                        { name: "Producers & Consumers" },
                        { name: "Partitions & Consumer Groups" },
                        { name: "Retries & Dead Letter Queues" },
                    ],
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