export const defaultLang = 'es';

export const languages = {
   en: 'English',
   es: 'Español',
};

export const ui = {
   en: {
      "navbar.search": "Search",
      "navbar.sort": "Sort",
      "navbar.languaje": "EN",

      "footer.title": "Search and Sorting Algorithms",
      "footer.desc": "A complete guide with code examples in multiple languages",
      "footer.with": "with",
      "footer.by": "by",
      "footer.rights": "Almost all rights reserved",

      "index.title": "Understanding Algorithms",
      "index.desc": "Immerse yourself in the world of search and sorting algorithms. Learn their implementations, complexities, and real-world applications.",
      "index.intro1.title": "Theory of Algorithms",
      "index.intro1.desc": "Master the fundamental concepts behind algorithms",
      "index.intro2.title": "Time Complexity",
      "index.intro2.desc": "Understand Big O notation and performance analysis",
      "index.intro3.title": "Implementation",
      "index.intro3.desc": "See examples in multiple programming languages",

      "index.bigO.title": "Big O Notation and Complexity",
      "index.bigO.card1.title": "What is Big O?",
      "index.bigO.card1.desc": "Big O notation is a mathematical notation that describes the limiting behavior of a function as the argument approaches a particular value or infinity. In computer science, it is used to classify algorithms based on how their runtime or space requirements increase as the input size increases.",
      "index.bigO.card1.subtitle": "Common complexities",
      "index.bigO.card1.list1": "Constant Time",
      "index.bigO.card1.list2": "Logarithmic Time",
      "index.bigO.card1.list3": "Linear Time",
      "index.bigO.card1.list4": "Linearithmic Time",
      "index.bigO.card1.list5": "Quadratic Time",
      "index.bigO.card1.list6": "Exponential Time",
      "index.bigO.card2.title": "Temporal Complexity vs. Spatial Complexity",
      "index.bigO.card2.subtitle1": "Temporal Complexity",
      "index.bigO.card2.desc1": "Measures the amount of time an algorithm takes to complete based on the input size. It helps us understand how the algorithm's performance scales with larger inputs.",
      "index.bigO.card2.subtitle2": "Spatial Complexity",
      "index.bigO.card2.desc2": "Measures the amount of memory space required by an algorithm based on the input size. This includes both auxiliary space and the space used by the input.",

      "alg.title1": "Search Algorithms",
      "alg.desc1": "Searching algorithms are methods designed to retrieve information stored within a data structure. These algorithms are fundamental to computer science and have diverse real-world applications. They are divided into sequential (such as linear search) and efficient (such as binary search). Their performance varies depending on the data organization, with complexities ranging from O(1) to O(n) or O(log n) depending on the method used.",
      "alg.title2": "Sort Algorithms",
      "alg.desc2": "Sorting algorithms are a set of instructions that take an array or list of elements as input and arrange the elements in a specific order. They are classified as comparative, which sorts using comparisons, and non-comparative, which uses specific properties of the data. Their efficiency varies depending on the method, with complexities ranging from O(n log n) for efficient algorithms to O(n²) for less optimal ones.",
      "alg.complex": "Complexity",
      "alg.temporal": "Temporal Complexity:",
      "alg.spatial": "Spatial Complexity:",
      "alg.implement": "Implementation",

      "search.card1.subtitle": "Linear Search",
      "search.card1.desc": "The linear search algorithm sequentially traverses a list, comparing each element with the search value until it finds it or discards its existence. It does not require the data to be sorted.",
      "search.card1.temporal.desc": "O(n)",
      "search.card1.spatial.desc": "O(1)",

      "search.card2.subtitle": "Binary Search",
      "search.card2.desc": "The binary search algorithm locates an element in an ordered list by repeatedly dividing the search space in half. It compares the search value with the center element and decides whether to continue in the left or right half until it is found, or discard its existence.",
      "search.card2.temporal.desc": "O(log n)",
      "search.card2.spatial.desc": "O(1) iterative, O(log n) recursive",

      "search.card3.subtitle": "Hash Search",
      "search.card3.desc": "Hash Search uses a hash function to map keys to values in a hash table, allowing constant-time lookups in the average case.",
      "search.card3.temporal.desc": "O(1) average and best case, O(n) worst case",
      "search.card3.spatial.desc": "O(n)",



      "sort.card1.subtitle": "Bubble Sort",
      "sort.card1.desc": "Bubble Sort is a simple algorithm that repeatedly traverses a list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until no more swaps are required, indicating that the list is sorted.",
      "sort.card1.temporal.desc": "O(n) best case, O(n²) average and worst case",
      "sort.card1.spatial.desc": "O(1)",

      "sort.card2.subtitle": "Selection Sort",
      "sort.card2.desc": "Selection Sort splits the array into two parts: the sorted subarray and the unsorted subarray. In each iteration, it finds the smallest element in the unsorted subarray and swaps it with the element at the first position in the unsorted subarray.",
      "sort.card2.temporal.desc": "O(n²) best, average and worst case",
      "sort.card2.spatial.desc": "O(1)",

      "sort.card3.subtitle": "Insertion Sort",
      "sort.card3.desc": "Insertion Sort builds the final sorted list one element at a time. Each element is taken from the original list and inserted into its correct position within a new sorted list, similar to how cards are sorted in a poker hand.",
      "sort.card3.temporal.desc": "O(n) best, O(n²) average and worst case",
      "sort.card3.spatial.desc": "O(1)",

      "sort.card4.subtitle": "Merge Sort",
      "sort.card4.desc": "Merge Sort is a divide-and-conquer algorithm that divides a list into halves, sorts each half recursively, and then merges the sorted halves. This algorithm is stable, meaning it preserves the relative order of like elements.",
      "sort.card4.temporal.desc": "O(n log n) best, average and worst case",
      "sort.card4.spatial.desc": "O(n)",

      "sort.card5.subtitle": "Quick Sort",
      "sort.card5.desc": "Quick Sort is a divide-and-conquer algorithm that selects an element as the pivot and partitions the array around it. The algorithm places all elements less than the pivot to the left of it and all elements greater than the pivot to the right of it, then recursively sorts the subarrays.",
      "sort.card5.temporal.desc": "O(n log n) average and best case, O(n²) worst case",
      "sort.card5.spatial.desc": "O(log n) by recursion",

      "sort.card6.subtitle": "Heap Sort",
      "sort.card6.desc": "Heap Sort is a comparison sort algorithm that uses the heap data structure to sort arrays. It first constructs a maximal heap from the array, then extracts the maximal element (the root) repeatedly, restructuring the heap on each iteration.",
      "sort.card6.temporal.desc": "O(n log n) best, average and worst case",
      "sort.card6.spatial.desc": "O(1) in-place",

      "sort.card7.subtitle": "Bucket Sort",
      "sort.card7.desc": "Bucket Sort divides an array into a finite number of buckets. Each bucket is sorted individually (usually by another sorting algorithm) and then concatenated to obtain the final sorted array. It is ideal for data that is uniformly distributed over a known range (usually [0,1]). Implementations assume that values lie in the range [0,1].",
      "sort.card7.temporal.desc": "O(n + k) average and best case, O(n²) worst case",
      "sort.card7.spatial.desc": "O(n)",

      "sort.card8.subtitle": "Radix Sort",
      "sort.card8.desc": "Radix Sort is a non-comparative sorting algorithm that sorts integers by sorting individual digits. It is based on the principle of sorting the least significant digits first, followed by the most significant digits. Radix sort can be of type LSD (Least Significant Digit) or MSD (Most Significant Digit).",
      "sort.card8.temporal.desc": "O(nk) best, average and worst case",
      "sort.card8.spatial.desc": "O(n + k)",

      "sort.card9.subtitle": "Tim Sort",
      "sort.card9.desc": "Tim Sort is a hybrid algorithm derived from MergeSort and InsertionSort. It was designed to leverage the advantages of both algorithms on real-world data arrays. Timsort is the default sorting algorithm in Python and Java.",
      "sort.card9.temporal.desc": "O(n) best case, O(n log n) average and worst case",
      "sort.card9.spatial.desc": "O(n)",

      "sort.card10.subtitle": "Shell Sort",
      "sort.card10.desc": "Shell Sort is an improved version of Insertion Sort that allows swapping distant elements. It divides the array into subarrays using a progressively narrowing gap. Its performance depends heavily on the sequence of gaps used.",
      "sort.card10.temporal.desc": "O(n log n) best case, O(n^1.5) average and worst case",
      "sort.card10.spatial.desc": "O(1)",
   },
   es: {
      "navbar.search": "Búsqueda",
      "navbar.sort": "Ordenamiento",
      "navbar.languaje": "ES",

      "footer.title": "Algoritmos de Búsqueda y Ordenamiento",
      "footer.desc": "Una guía completa con ejemplos de código en múltiples lenguajes",
      "footer.with": "con",
      "footer.by": "por",
      "footer.rights": "Casi todos los derechos reservados",

      "index.title": "Entendiendo los Algoritmos",
      "index.desc": "Sumérgete en el mundo de los algoritmos de búsqueda y ordenamiento. Aprende sus implementaciones, complejidades y aplicaciones en el mundo real.",
      "index.intro1.title": "Teoría de Algoritmos",
      "index.intro1.desc": "Domina los conceptos fundamentales detrás de los algoritmos",
      "index.intro2.title": "Complejidad Temporal",
      "index.intro2.desc": "Comprende la notación Big O y el análisis de rendimiento",
      "index.intro3.title": "Implementación",
      "index.intro3.desc": "Ver ejemplos en múltiples lenguajes de programación",

      "index.bigO.title": "Notación Big O y Complejidad",
      "index.bigO.card1.title": "¿Qué es Big O?",
      "index.bigO.card1.desc": "La notación Big O es una notación matemática que describe el comportamiento límite de una función cuando el argumento tiende hacia un valor particular o infinito. En informática, se utiliza para clasificar algoritmos según cómo crecen sus requisitos de tiempo de ejecución o espacio a medida que crece el tamaño de entrada.",
      "index.bigO.card1.subtitle": "Complejidades comunes",
      "index.bigO.card1.list1": "Tiempo Constante",
      "index.bigO.card1.list2": "Tiempo Logarítmico",
      "index.bigO.card1.list3": "Tiempo Lineal",
      "index.bigO.card1.list4": "Tiempo Linealítmico",
      "index.bigO.card1.list5": "Tiempo Cuadrático",
      "index.bigO.card1.list6": "Tiempo Exponencial",
      "index.bigO.card2.title": "Complejidad Temporal vs Complejidad Espacial",
      "index.bigO.card2.subtitle1": "Complejidad Temporal",
      "index.bigO.card2.desc1": "Mide la cantidad de tiempo que tarda un algoritmo en completarse en función del tamaño de entrada. Nos ayuda a entender cómo escala el rendimiento del algoritmo con entradas más grandes.",
      "index.bigO.card2.subtitle2": "Complejidad Espacial",
      "index.bigO.card2.desc2": "Mide la cantidad de espacio de memoria requerido por un algoritmo en función del tamaño de entrada. Esto incluye tanto el espacio auxiliar como el espacio utilizado por la entrada.",

      "alg.title1": "Algoritmos de Búsqueda",
      "alg.desc1": "Los algoritmos de búsqueda son métodos diseñados para recuperar información almacenada dentro de alguna estructura de datos. Estos algoritmos son fundamentales en ciencias de la computación y tienen diversas aplicaciones en el mundo real. Se dividen en secuenciales (como la búsqueda lineal) y eficientes (como la búsqueda binaria). Su rendimiento varía según la organización de los datos, con complejidades desde O(1) hasta O(n) o O(log n) según el método utilizado.",
      "alg.title2": "Algoritmos de Ordenamiento",
      "alg.desc2": "Los algoritmos de ordenamiento son un conjunto de instrucciones que toman un arreglo o lista de elementos como entrada y organizan los elementos en un orden específico. Se clasifican en comparativos, que ordenan mediante comparaciones, y no comparativos, que usan propiedades específicas de los datos. Su eficiencia varía según el método, con complejidades desde O(n log n) en algoritmos eficientes hasta O(n²) en los menos óptimos.",
      "alg.complex": "Complejidad",
      "alg.temporal": "Complejidad Temporal:",
      "alg.spatial": "Complejidad Espacial:",
      "alg.implement": "Implementación",

      "search.card1.subtitle": "Búsqueda Lineal",
      "search.card1.desc": "El algoritmo de búsqueda lineal recorre secuencialmente una lista comparando cada elemento con el valor buscado hasta encontrarlo o descartar su existencia. No requiere que los datos estén ordenados.",
      "search.card1.temporal.desc": "O(n)",
      "search.card1.spatial.desc": "O(1)",

      "search.card2.subtitle": "Búsqueda Lineal",
      "search.card2.desc": "El algoritmo de búsqueda lineal recorre secuencialmente una lista comparando cada elemento con el valor buscado hasta encontrarlo o descartar su existencia. No requiere que los datos estén ordenados.",
      "search.card2.temporal.desc": "O(n)",
      "search.card2.spatial.desc": "O(1)",

      "search.card3.subtitle": "Búsqueda de Hash",
      "search.card3.desc": "La búsqueda de Hash utiliza una función hash para asignar claves a valores en una tabla hash, lo que permite búsquedas en tiempo constante en el caso promedio.",
      "search.card3.temporal.desc": "O(1) promedio y mejor caso, O(n) peor caso",
      "search.card3.spatial.desc": "O(n)",



      "sort.card1.subtitle": "Ordenamiento Burbuja",
      "sort.card1.desc": "El ordenamiento burbuja es un algoritmo simple que recorre repetidamente la lista, compara elementos adyacentes y los intercambia si están en el orden incorrecto. Este proceso se repite hasta que no se requieren más intercambios, lo que indica que la lista está ordenada.",
      "sort.card1.temporal.desc": "O(n) mejor caso, O(n²) promedio y peor caso",
      "sort.card1.spatial.desc": "O(1)",

      "sort.card2.subtitle": "Ordenamiento por Selección",
      "sort.card2.desc": "El ordenamiento por selección divide el arreglo en dos partes: la submatriz ordenada y la submatriz no ordenada. En cada iteración, encuentra el elemento mínimo de la submatriz no ordenada y lo intercambia con el elemento en la primera posición de la submatriz no ordenada.",
      "sort.card2.temporal.desc": "O(n²) mejor, promedio y peor caso",
      "sort.card2.spatial.desc": "O(1)",

      "sort.card3.subtitle": "Ordenamiento por Inserción",
      "sort.card3.desc": "El ordenamiento por inserción construye la lista ordenada final un elemento a la vez. Se toma cada elemento de la lista original y se inserta en su posición correcta dentro de una nueva lista ordenada, similar a cómo se ordenan las cartas en una mano de póker.",
      "sort.card3.temporal.desc": "O(n) mejor, O(n²) promedio y peor caso",
      "sort.card3.spatial.desc": "O(1)",

      "sort.card4.subtitle": "Ordenamiento por Fusión",
      "sort.card4.desc": "El ordenamiento por fusión es un algoritmo de tipo ''divide y vencerás'' que divide la lista en mitades, ordena cada mitad recursivamente y luego fusiona las mitades ordenadas. Este algoritmo es estable, lo que significa que preserva el orden relativo de elementos iguales.",
      "sort.card4.temporal.desc": "O(n log n) mejor, promedio y peor caso",
      "sort.card4.spatial.desc": "O(n)",

      "sort.card5.subtitle": "Ordenamiento Rápido",
      "sort.card5.desc": "El ordenamiento rápido (QuickSort) es un algoritmo de tipo ''divide y vencerás'' que selecciona un elemento como pivote y particiona el arreglo alrededor del pivote. El algoritmo coloca todos los elementos menores que el pivote a su izquierda y todos los elementos mayores a su derecha, luego ordena recursivamente las submatrices.",
      "sort.card5.temporal.desc": "O(n log n) promedio y mejor caso, O(n²) peor caso",
      "sort.card5.spatial.desc": "O(log n) por recursión",

      "sort.card6.subtitle": "Ordenamiento por Montón",
      "sort.card6.desc": "Heap Sort es un algoritmo de ordenamiento por comparación que utiliza la estructura de datos Heap (montículo) para ordenar el arreglo. Primero construye un heap máximo a partir del arreglo, y luego extrae el elemento máximo (la raíz) repetidamente, reestructurando el heap en cada iteración.",
      "sort.card6.temporal.desc": "O(n log n) mejor, promedio y peor caso",
      "sort.card6.spatial.desc": "O(1) en el lugar",

      "sort.card7.subtitle": "Ordenamiento por Cubos",
      "sort.card7.desc": "El ordenamiento por cubos (BucketSort) divide el arreglo en un número finito de “cubos” o buckets. Cada bucket se ordena individualmente (usualmente mediante otro algoritmo de ordenamiento) y luego se concatenan para obtener el arreglo final ordenado. Es ideal para datos distribuidos uniformemente en un rango conocido (usualmente [0,1)). En las implementaciones se asume que los valores están en el rango [0,1).",
      "sort.card7.temporal.desc": "O(n + k) promedio y mejor caso, O(n²) peor caso",
      "sort.card7.spatial.desc": "O(n)",

      "sort.card8.subtitle": "Ordenamiento por Base",
      "sort.card8.desc": "El ordenamiento por base (RadixSort) es un algoritmo de ordenamiento no comparativo que ordena enteros procesando los dígitos individuales. Se basa en el principio de ordenar los dígitos menos significativos primero, y luego los más significativos. RadixSort puede ser de tipo LSD (Least Significant Digit) o MSD (Most Significant Digit).",
      "sort.card8.temporal.desc": "O(nk) mejor, promedio y peor caso",
      "sort.card8.spatial.desc": "O(n + k)",

      "sort.card9.subtitle": "Ordenamiento de Tim",
      "sort.card9.desc": "El ordenamiento de Tim (Timsort) es un algoritmo híbrido derivado de MergeSort y InsertionSort. Fue diseñado para aprovechar las ventajas de ambos algoritmos en arreglos de datos reales. Timsort es el algoritmo de ordenamiento predeterminado en Python y Java.",
      "sort.card9.temporal.desc": "O(n) mejor caso, O(n log n) promedio y peor caso",
      "sort.card9.spatial.desc": "O(n)",

      "sort.card10.subtitle": "Ordenamiento por Shell",
      "sort.card10.desc": "El ordenamiento por Shell es una versión mejorada del Insertion Sort que permite intercambiar elementos distantes. Divide el arreglo en subarreglos usando un ''gap'' (intervalo) que se reduce progresivamente. Su rendimiento depende fuertemente de la secuencia de intervalos utilizada.",
      "sort.card10.temporal.desc": "O(n log n) mejor caso, O(n^1.5) promedio y peor caso",
      "sort.card10.spatial.desc": "O(1)",
   },
} as const;