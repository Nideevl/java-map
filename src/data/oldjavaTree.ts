export const javaTree = {
  name: "Java",
  children: [
    {
      name: "Java Language Fundamentals",
      children: [
        {
          name: "Basics",
          children: [
            {
              name: "Hello World",
              children: [
                { name: "Structure of Java Program" },
                { name: "main() method" },
                { name: "Compilation (javac)" },
                { name: "Execution (java)" },
              ],
            },
            {
              name: "Identifiers",
              children: [
                { name: "Naming Rules" },
                { name: "Naming Conventions" },
                { name: "Valid vs Invalid Identifiers" },
              ],
            },
            {
              name: "Keywords",
              children: [
                { name: "Reserved Keywords" },
                { name: "Contextual Keywords" },
                { name: "Usage Examples" },
              ],
            },
            {
              name: "Data Types",
              children: [
                {
                  name: "Primitive Types",
                  children: [
                    { name: "byte" },
                    { name: "short" },
                    { name: "int" },
                    { name: "long" },
                    { name: "float" },
                    { name: "double" },
                    { name: "char" },
                    { name: "boolean" },
                  ],
                },
                {
                  name: "Non-Primitive Types",
                  children: [
                    { name: "String" },
                    { name: "Array" },
                    { name: "Class" },
                    { name: "Interface" },
                  ],
                },
                {
                  name: "Memory Size & Range",
                  children: [
                    { name: "Integer ranges" },
                    { name: "Floating precision" },
                  ],
                },
              ],
            },
            {
              name: "Variables",
              children: [
                { name: "Local Variables" },
                { name: "Instance Variables" },
                { name: "Static Variables" },
                { name: "Final Variables" },
                { name: "Default Values" },
              ],
            },
            {
              name: "Operators",
              children: [
                {
                  name: "Arithmetic",
                  children: [{ name: "+ - * / %" }],
                },
                {
                  name: "Relational",
                  children: [{ name: "== != > < >= <=" }],
                },
                {
                  name: "Logical",
                  children: [{ name: "&& || !" }],
                },
                {
                  name: "Bitwise",
                  children: [{ name: "& | ^ ~ << >> >>>" }],
                },
                {
                  name: "Assignment",
                  children: [{ name: "= += -= *= /=" }],
                },
                {
                  name: "Unary",
                  children: [{ name: "++ --" }],
                },
                {
                  name: "Ternary",
                  children: [{ name: "condition ? a : b" }],
                },
              ],
            },
            {
              name: "Type Casting",
              children: [
                { name: "Implicit (Widening)" },
                { name: "Explicit (Narrowing)" },
                { name: "Casting Pitfalls" },
              ],
            },
            {
              name: "Comments",
              children: [
                { name: "Single-line //" },
                { name: "Multi-line /* */" },
                { name: "Documentation /** */" },
              ],
            },
            {
              name: "Packages",
              children: [
                { name: "Built-in Packages" },
                { name: "User-defined Packages" },
                { name: "package keyword" },
                { name: "import statement" },
              ],
            },
          ],
        },
        {
          name: "Input / Output (Scanner)",
          children: [
            {
              name: "Basic Console Output",
              children: [
                { name: "System.out.print()" },
                { name: "System.out.println()" },
                {
                  name: "System.out.printf()", children: [
                    { name: "Format specifiers (%d, %s, %f)" },
                    { name: "Formatting output" },
                  ]
                },
              ],
            },

            {
              name: "Scanner (User Input)",
              children: [
                { name: "Import Scanner (java.util.Scanner)" },
                {
                  name: "Creating Scanner Object", children: [
                    { name: "new Scanner(System.in)" },
                  ]
                },
                {
                  name: "Input Methods", children: [
                    { name: "nextInt()" },
                    { name: "nextDouble()" },
                    { name: "next()" },
                    { name: "nextLine()" },
                    { name: "nextBoolean()" },
                  ]
                },
                {
                  name: "Common Issues", children: [
                    { name: "nextLine() skipping input" },
                    { name: "Mixing nextInt() and nextLine()" },
                  ]
                },
                {
                  name: "Closing Scanner", children: [
                    { name: "scanner.close()" },
                    { name: "Resource leak concerns" },
                  ]
                },
              ],
            },

            {
              name: "Buffered Input (Advanced)",
              children: [
                {
                  name: "BufferedReader", children: [
                    { name: "InputStreamReader" },
                    { name: "readLine()" },
                  ]
                },
                {
                  name: "Comparison with Scanner", children: [
                    { name: "Faster performance" },
                    { name: "Less parsing convenience" },
                  ]
                },
              ],
            },

            {
              name: "File Input / Output (Intro)",
              children: [
                {
                  name: "Reading Files", children: [
                    { name: "FileReader" },
                    { name: "BufferedReader" },
                  ]
                },
                {
                  name: "Writing Files", children: [
                    { name: "FileWriter" },
                    { name: "BufferedWriter" },
                  ]
                },
                {
                  name: "File Class", children: [
                    { name: "Creating files" },
                    { name: "Checking existence" },
                  ]
                },
              ],
            },

            {
              name: "Standard Streams",
              children: [
                { name: "System.in" },
                { name: "System.out" },
                { name: "System.err" },
              ],
            },
          ],
        },
        {
          name: "Control Flow",
          children: [
            {
              name: "Conditional Statements",
              children: [
                {
                  name: "if",
                  children: [
                    { name: "Simple if" },
                    { name: "if with condition evaluation" },
                  ],
                },
                {
                  name: "if-else",
                  children: [
                    { name: "Binary branching" },
                    { name: "Nested if-else" },
                  ],
                },
                {
                  name: "else-if ladder",
                  children: [
                    { name: "Multiple conditions" },
                    { name: "Evaluation order" },
                  ],
                },
                {
                  name: "switch",
                  children: [
                    { name: "switch-case structure" },
                    { name: "break behavior" },
                    { name: "default case" },
                    { name: "switch with String (Java 7+)" },
                    {
                      name: "Switch Expressions (Java 14+)", children: [
                        { name: "Arrow syntax (->)" },
                        { name: "yield keyword" },
                      ]
                    },
                  ],
                },
              ],
            },

            {
              name: "Looping Statements",
              children: [
                {
                  name: "for loop",
                  children: [
                    { name: "Initialization, condition, update" },
                    { name: "Nested loops" },
                    { name: "Infinite loop" },
                  ],
                },
                {
                  name: "while loop",
                  children: [
                    { name: "Pre-condition loop" },
                    { name: "Use cases" },
                  ],
                },
                {
                  name: "do-while loop",
                  children: [
                    { name: "Post-condition loop" },
                    { name: "Executes at least once" },
                  ],
                },
                {
                  name: "Enhanced for loop",
                  children: [
                    { name: "for-each syntax" },
                    { name: "Used with arrays & collections" },
                  ],
                },
              ],
            },

            {
              name: "Branching Statements",
              children: [
                {
                  name: "break",
                  children: [
                    { name: "Exit loop" },
                    { name: "Used in switch" },
                    { name: "Labeled break" },
                  ],
                },
                {
                  name: "continue",
                  children: [
                    { name: "Skip iteration" },
                    { name: "Labeled continue" },
                  ],
                },
                {
                  name: "return",
                  children: [
                    { name: "Exit method" },
                    { name: "Return values" },
                    { name: "Early return pattern" },
                  ],
                },
              ],
            },

            {
              name: "Advanced Control Flow",
              children: [
                {
                  name: "Nested Control Structures",
                  children: [
                    { name: "Nested loops" },
                    { name: "Nested conditions" },
                  ],
                },
                {
                  name: "Exception-based flow",
                  children: [
                    { name: "try-catch as control flow (not recommended)" },
                  ],
                },
                {
                  name: "Short-circuit evaluation",
                  children: [
                    { name: "&& stops early" },
                    { name: "|| stops early" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Other Concepts",
          children: [
            {
              name: "Arrays",
              children: [
                { name: "Declaration & Initialization" },
                { name: "1D Arrays" },
                { name: "2D Arrays" },
                { name: "Jagged Arrays" },
                { name: "Array Traversal" },
                {
                  name: "Common Operations", children: [
                    { name: "Search" },
                    { name: "Sort" },
                  ]
                },
              ],
            },

            {
              name: "Strings",
              children: [
                { name: "String Immutability" },
                { name: "String Pool" },
                {
                  name: "Common Methods", children: [
                    { name: "length()" },
                    { name: "substring()" },
                    { name: "equals() vs ==" },
                    { name: "charAt()" },
                    { name: "indexOf()" },
                  ]
                },
              ],
            },

            {
              name: "Mutable Strings",
              children: [
                {
                  name: "StringBuilder",
                  children: [
                    { name: "Non-synchronized" },
                    { name: "Faster operations" },
                  ],
                },
                {
                  name: "StringBuffer",
                  children: [
                    { name: "Synchronized" },
                    { name: "Thread-safe" },
                  ],
                },
                {
                  name: "Common Methods",
                  children: [
                    { name: "append()" },
                    { name: "insert()" },
                    { name: "delete()" },
                    { name: "reverse()" },
                  ],
                },
              ],
            },

            {
              name: "Date & Time",
              children: [
                {
                  name: "Legacy API",
                  children: [
                    { name: "java.util.Date" },
                    { name: "java.util.Calendar" },
                  ],
                },
                {
                  name: "Modern API (java.time)",
                  children: [
                    { name: "LocalDate" },
                    { name: "LocalTime" },
                    { name: "LocalDateTime" },
                    { name: "ZonedDateTime" },
                    { name: "Period & Duration" },
                    { name: "DateTimeFormatter" },
                  ],
                },
              ],
            },

            {
              name: "Math & Utility",
              children: [
                {
                  name: "Math Class",
                  children: [
                    { name: "abs(), sqrt(), pow()" },
                    { name: "min(), max()" },
                    { name: "random()" },
                  ],
                },
                {
                  name: "Random Class",
                  children: [
                    { name: "nextInt()" },
                    { name: "nextDouble()" },
                  ],
                },
              ],
            },

            {
              name: "Wrapper Classes",
              children: [
                { name: "Primitive → Object conversion" },
                { name: "Autoboxing" },
                { name: "Unboxing" },
                {
                  name: "Common Wrappers", children: [
                    { name: "Integer" },
                    { name: "Double" },
                    { name: "Boolean" },
                  ]
                },
              ],
            },

            {
              name: "Enums",
              children: [
                { name: "Enum declaration" },
                { name: "Enum methods (values(), valueOf())" },
                { name: "Enums with fields & methods" },
                { name: "Switch with enums" },
              ],
            },

            {
              name: "Annotations",
              children: [
                {
                  name: "Built-in Annotations",
                  children: [
                    { name: "@Override" },
                    { name: "@Deprecated" },
                    { name: "@SuppressWarnings" },
                  ],
                },
                {
                  name: "Custom Annotations",
                  children: [
                    { name: "@interface keyword" },
                    { name: "Retention policy" },
                    { name: "Target types" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Java Platform (JDK → JRE → JVM)",
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
      name: "Java OOPs (Object Oriented Programming)",
      children: [
        {
          name: "OOP Basics",
          children: [
            {
              name: "Classes & Objects",
              children: [
                { name: "Class declaration" },
                { name: "Object instantiation" },
                { name: "Memory allocation (heap)" },
                { name: "Reference variables" },
                { name: "Object lifecycle" },
              ],
            },

            {
              name: "Constructors",
              children: [
                { name: "Default constructor" },
                { name: "Parameterized constructor" },
                { name: "Copy constructor (manual in Java)" },
                { name: "Constructor overloading" },
                {
                  name: "Constructor chaining", children: [
                    { name: "this()" },
                    { name: "super()" },
                  ]
                },
              ],
            },

            {
              name: "this keyword",
              children: [
                { name: "Reference to current object" },
                { name: "Resolve variable shadowing" },
                { name: "Call another constructor (this())" },
                { name: "Pass current object as argument" },
              ],
            },

            {
              name: "Methods",
              children: [
                { name: "Method declaration" },
                { name: "Method parameters & return types" },
                { name: "Method overloading" },
                { name: "Static vs instance methods" },
              ],
            },

            {
              name: "Access Modifiers",
              children: [
                { name: "public - accessible everywhere" },
                { name: "private - within class only" },
                { name: "protected - package + subclass" },
                { name: "default - package-private" },
              ],
            },

            {
              name: "Static Keyword",
              children: [
                { name: "Static variables (shared)" },
                { name: "Static methods" },
                { name: "Static block" },
                { name: "Class loading behavior" },
              ],
            },

            {
              name: "Final Keyword",
              children: [
                { name: "Final variable (constant)" },
                { name: "Final method (cannot override)" },
                { name: "Final class (cannot extend)" },
              ],
            },
          ],
        },
        {
          name: "Core OOPs Concepts",
          children: [
            {
              name: "Inheritance",
              children: [
                { name: "Single inheritance" },
                { name: "Multilevel inheritance" },
                { name: "Hierarchical inheritance" },
                { name: "Multiple inheritance (via interfaces)" },
              ],
            },
            {
              name: "Polymorphism",
              children: [
                {
                  name: "Compile Time",
                  children: [
                    { name: "Method Overloading" },
                  ],
                },
                {
                  name: "Runtime",
                  children: [
                    { name: "Method Overriding" },
                  ],
                },
              ],
            },
            {
              name: "Encapsulation",
              children: [
                { name: "public - accessible everywhere" },
                { name: "private - accessible in class only" },
                { name: "protected - accessible in package & subclasses" },
                { name: "default - package-private" },
              ],
            },
            {
              name: "Abstraction",
              children: [
                { name: "Abstract Classes" },
                { name: "Interfaces" },
              ],
            },
          ],
        },
        {
          name: "Advanced OOPs",
          children: [
            {
              name: "Nested Classes",
              children: [
                { name: "Static Nested Class" },
              ],
            },
            {
              name: "Inner Class",
              children: [
                { name: "Member Inner Class" },
                { name: "Local Inner Class" },
                { name: "Anonymous Classes" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Java Collections Framework",
      children: [
        {
          name: "Collection Hierarchy",
          children: [
            {
              name: "Collection Interface",
              children: [
                { name: "add(), remove(), contains()" },
                { name: "size(), isEmpty()" },
                { name: "iterator()" },
              ],
            },
            {
              name: "Map Interface",
              children: [
                { name: "put(), get(), remove()" },
                { name: "keySet(), values(), entrySet()" },
                { name: "containsKey(), containsValue()" },
              ],
            },
          ],
        },
        {
          name: "List",
          children: [
            {
              name: "ArrayList", children: [
                { name: "Dynamic array" },
                { name: "O(1) access" }
              ]
            },
            {
              name: "LinkedList", children: [
                { name: "Doubly-linked list" },
                { name: "O(1) insertion" }
              ]
            },
            {
              name: "Vector", children: [
                { name: "Synchronized ArrayList" }
              ]
            },
            {
              name: "Stack", children: [
                { name: "LIFO structure" }
              ]
            },
            {
              name: "CopyOnWriteArrayList", children: [
                { name: "Thread-safe" }
              ]
            },
          ],
        },
        {
          name: "Set",
          children: [
            {
              name: "HashSet", children: [
                { name: "Unordered" },
                { name: "Unique elements" }
              ]
            },
            {
              name: "LinkedHashSet", children: [
                { name: "Insertion order preserved" }
              ]
            },
            {
              name: "TreeSet", children: [
                { name: "Sorted order" }
              ]
            },
            {
              name: "EnumSet", children: [
                { name: "Optimized for enums" }
              ]
            },
          ],
        },
        {
          name: "Queue",
          children: [
            {
              name: "PriorityQueue", children: [
                { name: "Ordered by priority" }
              ]
            },
            {
              name: "ArrayQueue", children: [
                { name: "Efficient queue" }
              ]
            },
            {
              name: "LinkedList (as Queue)", children: [
                { name: "FIFO" }
              ]
            },
            {
              name: "Deque", children: [
                { name: "Double-ended queue" }
              ]
            },
          ],
        },
        {
          name: "Map",
          children: [
            {
              name: "HashMap", children: [
                { name: "O(1) average" },
                { name: "Unordered" }
              ]
            },
            {
              name: "LinkedHashMap", children: [
                { name: "Insertion order preserved" }
              ]
            },
            {
              name: "TreeMap", children: [
                { name: "Sorted by key" }
              ]
            },
            {
              name: "Hashtable", children: [
                { name: "Synchronized" }
              ]
            },
            {
              name: "ConcurrentHashMap", children: [
                { name: "Thread-safe without full lock" }
              ]
            },
            {
              name: "WeakHashMap", children: [
                { name: "Weak key references" }
              ]
            },
            {
              name: "IdentityHashMap", children: [
                { name: "Reference equality" }
              ]
            },
          ],
        },
        {
          name: "Utilities",
          children: [
            {
              name: "Collections Class",
              children: [
                { name: "sort(), reverse(), shuffle()" },
                { name: "binarySearch(), copy()" },
                { name: "min(), max(), frequency()" },
              ],
            },
            {
              name: "Arrays Class",
              children: [
                { name: "sort(), binarySearch()" },
                { name: "asList(), copyOf()" },
                { name: "fill(), equals()" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Java Streams & Functional Programming",
      children: [
        {
          name: "Stream API",
          children: [
            {
              name: "Stream Creation",
              children: [
                { name: "Collection.stream()" },
                { name: "Arrays.stream()" },
                { name: "Stream.of()" },
                { name: "Stream.generate()" },
                { name: "Stream.iterate()" },
              ],
            },
            {
              name: "Intermediate Operations",
              children: [
                { name: "map() - transform elements" },
                { name: "filter() - conditional filtering" },
                { name: "flatMap() - map and flatten" },
                { name: "distinct() - remove duplicates" },
                { name: "sorted() - order elements" },
                { name: "peek() - inspect elements" },
                { name: "limit() - limit count" },
                { name: "skip() - skip elements" },
              ],
            },
            {
              name: "Terminal Operations",
              children: [
                { name: "forEach() - iterate" },
                { name: "forEachOrdered() - ordered iteration" },
                { name: "collect() - gather into collection" },
                { name: "reduce() - combine to single value" },
                { name: "findFirst() - get first element" },
                { name: "findAny() - get any element" },
                { name: "anyMatch() - check any match" },
                { name: "allMatch() - check all match" },
                { name: "noneMatch() - check none match" },
                { name: "count() - count elements" },
                { name: "min() - minimum value" },
                { name: "max() - maximum value" },
              ],
            },
          ],
        },
        {
          name: "Collectors",
          children: [
            { name: "toList()" },
            { name: "toSet()" },
            { name: "toMap()" },
            {
              name: "groupingBy()", children: [
                { name: "Group by key" }
              ]
            },
            {
              name: "partitioningBy()", children: [
                { name: "Partition into two groups" }
              ]
            },
            {
              name: "joining()", children: [
                { name: "Join elements to string" }
              ]
            },
            {
              name: "summarizing()", children: [
                { name: "Calculate statistics" }
              ]
            },
            {
              name: "collectingAndThen()", children: [
                { name: "Apply finisher function" }
              ]
            },
          ],
        },
        {
          name: "Functional Programming",
          children: [
            {
              name: "Lambda Expressions",
              children: [
                { name: "Syntax: (args) -> body" },
                { name: "@FunctionalInterface annotation" },
              ],
            },
            {
              name: "Method References",
              children: [
                { name: "Static references (Class::method)" },
                { name: "Instance references (obj::method)" },
                { name: "Constructor references (Class::new)" },
              ],
            },
            {
              name: "Functional Interfaces",
              children: [
                { name: "Predicate<T> - returns boolean" },
                { name: "Function<T,R> - transform T to R" },
                { name: "Consumer<T> - accept and process" },
                { name: "Supplier<T> - produce values" },
                { name: "BiFunction<T,U,R> - two inputs" },
                { name: "BiConsumer<T,U>" },
                { name: "BiPredicate<T,U>" },
              ],
            },
          ],
        },
        {
          name: "Optional",
          children: [
            { name: "Optional.of()" },
            { name: "Optional.ofNullable()" },
            { name: "Optional.empty()" },
            { name: "get()" },
            { name: "orElse()" },
            { name: "orElseGet()" },
            { name: "orElseThrow()" },
          ],
        },
      ],
    },
    {
      name: "Exception Handling",
      children: [
        {
          name: "Basics",
          children: [
            { name: "Try - wrap exception-prone code" },
            { name: "Catch - handle exception" },
            { name: "Finally - cleanup code" },
            { name: "Throw - throw explicitly" },
            { name: "Throws - declare exceptions" },
          ],
        },
        {
          name: "Exception Hierarchy",
          children: [
            {
              name: "Throwable",
              children: [
                {
                  name: "Exception",
                  children: [
                    { name: "Checked (IOException, SQLException)" },
                    { name: "Unchecked (RuntimeException)" },
                  ],
                },
                {
                  name: "Error",
                  children: [
                    { name: "OutOfMemoryError" },
                    { name: "StackOverflowError" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Custom Exceptions",
          children: [
            { name: "Extend Exception class" },
            { name: "Extend RuntimeException" },
            { name: "Custom handling" },
          ],
        },
        {
          name: "Try-with-Resources",
          children: [
            {
              name: "AutoCloseable Interface",
              children: [
                { name: "Implement close() method" },
              ],
            },
            {
              name: "Resource Management",
              children: [
                { name: "Automatic closing" },
                { name: "Exception suppression" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Concurrency & Multithreading",
      children: [
        {
          name: "Thread Basics",
          children: [
            {
              name: "Thread Class", children: [
                { name: "Extend Thread" }
              ]
            },
            {
              name: "Runnable Interface", children: [
                { name: "Implement for thread logic" }
              ]
            },
            {
              name: "Thread Lifecycle",
              children: [
                { name: "New - thread created" },
                { name: "Runnable - ready to run" },
                { name: "Running - currently executing" },
                { name: "Blocked - waiting for resource" },
                { name: "Waiting - waiting for other thread" },
                { name: "Timed Waiting - waiting with timeout" },
                { name: "Terminated - execution complete" },
              ],
            },
          ],
        },
        {
          name: "Synchronization",
          children: [
            {
              name: "synchronized Keyword",
              children: [
                { name: "Monitor locks" },
                { name: "Mutual exclusion" },
              ],
            },
            {
              name: "Synchronization Blocks",
              children: [
                { name: "Lock on object" },
                { name: "Fine-grained locking" },
              ],
            },
            {
              name: "ReentrantLock",
              children: [
                { name: "Explicit lock management" },
                { name: "lock(), unlock()" },
                { name: "tryLock()" },
              ],
            },
            {
              name: "ReadWriteLock",
              children: [
                { name: "Multiple readers" },
                { name: "Single writer exclusion" },
              ],
            },
            {
              name: "volatile Keyword", children: [
                { name: "Memory visibility" }
              ]
            },
          ],
        },
        {
          name: "Concurrency Utilities",
          children: [
            {
              name: "Executor Framework",
              children: [
                { name: "ExecutorService" },
                { name: "ThreadPoolExecutor" },
                { name: "newFixedThreadPool()" },
                { name: "newCachedThreadPool()" },
              ],
            },
            {
              name: "Callable & Future",
              children: [
                { name: "Callable<V> - returns result" },
                { name: "Future<V> - async result" },
                { name: "get() - retrieve result" },
                { name: "cancel() - cancel execution" },
              ],
            },
            {
              name: "Concurrent Collections",
              children: [
                { name: "ConcurrentHashMap" },
                { name: "CopyOnWriteArrayList" },
                { name: "BlockingQueue" },
              ],
            },
            {
              name: "Synchronizers",
              children: [
                { name: "CountDownLatch" },
                { name: "CyclicBarrier" },
                { name: "Semaphore" },
                { name: "Phaser" },
              ],
            },
            {
              name: "Atomic Variables",
              children: [
                { name: "AtomicInteger" },
                { name: "AtomicLong" },
                { name: "AtomicReference" },
              ],
            },
          ],
        },
        {
          name: "Other Concepts",
          children: [
            { name: "Deadlock - prevention" },
            {
              name: "Thread Communication",
              children: [
                { name: "wait()" },
                { name: "notify()" },
                { name: "notifyAll()" },
              ],
            },
            {
              name: "ThreadLocal",
              children: [
                { name: "Thread-local variables" },
                { name: "get(), set(), remove()" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "I/O, NIO & Files",
      children: [
        {
          name: "I/O (java.io)",
          children: [
            {
              name: "Byte Streams",
              children: [
                { name: "InputStream" },
                { name: "OutputStream" },
                { name: "FileInputStream" },
                { name: "FileOutputStream" },
                { name: "BufferedInputStream" },
                { name: "BufferedOutputStream" },
                { name: "DataInputStream" },
                { name: "DataOutputStream" },
              ],
            },
            {
              name: "Character Streams",
              children: [
                { name: "Reader" },
                { name: "Writer" },
                { name: "FileReader" },
                { name: "FileWriter" },
                { name: "BufferedReader" },
                { name: "BufferedWriter" },
              ],
            },
            {
              name: "Serialization",
              children: [
                { name: "ObjectInputStream" },
                { name: "ObjectOutputStream" },
                { name: "Serializable interface" },
                { name: "transient keyword" },
              ],
            },
          ],
        },
        {
          name: "NIO (java.nio)",
          children: [
            {
              name: "Buffer",
              children: [
                { name: "ByteBuffer, CharBuffer" },
                { name: "position(), limit(), capacity()" },
                { name: "flip(), rewind(), clear()" },
              ],
            },
            {
              name: "Channel",
              children: [
                { name: "FileChannel" },
                { name: "SocketChannel" },
                { name: "ServerSocketChannel" },
                { name: "read(), write()" },
              ],
            },
            {
              name: "Selector",
              children: [
                { name: "Non-blocking I/O" },
                { name: "SelectionKey" },
                { name: "select()" },
              ],
            },
          ],
        },
        {
          name: "NIO.2 (java.nio.file)",
          children: [
            {
              name: "Path, Paths, Files",
              children: [
                { name: "Path interface" },
                { name: "Paths.get()" },
                { name: "Files.read(), Files.write()" },
                { name: "Files.list()" },
                { name: "Files.copy(), Files.delete()" },
              ],
            },
            {
              name: "FileVisitor",
              children: [
                { name: "Walk directory tree" },
                { name: "preVisitDirectory()" },
                { name: "visitFile()" },
                { name: "postVisitDirectory()" },
              ],
            },
            {
              name: "WatchService",
              children: [
                { name: "Monitor file changes" },
                { name: "poll()" },
              ],
            },
            {
              name: "StandardOpenOption",
              children: [
                { name: "READ, WRITE, CREATE" },
                { name: "APPEND, TRUNCATE_EXISTING" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Java APIs & Advanced Topics",
      children: [
        {
          name: "Core APIs",
          children: [
            {
              name: "Math", children: [
                { name: "Mathematical operations" }
              ]
            },
            {
              name: "Random", children: [
                { name: "Random number generation" }
              ]
            },
            {
              name: "System", children: [
                { name: "System properties" },
                { name: "System.exit()" }
              ]
            },
            {
              name: "Runtime", children: [
                { name: "Runtime environment" }
              ]
            },
            {
              name: "ProcessBuilder", children: [
                { name: "Execute processes" }
              ]
            },
            {
              name: "Properties", children: [
                { name: "System properties access" }
              ]
            },
          ],
        },
        {
          name: "Reflection API",
          children: [
            {
              name: "Class Class",
              children: [
                { name: "Class.forName()" },
                { name: "getConstructors()" },
                { name: "getMethods()" },
                { name: "getFields()" },
              ],
            },
            {
              name: "Field",
              children: [
                { name: "get()" },
                { name: "set()" },
                { name: "getType()" },
              ],
            },
            {
              name: "Method",
              children: [
                { name: "invoke()" },
                { name: "getParameters()" },
                { name: "getReturnType()" },
              ],
            },
            {
              name: "Constructor",
              children: [
                { name: "newInstance()" },
                { name: "getParameterTypes()" },
              ],
            },
            {
              name: "Annotations",
              children: [
                { name: "getAnnotations()" },
              ],
            },
          ],
        },
        {
          name: "Generics",
          children: [
            {
              name: "Generic Classes",
              children: [
                { name: "Type parameters <T>" },
                { name: "Generic constructors" },
              ],
            },
            {
              name: "Generic Methods",
              children: [
                { name: "<T> void method(T)" },
              ],
            },
            {
              name: "Bounded Types",
              children: [
                { name: "<T extends Number>" },
                { name: "<T super Number>" },
              ],
            },
            {
              name: "Wildcards",
              children: [
                { name: "<? extends Type>" },
                { name: "<? super Type>" },
              ],
            },
          ],
        },
        {
          name: "Modules (Java 9+)",
          children: [
            {
              name: "Module System",
              children: [
                { name: "module-info.java" },
                { name: "requires, exports" },
              ],
            },
            {
              name: "Path & Paths",
              children: [
                { name: "File system paths" },
              ],
            },
            {
              name: "Files Class",
              children: [
                { name: "File operations" },
              ],
            },
          ],
        },
        {
          name: "Advanced Topics",
          children: [
            {
              name: "Serialization",
              children: [
                { name: "ObjectInputStream" },
                { name: "ObjectOutputStream" },
                { name: "serialVersionUID" },
              ],
            },
            {
              name: "Cloneable Interface",
              children: [
                { name: "clone()" },
                { name: "Shallow vs deep copy" },
              ],
            },
            {
              name: "Records (Java 14+)",
              children: [
                { name: "Immutable data carriers" },
                { name: "Compact constructors" },
              ],
            },
            {
              name: "Sealed Classes (Java 17+)",
              children: [
                { name: "Control inheritance" },
                { name: "permits keyword" },
              ],
            },
            {
              name: "Pattern Matching (Java 17+)",
              children: [
                { name: "instanceof with patterns" },
                { name: "Switch patterns" },
              ],
            },
            {
              name: "Switch Expressions",
              children: [
                { name: "Arrow syntax (->) " },
                { name: "yield statement" },
              ],
            },
            {
              name: "Text Blocks (Java 15+)",
              children: [
                { name: "Multi-line strings" },
                { name: "Triple quotes" },
              ],
            },
            {
              name: "Var Keyword (Java 10+)",
              children: [
                { name: "Type inference" },
                { name: "var x = new ArrayList<>()" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Build Tools, Testing & Ecosystem",
      children: [
        {
          name: "Build Tools",
          children: [
            {
              name: "Maven", children: [
                { name: "Project management" },
                { name: "pom.xml" }
              ]
            },
            {
              name: "Gradle", children: [
                { name: "Flexible build tool" },
                { name: "build.gradle" }
              ]
            },
            {
              name: "Ant", children: [
                { name: "Legacy build tool" }
              ]
            },
          ],
        },
        {
          name: "Testing",
          children: [
            {
              name: "JUnit", children: [
                { name: "Unit testing framework" },
                { name: "@Test, @Before, @After" }
              ]
            },
            {
              name: "TestNG", children: [
                { name: "Advanced testing" }
              ]
            },
            {
              name: "Mockito", children: [
                { name: "Mocking library" }
              ]
            },
          ],
        },
        {
          name: "Logging",
          children: [
            {
              name: "SLF4J", children: [
                { name: "Logging facade" }
              ]
            },
            {
              name: "Log4j", children: [
                { name: "Logging implementation" }
              ]
            },
            {
              name: "Logback", children: [
                { name: "Modern logging" }
              ]
            },
          ],
        },
        {
          name: "IDEs",
          children: [
            {
              name: "IntelliJ IDEA", children: [
                { name: "Premium IDE" }
              ]
            },
            {
              name: "Eclipse", children: [
                { name: "Open source IDE" }
              ]
            },
            {
              name: "VS Code", children: [
                { name: "Lightweight editor" }
              ]
            },
          ],
        },
        {
          name: "Documentation",
          children: [
            {
              name: "Javadoc", children: [
                { name: "Generate documentation" }
              ]
            },
            {
              name: "JavaDoc Tags", children: [
                { name: "@param, @return" }
              ]
            },
          ],
        },
        {
          name: "Others",
          children: [
            { name: "Java 8+ Features" },
            { name: "Best Practices" },
            { name: "Design Patterns" },
          ],
        },
      ],
    },
    {
      name: "Java Application Domains",
      children: [
        {
          name: "Web Applications",
          children: [
            { name: "Servlets" },
            { name: "JSP" },
            {
              name: "Spring Framework",
              children: [
                { name: "Core (IoC, DI)" },
                { name: "Spring MVC" },
              ],
            },
          ],
        },

        {
          name: "Microservices",
          children: [
            {
              name: "Spring Boot",
              children: [
                { name: "Auto Configuration" },
                { name: "Starter Dependencies" },
                { name: "Embedded Server (Tomcat)" },
                { name: "Spring Boot CLI" },
              ],
            },
            {
              name: "Spring Cloud",
              children: [
                { name: "Service Discovery" },
                { name: "Config Server" },
              ],
            },
          ],
        },

        {
          name: "Enterprise Applications",
          children: [
            { name: "Spring Framework (Core)" },
            { name: "Hibernate / JPA" },
          ],
        },
      ],
    },
  ],
};