import { useTranslations } from "../../i18n/utils";


export function SearchAlgorithms(lang: any) {
    const t = useTranslations(lang);
    return [
        {
            title: t("search.card1.subtitle"),
            description: t("search.card1.desc"),
            temporalComplexity: t("search.card1.temporal.desc"),
            spatialComplexity: t("search.card1.spatial.desc"),
            implementation: {
                java:
                    `
     public class LinearSearch {
         public static int linearSearch(int[] arr, int target) {
             for (int i = 0; i < arr.length; i++) {
                 if (arr[i] == target) {
                     return i;
                 }
             }
             
             // Elemento no encontrado
             return -1;
         }
         
         public static void main(String[] args) {
             int[] array = {64, 34, 25, 12, 22, 11, 90};
             System.out.println(linearSearch(array, 12)); // 3
             System.out.println(linearSearch(array, 10)); // -1
         }
     }
              `,
                python:
                    `
     def linear_search(arr, target):
         for i in range(len(arr)):
             if arr[i] == target:
                 return i
         
         # Elemento no encontrado
         return -1
     
     # Ejemplo de uso
     array = [64, 34, 25, 12, 22, 11, 90]
     print(linear_search(array, 12))  # 3
     print(linear_search(array, 10))  # -1
              `,
                javascript:
                    `
     function linearSearch(arr, target) {
       for (let i = 0; i < arr.length; i++) {
         if (arr[i] === target) {
           return i;
         }
       }
       
       // Elemento no encontrado
       return -1;
     }
     
     // Ejemplo de uso
     const array = [64, 34, 25, 12, 22, 11, 90];
     console.log(linearSearch(array, 12)); // 3
     console.log(linearSearch(array, 10)); // -1
              `,
                typescript:
                    `
     function linearSearch(arr: number[], target: number): number {
       for (let i = 0; i < arr.length; i++) {
         if (arr[i] === target) {
           return i;
         }
       }
       
       // Elemento no encontrado
       return -1;
     }
     
     // Ejemplo de uso
     const array: number[] = [64, 34, 25, 12, 22, 11, 90];
     console.log(linearSearch(array, 12)); // 3
     console.log(linearSearch(array, 10)); // -1
              `,
                go:
                    `
     package main
     
     import "fmt"
     
     func linearSearch(arr []int, target int) int {
         for i, value := range arr {
             if value == target {
                 return i
             }
         }
         
         // Elemento no encontrado
         return -1
     }
     
     func main() {
         array := []int{64, 34, 25, 12, 22, 11, 90}
         fmt.Println(linearSearch(array, 12)) // 3
         fmt.Println(linearSearch(array, 10)) // -1
     }
              `,
                c:
                    `
     #include <stdio.h>
     
     int linearSearch(int arr[], int size, int target) {
         for (int i = 0; i < size; i++) {
             if (arr[i] == target) {
                 return i;
             }
         }
         
         // Elemento no encontrado
         return -1;
     }
     
     int main() {
         int array[] = {64, 34, 25, 12, 22, 11, 90};
         int size = sizeof(array) / sizeof(array[0]);
         
         printf("%d\n", linearSearch(array, size, 12)); // 3
         printf("%d\n", linearSearch(array, size, 10)); // -1
         
         return 0;
     }
              `,
                cpp:
                    `
     #include <iostream>
     #include <vector>
     
     int linearSearch(const std::vector<int>& arr, int target) {
         for (int i = 0; i < arr.size(); i++) {
             if (arr[i] == target) {
                 return i;
             }
         }
         
         // Elemento no encontrado
         return -1;
     }
     
     int main() {
         std::vector<int> array = {64, 34, 25, 12, 22, 11, 90};
         std::cout << linearSearch(array, 12) << std::endl; // 3
         std::cout << linearSearch(array, 10) << std::endl; // -1
         
         return 0;
     }
              `,
                csharp:
                    `
     using System;
     
     class LinearSearch {
         static void Main() {
             int[] array = {64, 34, 25, 12, 22, 11, 90};
             Console.WriteLine(LinearSearchAlgorithm(array, 12)); // 3
             Console.WriteLine(LinearSearchAlgorithm(array, 10)); // -1
         }
         
         static int LinearSearchAlgorithm(int[] arr, int target) {
             for (int i = 0; i < arr.Length; i++) {
                 if (arr[i] == target) {
                     return i;
                 }
             }
             
             // Elemento no encontrado
             return -1;
         }
     }
              `,
            },
        },
        {
            title: t("search.card2.subtitle"),
            description: t("search.card2.desc"),
            temporalComplexity: t("search.card2.temporal.desc"),
            spatialComplexity: t("search.card2.spatial.desc"),
            implementation: {
                java:
                    `
     public class BinarySearch {
         public static int binarySearch(int[] arr, int target) {
             int left = 0;
             int right = arr.length - 1;
             
             while (left <= right) {
                 int mid = left + (right - left) / 2;
                 
                 // Verificar si el elemento está en el medio
                 if (arr[mid] == target) {
                     return mid;
                 }
                 
                 // Si el elemento es mayor, ignorar la mitad izquierda
                 if (arr[mid] < target) {
                     left = mid + 1;
                 } 
                 // Si el elemento es menor, ignorar la mitad derecha
                 else {
                     right = mid - 1;
                 }
             }
             
             // Elemento no encontrado
             return -1;
         }
         
         public static void main(String[] args) {
             int[] sortedArray = {11, 12, 22, 25, 34, 64, 90};
             System.out.println(binarySearch(sortedArray, 25)); // 3
             System.out.println(binarySearch(sortedArray, 10)); // -1
         }
     }
              `,
                python:
                    `
     def binary_search(arr, target):
         left = 0
         right = len(arr) - 1
         
         while left <= right:
             mid = (left + right) // 2
             
             # Verificar si el elemento está en el medio
             if arr[mid] == target:
                 return mid
             
             # Si el elemento es mayor, ignorar la mitad izquierda
             elif arr[mid] < target:
                 left = mid + 1
             
             # Si el elemento es menor, ignorar la mitad derecha
             else:
                 right = mid - 1
         
         # Elemento no encontrado
         return -1
     
     # Ejemplo de uso
     sorted_ 
                 right = mid - 1
         
         # Elemento no encontrado
         return -1
     
     # Ejemplo de uso
     sorted_array = [11, 12, 22, 25, 34, 64, 90]
     print(binary_search(sorted_array, 25))  # 3
     print(binary_search(sorted_array, 10))  # -1
              `,
                javascript:
                    `
     function binarySearch(arr, target) {
       let left = 0;
       let right = arr.length - 1;
       
       while (left <= right) {
         const mid = Math.floor((left + right) / 2);
         
         // Verificar si el elemento está en el medio
         if (arr[mid] === target) {
           return mid;
         }
         
         // Si el elemento es mayor, ignorar la mitad izquierda
         if (arr[mid] < target) {
           left = mid + 1;
         } 
         // Si el elemento es menor, ignorar la mitad derecha
         else {
           right = mid - 1;
         }
       }
       
       // Elemento no encontrado
       return -1;
     }
     
     // Ejemplo de uso
     const sortedArray = [11, 12, 22, 25, 34, 64, 90];
     console.log(binarySearch(sortedArray, 25)); // 3
     console.log(binarySearch(sortedArray, 10)); // -1
              `,
                typescript:
                    `
     function binarySearch(arr: number[], target: number): number {
       let left = 0;
       let right = arr.length - 1;
       
       while (left <= right) {
         const mid = Math.floor((left + right) / 2);
         
         // Verificar si el elemento está en el medio
         if (arr[mid] === target) {
           return mid;
         }
         
         // Si el elemento es mayor, ignorar la mitad izquierda
         if (arr[mid] < target) {
           left = mid + 1;
         } 
         // Si el elemento es menor, ignorar la mitad derecha
         else {
           right = mid - 1;
         }
       }
       
       // Elemento no encontrado
       return -1;
     }
     
     // Ejemplo de uso
     const sortedArray: number[] = [11, 12, 22, 25, 34, 64, 90];
     console.log(binarySearch(sortedArray, 25)); // 3
     console.log(binarySearch(sortedArray, 10)); // -1
              `,
                go:
                    `
     package main
     
     import "fmt"
     
     func binarySearch(arr []int, target int) int {
         left := 0
         right := len(arr) - 1
         
         for left <= right {
             mid := left + (right - left) / 2
             
             // Verificar si el elemento está en el medio
             if arr[mid] == target {
                 return mid
             }
             
             // Si el elemento es mayor, ignorar la mitad izquierda
             if arr[mid] < target {
                 left = mid + 1
             } else {
                 // Si el elemento es menor, ignorar la mitad derecha
                 right = mid - 1
             }
         }
         
         // Elemento no encontrado
         return -1
     }
     
     func main() {
         sortedArray := []int{11, 12, 22, 25, 34, 64, 90}
         fmt.Println(binarySearch(sortedArray, 25)) // 3
         fmt.Println(binarySearch(sortedArray, 10)) // -1
     }
              `,
                c:
                    `
     #include <stdio.h>
     
     int binarySearch(int arr[], int size, int target) {
         int left = 0;
         int right = size - 1;
         
         while (left <= right) {
             int mid = left + (right - left) / 2;
             
             // Verificar si el elemento está en el medio
             if (arr[mid] == target) {
                 return mid;
             }
             
             // Si el elemento es mayor, ignorar la mitad izquierda
             if (arr[mid] < target) {
                 left = mid + 1;
             } 
             // Si el elemento es menor, ignorar la mitad derecha
             else {
                 right = mid - 1;
             }
         }
         
         // Elemento no encontrado
         return -1;
     }
     
     int main() {
         int sortedArray[] = {11, 12, 22, 25, 34, 64, 90};
         int size = sizeof(sortedArray) / sizeof(sortedArray[0]);
         
         printf("%d\n", binarySearch(sortedArray, size, 25)); // 3
         printf("%d\n", binarySearch(sortedArray, size, 10)); // -1
         
         return 0;
     }
              `,
                cpp:
                    `
     #include <iostream>
     #include <vector>
     
     int binarySearch(const std::vector<int>& arr, int target) {
         int left = 0;
         int right = arr.size() - 1;
         
         while (left <= right) {
             int mid = left + (right - left) / 2;
             
             // Verificar si el elemento está en el medio
             if (arr[mid] == target) {
                 return mid;
             }
             
             // Si el elemento es mayor, ignorar la mitad izquierda
             if (arr[mid] < target) {
                 left = mid + 1;
             } 
             // Si el elemento es menor, ignorar la mitad derecha
             else {
                 right = mid - 1;
             }
         }
         
         // Elemento no encontrado
         return -1;
     }
     
     int main() {
         std::vector<int> sortedArray = {11, 12, 22, 25, 34, 64, 90};
         std::cout << binarySearch(sortedArray, 25) << std::endl; // 3
         std::cout << binarySearch(sortedArray, 10) << std::endl; // -1
         
         return 0;
     }
              `,
                csharp:
                    `
     using System;
     
     class BinarySearch {
         static void Main() {
             int[] sortedArray = {11, 12, 22, 25, 34, 64, 90};
             Console.WriteLine(BinarySearchAlgorithm(sortedArray, 25)); // 3
             Console.WriteLine(BinarySearchAlgorithm(sortedArray, 10)); // -1
         }
         
         static int BinarySearchAlgorithm(int[] arr, int target) {
             int left = 0;
             int right = arr.Length - 1;
             
             while (left <= right) {
                 int mid = left + (right - left) / 2;
                 
                 // Verificar si el elemento está en el medio
                 if (arr[mid] == target) {
                     return mid;
                 }
                 
                 // Si el elemento es mayor, ignorar la mitad izquierda
                 if (arr[mid] < target) {
                     left = mid + 1;
                 } 
                 // Si el elemento es menor, ignorar la mitad derecha
                 else {
                     right = mid - 1;
                 }
             }
             
             // Elemento no encontrado
             return -1;
         }
     }
              `,
            },
        },
        {
            title: t("search.card3.subtitle"),
            description: t("search.card3.desc"),
            temporalComplexity: t("search.card3.temporal.desc"),
            spatialComplexity: t("search.card3.spatial.desc"),
            implementation: {
                java:
                    `
     import java.util.HashMap;
     import java.util.Map;
     
     public class HashSearch {
         public static int hashSearch(int[] arr, int target) {
             // Crear una tabla hash (HashMap en Java)
             Map<Integer, Integer> hashTable = new HashMap<>();
             
             // Llenar la tabla hash con los elementos del array
             for (int i = 0; i < arr.length; i++) {
                 hashTable.put(arr[i], i);
             }
             
             // Buscar el elemento en la tabla hash
             if (hashTable.containsKey(target)) {
                 return hashTable.get(target);
             }
             
             // Elemento no encontrado
             return -1;
         }
         
         public static void main(String[] args) {
             int[] array = {64, 34, 25, 12, 22, 11, 90};
             System.out.println(hashSearch(array, 12)); // 3
             System.out.println(hashSearch(array, 10)); // -1
         }
     }
              `,
                python:
                    `
     def hash_search(arr, target):
         # Crear una tabla hash (diccionario en Python)
         hash_table = {}
         
         # Llenar la tabla hash con los elementos del array
         for i, value in enumerate(arr):
             hash_table[value] = i
         
         # Buscar el elemento en la tabla hash
         if target in hash_table:
             return hash_table[target]
         
         # Elemento no encontrado
         return -1
     
     # Ejemplo de uso
     array = [64, 34, 25, 12, 22, 11, 90]
     print(hash_search(array, 12))  # 3
     print(hash_search(array, 10))  # -1
              `,
                javascript:
                    `
     function hashSearch(arr, target) {
       // Crear una tabla hash (objeto en JavaScript)
       const hashTable = {};
       
       // Llenar la tabla hash con los elementos del array
       for (let i = 0; i < arr.length; i++) {
         hashTable[arr[i]] = i;
       }
       
       // Buscar el elemento en la tabla hash
       if (target in hashTable) {
         return hashTable[target];
       }
       
       // Elemento no encontrado
       return -1;
     }
     
     // Ejemplo de uso
     const array = [64, 34, 25, 12, 22, 11, 90];
     console.log(hashSearch(array, 12)); // 3
     console.log(hashSearch(array, 10)); // -1
              `,
                typescript:
                    `
     function hashSearch(arr: number[], target: number): number {
       // Crear una tabla hash (objeto en TypeScript)
       const hashTable: Record<number, number> = {};
       
       // Llenar la tabla hash con los elementos del array
       for (let i = 0; i < arr.length; i++) {
         hashTable[arr[i]] = i;
       }
       
       // Buscar el elemento en la tabla hash
       if (target in hashTable) {
         return hashTable[target];
       }
       
       // Elemento no encontrado
       return -1;
     }
     
     // Ejemplo de uso
     const array: number[] = [64, 34, 25, 12, 22, 11, 90];
     console.log(hashSearch(array, 12)); // 3
     console.log(hashSearch(array, 10)); // -1
              `,
                go:
                    `
     package main
     
     import "fmt"
     
     func hashSearch(arr []int, target int) int {
         // Crear una tabla hash (map en Go)
         hashTable := make(map[int]int)
         
         // Llenar la tabla hash con los elementos del array
         for i, value := range arr {
             hashTable[value] = i
         }
         
         // Buscar el elemento en la tabla hash
         if index, found := hashTable[target]; found {
             return index
         }
         
         // Elemento no encontrado
         return -1
     }
     
     func main() {
         array := []int{64, 34, 25, 12, 22, 11, 90}
         fmt.Println(hashSearch(array, 12)) // 3
         fmt.Println(hashSearch(array, 10)) // -1
     }
              `,
                c:
                    `
     #include <stdio.h>
     #include <stdlib.h>
     #include <stdbool.h>
     
     // Estructura para un nodo de la tabla hash
     typedef struct HashNode {
         int key;
         int value;
         struct HashNode* next;
     } HashNode;
     
     // Estructura para la tabla hash
     typedef struct {
         int size;
         HashNode** table;
     } HashTable;
     
     // Función hash simple
     int hash(int key, int size) {
         return abs(key) % size;
     }
     
     // Crear una nueva tabla hash
     HashTable* createHashTable(int size) {
         HashTable* ht = (HashTable*)malloc(sizeof(HashTable));
         ht->size = size;
         ht->table = (HashNode**)calloc(size, sizeof(HashNode*));
         return ht;
     }
     
     // Insertar un elemento en la tabla hash
     void insert(HashTable* ht, int key, int value) {
         int index = hash(key, ht->size);
         
         // Crear un nuevo nodo
         HashNode* newNode = (HashNode*)malloc(sizeof(HashNode));
         newNode->key = key;
         newNode->value = value;
         newNode->next = NULL;
         
         // Si la posición está vacía
         if (ht->table[index] == NULL) {
             ht->table[index] = newNode;
         } else {
             // Manejar colisiones con encadenamiento
             HashNode* current = ht->table[index];
             while (current->next != NULL) {
                 if (current->key == key) {
                     current->value = value;
                     free(newNode);
                     return;
                 }
                 current = current->next;
             }
             if (current->key == key) {
                 current->value = value;
                 free(newNode);
             } else {
                 current->next = newNode;
             }
         }
     }
     
     // Buscar un elemento en la tabla hash
     int search(HashTable* ht, int key) {
         int index = hash(key, ht->size);
         
         HashNode* current = ht->table[index];
         while (current != NULL) {
             if (current->key == key) {
                 return current->value;
             }
             current = current->next;
         }
         
         // Elemento no encontrado
         return -1;
     }
     
     // Liberar la memoria de la tabla hash
     void freeHashTable(HashTable* ht) {
         for (int i = 0; i < ht->size; i++) {
             HashNode* current = ht->table[i];
             while (current != NULL) {
                 HashNode* temp = current;
                 current = current->next;
                 free(temp);
             }
         }
         free(ht->table);
         free(ht);
     }
     
     int hashSearch(int arr[], int size, int target) {
         // Crear una tabla hash
         HashTable* ht = createHashTable(size * 2);
         
         // Llenar la tabla hash con los elementos del array
         for (int i = 0; i < size; i++) {
             insert(ht, arr[i], i);
         }
         
         // Buscar el elemento en la tabla hash
         int result = search(ht, target);
         
         // Liberar la memoria
         freeHashTable(ht);
         
         return result;
     }
     
     int main() {
         int array[] = {64, 34, 25, 12, 22, 11, 90};
         int size = sizeof(array) / sizeof(array[0]);
         
         printf("%d\n", hashSearch(array, size, 12)); // 3
         printf("%d\n", hashSearch(array, size, 10)); // -1
         
         return 0;
     }
              `,
                cpp:
                    `
     #include <iostream>
     #include <vector>
     #include <unordered_map>
     
     int hashSearch(const std::vector<int>& arr, int target) {
         // Crear una tabla hash (unordered_map en C++)
         std::unordered_map<int, int> hashTable;
         
         // Llenar la tabla hash con los elementos del array
         for (int i = 0; i < arr.size(); i++) {
             hashTable[arr[i]] = i;
         }
         
         // Buscar el elemento en la tabla hash
         if (hashTable.find(target) != hashTable.end()) {
             return hashTable[target];
         }
         
         // Elemento no encontrado
         return -1;
     }
     
     int main() {
         std::vector<int> array = {64, 34, 25, 12, 22, 11, 90};
         std::cout << hashSearch(array, 12) << std::endl; // 3
         std::cout << hashSearch(array, 10) << std::endl; // -1
         
         return 0;
     }
              `,
                csharp:
                    `
     using System;
     using System.Collections.Generic;
     
     class HashSearch {
         static void Main() {
             int[] array = {64, 34, 25, 12, 22, 11, 90};
             Console.WriteLine(HashSearchAlgorithm(array, 12)); // 3
             Console.WriteLine(HashSearchAlgorithm(array, 10)); // -1
         }
         
         static int HashSearchAlgorithm(int[] arr, int target) {
             // Crear una tabla hash (Dictionary en C#)
             Dictionary<int, int> hashTable = new Dictionary<int, int>();
             
             // Llenar la tabla hash con los elementos del array
             for (int i = 0; i < arr.Length; i++) {
                 hashTable[arr[i]] = i;
             }
             
             // Buscar el elemento en la tabla hash
             if (hashTable.ContainsKey(target)) {
                 return hashTable[target];
             }
             
             // Elemento no encontrado
             return -1;
         }
     }
              `,
            },
        },
    ];
} 