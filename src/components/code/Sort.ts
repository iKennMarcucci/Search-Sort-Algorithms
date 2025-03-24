import { useTranslations } from "../../i18n/utils";

export function SortAlgorithms(lang: any) {
    const t = useTranslations(lang);
    return [
        {
            title: t("sort.card1.subtitle"),
            description: t("sort.card1.desc"),
            temporalComplexity: t("sort.card1.temporal.desc"),
            spatialComplexity: t("sort.card1.spatial.desc"),
            implementation: {
                java: `
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        
        // Recorrer el arreglo n veces
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            
            // En cada iteración, comparar elementos adyacentes
            for (int j = 0; j < n - i - 1; j++) {
                // Si el elemento actual es mayor que el siguiente, intercambiarlos
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            
            // Si no hubo intercambios en esta pasada, el arreglo ya está ordenado
            if (!swapped) {
                break;
            }
        }
    }
    
    // Método principal para probar el algoritmo
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        
        System.out.println("Arreglo original:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        
        bubbleSort(arr);
        
        System.out.println("\nArreglo ordenado:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
         `,
                python: `
def bubble_sort(arr):
    n = len(arr)
    
    # Recorrer todos los elementos del arreglo
    for i in range(n - 1):
        swapped = False
        
        # Última i elementos ya están en su lugar correcto
        for j in range(0, n - i - 1):
            # Comparar elementos adyacentes
            if arr[j] > arr[j + 1]:
                # Intercambiar si el elemento encontrado es mayor que el siguiente
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        
        # Si no se realizó ningún intercambio en esta iteración, el arreglo ya está ordenado
        if not swapped:
            break
    
    return arr

# Código de prueba
if __name__ == "__main__":
    arr = [64, 34, 25, 12, 22, 11, 90]
    print("Arreglo original:", arr)
    bubble_sort(arr)
    print("Arreglo ordenado:", arr)
         `,
                javascript: `
function bubbleSort(arr) {
    const n = arr.length;
    
    // Recorrer el arreglo n veces
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        
        // En cada iteración, comparar elementos adyacentes
        for (let j = 0; j < n - i - 1; j++) {
            // Si el elemento actual es mayor que el siguiente, intercambiarlos
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Intercambio usando desestructuración
                swapped = true;
            }
        }
        
        // Si no hubo intercambios en esta pasada, el arreglo ya está ordenado
        if (!swapped) {
            break;
        }
    }
    
    return arr;
}

// Código de prueba
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Arreglo original:", arr);
bubbleSort(arr);
console.log("Arreglo ordenado:", arr);
         `,
                typescript: `
function bubbleSort(arr: number[]): number[] {
    const n: number = arr.length;
    
    // Recorrer el arreglo n veces
    for (let i: number = 0; i < n - 1; i++) {
        let swapped: boolean = false;
        
        // En cada iteración, comparar elementos adyacentes
        for (let j: number = 0; j < n - i - 1; j++) {
            // Si el elemento actual es mayor que el siguiente, intercambiarlos
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Intercambio usando desestructuración
                swapped = true;
            }
        }
        
        // Si no hubo intercambios en esta pasada, el arreglo ya está ordenado
        if (!swapped) {
            break;
        }
    }
    
    return arr;
}

// Código de prueba
const arr: number[] = [64, 34, 25, 12, 22, 11, 90];
console.log("Arreglo original:", arr);
bubbleSort(arr);
console.log("Arreglo ordenado:", arr);
         `,
                go: `
package main

import "fmt"

func bubbleSort(arr []int) []int {
	n := len(arr)
	
	// Recorrer el arreglo n veces
	for i := 0; i < n-1; i++ {
		swapped := false
		
		// En cada iteración, comparar elementos adyacentes
		for j := 0; j < n-i-1; j++ {
			// Si el elemento actual es mayor que el siguiente, intercambiarlos
			if arr[j] > arr[j+1] {
				// Intercambio de elementos
				arr[j], arr[j+1] = arr[j+1], arr[j]
				swapped = true
			}
		}
		
		// Si no hubo intercambios en esta pasada, el arreglo ya está ordenado
		if !swapped {
			break
		}
	}
	
	return arr
}

func main() {
	arr := []int{64, 34, 25, 12, 22, 11, 90}
	
	fmt.Println("Arreglo original:", arr)
	bubbleSort(arr)
	fmt.Println("Arreglo ordenado:", arr)
}
         `,
                c: `
#include <stdio.h>
#include <stdbool.h>

// Función para implementar el ordenamiento burbuja
void bubbleSort(int arr[], int n) {
    int i, j;
    bool swapped;
    
    // Recorrer el arreglo n veces
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        
        // En cada iteración, comparar elementos adyacentes
        for (j = 0; j < n - i - 1; j++) {
            // Si el elemento actual es mayor que el siguiente, intercambiarlos
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        
        // Si no hubo intercambios en esta pasada, el arreglo ya está ordenado
        if (!swapped) {
            break;
        }
    }
}

// Función para imprimir un arreglo
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

// Programa principal para probar el algoritmo
int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("Arreglo original: \n");
    printArray(arr, n);
    
    bubbleSort(arr, n);
    
    printf("Arreglo ordenado: \n");
    printArray(arr, n);
    
    return 0;
}
         `,
                cpp: `
#include <iostream>
#include <vector>

// Función para implementar el ordenamiento burbuja
void bubbleSort(std::vector<int>& arr) {
    int n = arr.size();
    bool swapped;
    
    // Recorrer el arreglo n veces
    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        
        // En cada iteración, comparar elementos adyacentes
        for (int j = 0; j < n - i - 1; j++) {
            // Si el elemento actual es mayor que el siguiente, intercambiarlos
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        
        // Si no hubo intercambios en esta pasada, el arreglo ya está ordenado
        if (!swapped) {
            break;
        }
    }
}

// Función para imprimir un vector
void printVector(const std::vector<int>& arr) {
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
}

// Programa principal para probar el algoritmo
int main() {
    std::vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    
    std::cout << "Arreglo original: " << std::endl;
    printVector(arr);
    
    bubbleSort(arr);
    
    std::cout << "Arreglo ordenado: " << std::endl;
    printVector(arr);
    
    return 0;
}
         `,
                csharp: `
using System;

class BubbleSort {
    // Función para implementar el ordenamiento burbuja
    static void Sort(int[] arr) {
        int n = arr.Length;
        bool swapped;
        
        // Recorrer el arreglo n veces
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            
            // En cada iteración, comparar elementos adyacentes
            for (int j = 0; j < n - i - 1; j++) {
                // Si el elemento actual es mayor que el siguiente, intercambiarlos
                if (arr[j] > arr[j + 1]) {
                    // Intercambio de elementos
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            
            // Si no hubo intercambios en esta pasada, el arreglo ya está ordenado
            if (!swapped) {
                break;
            }
        }
    }
    
    // Función para imprimir un arreglo
    static void PrintArray(int[] arr) {
        foreach (int num in arr) {
            Console.Write(num + " ");
        }
        Console.WriteLine();
    }
    
    // Programa principal para probar el algoritmo
    static void Main() {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        
        Console.WriteLine("Arreglo original:");
        PrintArray(arr);
        
        Sort(arr);
        
        Console.WriteLine("Arreglo ordenado:");
        PrintArray(arr);
    }
}
         `,
            },
        },
        {
            title: t("sort.card2.subtitle"),
            description: t("sort.card2.desc"),
            temporalComplexity: t("sort.card2.temporal.desc"),
            spatialComplexity: t("sort.card2.spatial.desc"),
            implementation: {
                java: `
public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        
        // Recorrer todo el arreglo
        for (int i = 0; i < n - 1; i++) {
            // Encontrar el índice del elemento mínimo en el subarreglo no ordenado
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            
            // Intercambiar el elemento mínimo encontrado con el primer elemento
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    
    // Método principal para probar el algoritmo
    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11};
        
        System.out.println("Arreglo original:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        
        selectionSort(arr);
        
        System.out.println("\nArreglo ordenado:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
         `,
                python: `
def selection_sort(arr):
    n = len(arr)
    
    # Recorrer todo el arreglo
    for i in range(n - 1):
        # Encontrar el índice del elemento mínimo en el subarreglo no ordenado
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        # Intercambiar el elemento mínimo encontrado con el primer elemento
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
    return arr

# Código de prueba
if __name__ == "__main__":
    arr = [64, 25, 12, 22, 11]
    print("Arreglo original:", arr)
    selection_sort(arr)
    print("Arreglo ordenado:", arr)
         `,
                javascript: `
function selectionSort(arr) {
    const n = arr.length;
    
    // Recorrer todo el arreglo
    for (let i = 0; i < n - 1; i++) {
        // Encontrar el índice del elemento mínimo en el subarreglo no ordenado
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Intercambiar el elemento mínimo encontrado con el primer elemento
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

// Código de prueba
const arr = [64, 25, 12, 22, 11];
console.log("Arreglo original:", arr);
selectionSort(arr);
console.log("Arreglo ordenado:", arr);
         `,
                typescript: `
function selectionSort(arr: number[]): number[] {
    const n: number = arr.length;
    
    // Recorrer todo el arreglo
    for (let i: number = 0; i < n - 1; i++) {
        // Encontrar el índice del elemento mínimo en el subarreglo no ordenado
        let minIndex: number = i;
        for (let j: number = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Intercambiar el elemento mínimo encontrado con el primer elemento
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

// Código de prueba
const arr: number[] = [64, 25, 12, 22, 11];
console.log("Arreglo original:", arr);
selectionSort(arr);
console.log("Arreglo ordenado:", arr);
         `,
                go: `
package main

import "fmt"

func selectionSort(arr []int) []int {
	n := len(arr)
	
	// Recorrer todo el arreglo
	for i := 0; i < n-1; i++ {
		// Encontrar el índice del elemento mínimo en el subarreglo no ordenado
		minIndex := i
		for j := i + 1; j < n; j++ {
			if arr[j] < arr[minIndex] {
				minIndex = j
			}
		}
		
		// Intercambiar el elemento mínimo encontrado con el primer elemento
		if minIndex != i {
			arr[i], arr[minIndex] = arr[minIndex], arr[i]
		}
	}
	
	return arr
}

func main() {
	arr := []int{64, 25, 12, 22, 11}
	
	fmt.Println("Arreglo original:", arr)
	selectionSort(arr)
	fmt.Println("Arreglo ordenado:", arr)
}
         `,
                c: `
#include <stdio.h>

// Función para implementar el ordenamiento por selección
void selectionSort(int arr[], int n) {
    int i, j, min_idx;
    
    // Recorrer todo el arreglo
    for (i = 0; i < n - 1; i++) {
        // Encontrar el índice del elemento mínimo en el subarreglo no ordenado
        min_idx = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        
        // Intercambiar el elemento mínimo encontrado con el primer elemento
        if (min_idx != i) {
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
}

// Función para imprimir un arreglo
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

// Programa principal para probar el algoritmo
int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("Arreglo original: \n");
    printArray(arr, n);
    
    selectionSort(arr, n);
    
    printf("Arreglo ordenado: \n");
    printArray(arr, n);
    
    return 0;
}
         `,
                cpp: `
#include <iostream>
#include <vector>

// Función para implementar el ordenamiento por selección
void selectionSort(std::vector<int>& arr) {
    int n = arr.size();
    
    // Recorrer todo el arreglo
    for (int i = 0; i < n - 1; i++) {
        // Encontrar el índice del elemento mínimo en el subarreglo no ordenado
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        
        // Intercambiar el elemento mínimo encontrado con el primer elemento
        if (min_idx != i) {
            std::swap(arr[i], arr[min_idx]);
        }
    }
}

// Función para imprimir un vector
void printVector(const std::vector<int>& arr) {
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
}

// Programa principal para probar el algoritmo
int main() {
    std::vector<int> arr = {64, 25, 12, 22, 11};
    
    std::cout << "Arreglo original: " << std::endl;
    printVector(arr);
    
    selectionSort(arr);
    
    std::cout << "Arreglo ordenado: " << std::endl;
    printVector(arr);
    
    return 0;
}
         `,
                csharp: `
using System;

class SelectionSort {
    // Función para implementar el ordenamiento por selección
    static void Sort(int[] arr) {
        int n = arr.Length;
        
        // Recorrer todo el arreglo
        for (int i = 0; i < n - 1; i++) {
            // Encontrar el índice del elemento mínimo en el subarreglo no ordenado
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            
            // Intercambiar el elemento mínimo encontrado con el primer elemento
            if (minIndex != i) {
                int temp = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = temp;
            }
        }
    }
    
    // Función para imprimir un arreglo
    static void PrintArray(int[] arr) {
        foreach (int num in arr) {
            Console.Write(num + " ");
        }
        Console.WriteLine();
    }
    
    // Programa principal para probar el algoritmo
    static void Main() {
        int[] arr = {64, 25, 12, 22, 11};
        
        Console.WriteLine("Arreglo original:");
        PrintArray(arr);
        
        Sort(arr);
        
        Console.WriteLine("Arreglo ordenado:");
        PrintArray(arr);
    }
}
         `,
            },
        },
        {
            title: t("sort.card3.subtitle"),
            description: t("sort.card3.desc"),
            temporalComplexity: t("sort.card3.temporal.desc"),
            spatialComplexity: t("sort.card3.spatial.desc"),
            implementation: {
                java: `
public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        
        // Recorrer el arreglo desde el segundo elemento
        for (int i = 1; i < n; i++) {
            int key = arr[i]; // Elemento a insertar en la parte ordenada
            int j = i - 1;
            
            // Mover elementos de arr[0..i-1] que son mayores que key
            // a una posición adelante de su posición actual
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key; // Insertar key en su posición correcta
        }
    }
    
    // Método principal para probar el algoritmo
    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        
        System.out.println("Arreglo original:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        
        insertionSort(arr);
        
        System.out.println("\nArreglo ordenado:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
         `,
                python: `
def insertion_sort(arr):
    # Recorrer desde el segundo elemento hasta el último
    for i in range(1, len(arr)):
        key = arr[i]  # Elemento a insertar en la parte ordenada
        j = i - 1
        
        # Mover elementos de arr[0..i-1] que son mayores que key
        # a una posición adelante de su posición actual
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key  # Insertar key en su posición correcta
    
    return arr

# Código de prueba
if __name__ == "__main__":
    arr = [12, 11, 13, 5, 6]
    print("Arreglo original:", arr)
    insertion_sort(arr)
    print("Arreglo ordenado:", arr)
         `,
                javascript: `
function insertionSort(arr) {
    const n = arr.length;
    
    // Recorrer desde el segundo elemento hasta el último
    for (let i = 1; i < n; i++) {
        let key = arr[i];  // Elemento a insertar en la parte ordenada
        let j = i - 1;
        
        // Mover elementos de arr[0..i-1] que son mayores que key
        // a una posición adelante de su posición actual
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;  // Insertar key en su posición correcta
    }
    
    return arr;
}

// Código de prueba
const arr = [12, 11, 13, 5, 6];
console.log("Arreglo original:", arr);
insertionSort(arr);
console.log("Arreglo ordenado:", arr);
         `,
                typescript: `
function insertionSort(arr: number[]): number[] {
    const n: number = arr.length;
    
    // Recorrer desde el segundo elemento hasta el último
    for (let i: number = 1; i < n; i++) {
        let key: number = arr[i];  // Elemento a insertar en la parte ordenada
        let j: number = i - 1;
        
        // Mover elementos de arr[0..i-1] que son mayores que key
        // a una posición adelante de su posición actual
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;  // Insertar key en su posición correcta
    }
    
    return arr;
}

// Código de prueba
const arr: number[] = [12, 11, 13, 5, 6];
console.log("Arreglo original:", arr);
insertionSort(arr);
console.log("Arreglo ordenado:", arr);
         `,
                go: `
package main

import "fmt"

func insertionSort(arr []int) []int {
	n := len(arr)
	
	// Recorrer desde el segundo elemento hasta el último
	for i := 1; i < n; i++ {
		key := arr[i]  // Elemento a insertar en la parte ordenada
		j := i - 1
		
		// Mover elementos de arr[0..i-1] que son mayores que key
		// a una posición adelante de su posición actual
		for j >= 0 && arr[j] > key {
			arr[j+1] = arr[j]
			j--
		}
		arr[j+1] = key  // Insertar key en su posición correcta
	}
	
	return arr
}

func main() {
	arr := []int{12, 11, 13, 5, 6}
	
	fmt.Println("Arreglo original:", arr)
	insertionSort(arr)
	fmt.Println("Arreglo ordenado:", arr)
}
         `,
                c: `
#include <stdio.h>

// Función para implementar el ordenamiento por inserción
void insertionSort(int arr[], int n) {
    int i, key, j;
    
    // Recorrer desde el segundo elemento hasta el último
    for (i = 1; i < n; i++) {
        key = arr[i];  // Elemento a insertar en la parte ordenada
        j = i - 1;
        
        // Mover elementos de arr[0..i-1] que son mayores que key
        // a una posición adelante de su posición actual
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;  // Insertar key en su posición correcta
    }
}

// Función para imprimir un arreglo
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

// Programa principal para probar el algoritmo
int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("Arreglo original: \n");
    printArray(arr, n);
    
    insertionSort(arr, n);
    
    printf("Arreglo ordenado: \n");
    printArray(arr, n);
    
    return 0;
}
         `,
                cpp: `
#include <iostream>
#include <vector>

// Función para implementar el ordenamiento por inserción
void insertionSort(std::vector<int>& arr) {
    int n = arr.size();
    
    // Recorrer desde el segundo elemento hasta el último
    for (int i = 1; i < n; i++) {
        int key = arr[i];  // Elemento a insertar en la parte ordenada
        int j = i - 1;
        
        // Mover elementos de arr[0..i-1] que son mayores que key
        // a una posición adelante de su posición actual
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;  // Insertar key en su posición correcta
    }
}

// Función para imprimir un vector
void printVector(const std::vector<int>& arr) {
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
}

// Programa principal para probar el algoritmo
int main() {
    std::vector<int> arr = {12, 11, 13, 5, 6};
    
    std::cout << "Arreglo original: " << std::endl;
    printVector(arr);
    
    insertionSort(arr);
    
    std::cout << "Arreglo ordenado: " << std::endl;
    printVector(arr);
    
    return 0;
}
         `,
                csharp: `
using System;

class InsertionSort {
    // Función para implementar el ordenamiento por inserción
    static void Sort(int[] arr) {
        int n = arr.Length;
        
        // Recorrer desde el segundo elemento hasta el último
        for (int i = 1; i < n; i++) {
            int key = arr[i];  // Elemento a insertar en la parte ordenada
            int j = i - 1;
            
            // Mover elementos de arr[0..i-1] que son mayores que key
            // a una posición adelante de su posición actual
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;  // Insertar key en su posición correcta
        }
    }
    
    // Función para imprimir un arreglo
    static void PrintArray(int[] arr) {
        foreach (int num in arr) {
            Console.Write(num + " ");
        }
        Console.WriteLine();
    }
    
    // Programa principal para probar el algoritmo
    static void Main() {
        int[] arr = {12, 11, 13, 5, 6};
        
        Console.WriteLine("Arreglo original:");
        PrintArray(arr);
        
        Sort(arr);
        
        Console.WriteLine("Arreglo ordenado:");
        PrintArray(arr);
    }
}
         `,
            },
        },
        {
            title: t("sort.card4.subtitle"),
            description: t("sort.card4.desc"),
            temporalComplexity: t("sort.card4.temporal.desc"),
            spatialComplexity: t("sort.card4.spatial.desc"),
            implementation: {
                java: `
public class MergeSort {
    // Función principal de ordenamiento por fusión
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            // Encuentra el punto medio del arreglo
            int mid = left + (right - left) / 2;
            
            // Ordena recursivamente la primera y segunda mitad
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            
            // Fusiona las mitades ordenadas
            merge(arr, left, mid, right);
        }
    }
    
    // Función para fusionar dos subarreglos de arr[]
    public static void merge(int[] arr, int left, int mid, int right) {
        // Calcula el tamaño de los subarreglos temporales
        int n1 = mid - left + 1;
        int n2 = right - mid;
        
        // Crea arreglos temporales
        int[] L = new int[n1];
        int[] R = new int[n2];
        
        // Copia los datos a los arreglos temporales
        for (int i = 0; i < n1; ++i) {
            L[i] = arr[left + i];
        }
        for (int j = 0; j < n2; ++j) {
            R[j] = arr[mid + 1 + j];
        }
        
        // Fusiona los arreglos temporales
        
        // Índices iniciales de los subarreglos
        int i = 0, j = 0;
        
        // Índice inicial del subarreglo fusionado
        int k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        
        // Copia los elementos restantes de L[], si hay alguno
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        
        // Copia los elementos restantes de R[], si hay alguno
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
    
    // Método auxiliar para iniciar el ordenamiento
    public static void sort(int[] arr) {
        mergeSort(arr, 0, arr.length - 1);
    }
    
    // Método principal para probar el algoritmo
    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6, 7};
        
        System.out.println("Arreglo original:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        
        sort(arr);
        
        System.out.println("\nArreglo ordenado:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
         `,
                python: `
def merge_sort(arr):
    if len(arr) > 1:
        # Encuentra el punto medio del arreglo
        mid = len(arr) // 2
        
        # Divide el arreglo en dos mitades
        L = arr[:mid]
        R = arr[mid:]
        
        # Ordena recursivamente la primera y segunda mitad
        merge_sort(L)
        merge_sort(R)
        
        # Inicializa índices para la fusión
        i = j = k = 0
        
        # Fusiona las mitades ordenadas
        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        
        # Verifica si quedan elementos en L
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        
        # Verifica si quedan elementos en R
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    
    return arr

# Código de prueba
if __name__ == "__main__":
    arr = [12, 11, 13, 5, 6, 7]
    print("Arreglo original:", arr)
    merge_sort(arr)
    print("Arreglo ordenado:", arr)
         `,
                javascript: `
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    // Encuentra el punto medio del arreglo
    const mid = Math.floor(arr.length / 2);
    
    // Divide el arreglo en dos mitades
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    // Fusiona recursivamente las mitades ordenadas
    return merge(mergeSort(left), mergeSort(right));
}

// Función para fusionar dos subarreglos ordenados
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compara los elementos de ambos arreglos y los agrega en orden
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Concatena los elementos restantes
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Código de prueba
const arr = [12, 11, 13, 5, 6, 7];
console.log("Arreglo original:", arr);
const sortedArr = mergeSort([...arr]); // Crea una copia para no modificar el original
console.log("Arreglo ordenado:", sortedArr);
         `,
                typescript: `
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }
    
    // Encuentra el punto medio del arreglo
    const mid: number = Math.floor(arr.length / 2);
    
    // Divide el arreglo en dos mitades
    const left: number[] = arr.slice(0, mid);
    const right: number[] = arr.slice(mid);
    
    // Fusiona recursivamente las mitades ordenadas
    return merge(mergeSort(left), mergeSort(right));
}

// Función para fusionar dos subarreglos ordenados
function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let leftIndex: number = 0;
    let rightIndex: number = 0;
    
    // Compara los elementos de ambos arreglos y los agrega en orden
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Concatena los elementos restantes
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Código de prueba
const arr: number[] = [12, 11, 13, 5, 6, 7];
console.log("Arreglo original:", arr);
const sortedArr: number[] = mergeSort([...arr]); // Crea una copia para no modificar el original
console.log("Arreglo ordenado:", sortedArr);
         `,
                go: `
package main

import "fmt"

func mergeSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}
	
	// Encuentra el punto medio del arreglo
	mid := len(arr) / 2
	
	// Divide el arreglo en dos mitades
	left := make([]int, mid)
	right := make([]int, len(arr)-mid)
	
	copy(left, arr[:mid])
	copy(right, arr[mid:])
	
	// Ordena recursivamente la primera y segunda mitad
	left = mergeSort(left)
	right = mergeSort(right)
	
	// Fusiona las mitades ordenadas
	return merge(left, right)
}

// Función para fusionar dos subarreglos ordenados
func merge(left, right []int) []int {
	result := make([]int, 0, len(left)+len(right))
	
	// Mientras haya elementos en ambos arreglos
	for len(left) > 0 && len(right) > 0 {
		if left[0] <= right[0] {
			result = append(result, left[0])
			left = left[1:]
		} else {
			result = append(result, right[0])
			right = right[1:]
		}
	}
	
	// Agrega los elementos restantes
	result = append(result, left...)
	result = append(result, right...)
	
	return result
}

func main() {
	arr := []int{12, 11, 13, 5, 6, 7}
	
	fmt.Println("Arreglo original:", arr)
	sortedArr := mergeSort(arr) // Retorna un nuevo arreglo ordenado
	fmt.Println("Arreglo ordenado:", sortedArr)
}
         `,
                c: `
#include <stdio.h>
#include <stdlib.h>

// Función para fusionar dos subarreglos de arr[]
void merge(int arr[], int left, int mid, int right) {
    int i, j, k;
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Crea arreglos temporales
    int* L = (int*)malloc(n1 * sizeof(int));
    int* R = (int*)malloc(n2 * sizeof(int));
    
    // Copia los datos a los arreglos temporales L[] y R[]
    for (i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }
    for (j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j];
    }
    
    // Fusiona los arreglos temporales de vuelta en arr[left..right]
    i = 0; // Índice inicial del primer subarreglo
    j = 0; // Índice inicial del segundo subarreglo
    k = left; // Índice inicial del subarreglo fusionado
    
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    // Copia los elementos restantes de L[], si hay alguno
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    // Copia los elementos restantes de R[], si hay alguno
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
    
    // Libera la memoria de los arreglos temporales
    free(L);
    free(R);
}

// Función principal de ordenamiento por fusión
void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        // Encuentra el punto medio
        int mid = left + (right - left) / 2;
        
        // Ordena la primera y segunda mitad
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        
        // Fusiona las mitades ordenadas
        merge(arr, left, mid, right);
    }
}

// Función para imprimir un arreglo
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

// Programa principal para probar el algoritmo
int main() {
    int arr[] = {12, 11, 13, 5, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("Arreglo original: \n");
    printArray(arr, n);
    
    mergeSort(arr, 0, n - 1);
    
    printf("Arreglo ordenado: \n");
    printArray(arr, n);
    
    return 0;
}
         `,
                cpp: `
#include <iostream>
#include <vector>

// Función para fusionar dos subarreglos ordenados
void merge(std::vector<int>& arr, int left, int mid, int right) {
    // Calcula los tamaños de los subarreglos temporales
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Crea arreglos temporales
    std::vector<int> L(n1), R(n2);
    
    // Copia los datos a los arreglos temporales
    for (int i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }
    for (int j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j];
    }
    
    // Fusiona los arreglos temporales
    int i = 0; // Índice inicial para el primer subarreglo
    int j = 0; // Índice inicial para el segundo subarreglo
    int k = left; // Índice inicial para el subarreglo fusionado
    
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    // Copia los elementos restantes de L[], si hay alguno
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    // Copia los elementos restantes de R[], si hay alguno
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Función principal de ordenamiento por fusión
void mergeSort(std::vector<int>& arr, int left, int right) {
    if (left < right) {
        // Encuentra el punto medio
        int mid = left + (right - left) / 2;
        
        // Ordena la primera y segunda mitad
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        
        // Fusiona las mitades ordenadas
        merge(arr, left, mid, right);
    }
}

// Función auxiliar para iniciar el ordenamiento
void sort(std::vector<int>& arr) {
    mergeSort(arr, 0, arr.size() - 1);
}

// Función para imprimir un vector
void printVector(const std::vector<int>& arr) {
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
}

// Programa principal para probar el algoritmo
int main() {
    std::vector<int> arr = {12, 11, 13, 5, 6, 7};
    
    std::cout << "Arreglo original: " << std::endl;
    printVector(arr);
    
    sort(arr);
    
    std::cout << "Arreglo ordenado: " << std::endl;
    printVector(arr);
    
    return 0;
}
         `,
                csharp: `
using System;

class MergeSort {
    // Función principal de ordenamiento por fusión
    static void Sort(int[] arr, int left, int right) {
        if (left < right) {
            // Encuentra el punto medio
            int mid = left + (right - left) / 2;
            
            // Ordena la primera y segunda mitad
            Sort(arr, left, mid);
            Sort(arr, mid + 1, right);
            
            // Fusiona las mitades ordenadas
            Merge(arr, left, mid, right);
        }
    }
    
    // Función para fusionar dos subarreglos de arr[]
    static void Merge(int[] arr, int left, int mid, int right) {
        // Calcula los tamaños de los subarreglos temporales
        int n1 = mid - left + 1;
        int n2 = right - mid;
        
        // Crea arreglos temporales
        int[] L = new int[n1];
        int[] R = new int[n2];
        
        // Copia los datos a los arreglos temporales
        for (int i = 0; i < n1; i++) {
            L[i] = arr[left + i];
        }
        for (int j = 0; j < n2; j++) {
            R[j] = arr[mid + 1 + j];
        }
        
        // Fusiona los arreglos temporales
        int i = 0; // Índice inicial para el primer subarreglo
        int j = 0; // Índice inicial para el segundo subarreglo
        int k = left; // Índice inicial para el subarreglo fusionado
        
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        
        // Copia los elementos restantes de L[], si hay alguno
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        
        // Copia los elementos restantes de R[], si hay alguno
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
    
    // Método auxiliar para iniciar el ordenamiento
    static void MergeSortArray(int[] arr) {
        Sort(arr, 0, arr.Length - 1);
    }
    
    // Función para imprimir un arreglo
    static void PrintArray(int[] arr) {
        foreach (int num in arr) {
            Console.Write(num + " ");
        }
        Console.WriteLine();
    }
    
    // Programa principal para probar el algoritmo
    static void Main() {
        int[] arr = {12, 11, 13, 5, 6, 7};
        
        Console.WriteLine("Arreglo original:");
        PrintArray(arr);
        
        MergeSortArray(arr);
        
        Console.WriteLine("Arreglo ordenado:");
        PrintArray(arr);
    }
}
         `,
            },
        },
        {
            title: t("sort.card5.subtitle"),
            description: t("sort.card5.desc"),
            temporalComplexity: t("sort.card5.temporal.desc"),
            spatialComplexity: t("sort.card5.spatial.desc"),
            implementation: {
                java: `
public class QuickSort {
    // Función para intercambiar dos elementos
    public static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    // Función para particionar el arreglo y devolver el índice del pivote
    public static int partition(int[] arr, int low, int high) {
        // Selecciona el último elemento como pivote
        int pivot = arr[high];
        
        // Índice del elemento más pequeño e indica la 
        // posición correcta del pivote hasta ahora
        int i = (low - 1);
        
        for (int j = low; j <= high - 1; j++) {
            // Si el elemento actual es menor que el pivote
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return (i + 1);
    }
    
    // Función principal de ordenamiento rápido
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // pi es el índice de partición, arr[pi] está ahora en la posición correcta
            int pi = partition(arr, low, high);
            
            // Ordena recursivamente los elementos antes y después de la partición
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    // Método auxiliar para iniciar el ordenamiento
    public static void sort(int[] arr) {
        quickSort(arr, 0, arr.length - 1);
    }
    
    // Método principal para probar el algoritmo
    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        
        System.out.println("Arreglo original:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        
        sort(arr);
        
        System.out.println("\nArreglo ordenado:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
         `,
                python: `
def quick_sort(arr):
    # Función interna para ordenar una parte específica del arreglo
    def _quick_sort(arr, low, high):
        if low < high:
            # pi es el índice de partición, arr[pi] está ahora en la posición correcta
            pi = partition(arr, low, high)
            
            # Ordena recursivamente los elementos antes y después de la partición
            _quick_sort(arr, low, pi - 1)
            _quick_sort(arr, pi + 1, high)
    
    # Función para particionar el arreglo y devolver el índice del pivote
    def partition(arr, low, high):
        # Selecciona el último elemento como pivote
        pivot = arr[high]
        
        # Índice del elemento más pequeño e indica la
        # posición correcta del pivote hasta ahora
        i = low - 1
        
        for j in range(low, high):
            # Si el elemento actual es menor que el pivote
            if arr[j] < pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        
        # Coloca el pivote en su posición correcta
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1
    
    _quick_sort(arr, 0, len(arr) - 1)
    return arr

# Código de prueba
if __name__ == "__main__":
    arr = [10, 7, 8, 9, 1, 5]
    print("Arreglo original:", arr)
    quick_sort(arr)
    print("Arreglo ordenado:", arr)
         `,
                javascript: `
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // pi es el índice de partición, arr[pi] está ahora en la posición correcta
        const pi = partition(arr, low, high);
        
        // Ordena recursivamente los elementos antes y después de la partición
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    
    return arr;
}

// Función para particionar el arreglo y devolver el índice del pivote
function partition(arr, low, high) {
    // Selecciona el último elemento como pivote
    const pivot = arr[high];
    
    // Índice del elemento más pequeño e indica la
    // posición correcta del pivote hasta ahora
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        // Si el elemento actual es menor que el pivote
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Intercambio
        }
    }
    
    // Coloca el pivote en su posición correcta
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Código de prueba
const arr = [10, 7, 8, 9, 1, 5];
console.log("Arreglo original:", arr);
quickSort(arr);
console.log("Arreglo ordenado:", arr);
         `,
                typescript: `
function quickSort(arr: number[], low: number = 0, high: number = arr.length - 1): number[] {
    if (low < high) {
        // pi es el índice de partición, arr[pi] está ahora en la posición correcta
        const pi: number = partition(arr, low, high);
        
        // Ordena recursivamente los elementos antes y después de la partición
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    
    return arr;
}

// Función para particionar el arreglo y devolver el índice del pivote
function partition(arr: number[], low: number, high: number): number {
    // Selecciona el último elemento como pivote
    const pivot: number = arr[high];
    
    // Índice del elemento más pequeño e indica la
    // posición correcta del pivote hasta ahora
    let i: number = low - 1;
    
    for (let j: number = low; j < high; j++) {
        // Si el elemento actual es menor que el pivote
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Intercambio
        }
    }
    
    // Coloca el pivote en su posición correcta
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Código de prueba
const arr: number[] = [10, 7, 8, 9, 1, 5];
console.log("Arreglo original:", arr);
quickSort(arr);
console.log("Arreglo ordenado:", arr);
         `,
                go: `
package main

import (
    "fmt"
)

// Función para particionar el arreglo
func partition(arr []int, low, high int) int {
    // Seleccionar el último elemento como pivote
    pivot := arr[high]
    
    // Índice del elemento más pequeño
    i := low - 1
    
    // Recorrer todos los elementos del subarreglo
    for j := low; j < high; j++ {
        // Si el elemento actual es menor o igual al pivote
        if arr[j] <= pivot {
            // Incrementar índice de elementos pequeños
            i++
            
            // Intercambiar elementos
            arr[i], arr[j] = arr[j], arr[i]
        }
    }
    
    // Colocar pivote en posición correcta
    arr[i+1], arr[high] = arr[high], arr[i+1]
    
    // Devolver índice del pivote
    return i + 1
}

// Función QuickSort recursiva
func quickSort(arr []int, low, high int) {
    // Verificar si hay más de un elemento para ordenar
    if low < high {
        // 1. DIVIDIR: Particionar el arreglo y obtener el índice del pivote
        pivotIndex := partition(arr, low, high)
        
        // 2. CONQUISTAR: Ordenar recursivamente las sublistas
        // Ordenar sublista izquierda (menores que pivote)
        quickSort(arr, low, pivotIndex-1)
        
        // Ordenar sublista derecha (mayores que pivote)
        quickSort(arr, pivotIndex+1, high)
    }
}

func main() {
    // Arreglo de ejemplo
    arr := []int{10, 7, 8, 9, 1, 5}
    
    fmt.Println("Arreglo original:", arr)
    
    // Ejecutar QuickSort
    quickSort(arr, 0, len(arr)-1)
    
    fmt.Println("Arreglo ordenado:", arr)
}
         `,
                c: `
#include <stdio.h>

// Función para intercambiar dos elementos
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Función para particionar el arreglo
int partition(int arr[], int low, int high) {
    // Seleccionar el último elemento como pivote
    int pivot = arr[high];
    
    // Índice del elemento más pequeño
    int i = low - 1;
    
    // Recorrer todos los elementos del subarreglo
    for (int j = low; j < high; j++) {
        // Si el elemento actual es menor o igual al pivote
        if (arr[j] <= pivot) {
            // Incrementar índice de elementos pequeños
            i++;
            
            // Intercambiar elementos
            swap(&arr[i], &arr[j]);
        }
    }
    
    // Colocar pivote en posición correcta
    swap(&arr[i + 1], &arr[high]);
    
    // Devolver índice del pivote
    return i + 1;
}

// Función QuickSort recursiva
void quickSort(int arr[], int low, int high) {
    // Verificar si hay más de un elemento para ordenar
    if (low < high) {
        // 1. DIVIDIR: Particionar el arreglo y obtener el índice del pivote
        int pivotIndex = partition(arr, low, high);
        
        // 2. CONQUISTAR: Ordenar recursivamente las sublistas
        // Ordenar sublista izquierda (menores que pivote)
        quickSort(arr, low, pivotIndex - 1);
        
        // Ordenar sublista derecha (mayores que pivote)
        quickSort(arr, pivotIndex + 1, high);
    }
}

// Función para imprimir arreglo
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

int main() {
    // Arreglo de ejemplo
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("Arreglo original: ");
    printArray(arr, n);
    
    // Ejecutar QuickSort
    quickSort(arr, 0, n - 1);
    
    printf("Arreglo ordenado: ");
    printArray(arr, n);
    
    return 0;
}
         `,
                cpp: `
#include <iostream>
#include <vector>

// Función para particionar el arreglo
int partition(std::vector<int>& arr, int low, int high) {
    // Seleccionar el último elemento como pivote
    int pivot = arr[high];
    
    // Índice del elemento más pequeño
    int i = low - 1;
    
    // Recorrer todos los elementos del subarreglo
    for (int j = low; j < high; j++) {
        // Si el elemento actual es menor o igual al pivote
        if (arr[j] <= pivot) {
            // Incrementar índice de elementos pequeños
            i++;
            
            // Intercambiar elementos
            std::swap(arr[i], arr[j]);
        }
    }
    
    // Colocar pivote en posición correcta
    std::swap(arr[i + 1], arr[high]);
    
    // Devolver índice del pivote
    return i + 1;
}

// Función QuickSort recursiva
void quickSort(std::vector<int>& arr, int low, int high) {
    // Verificar si hay más de un elemento para ordenar
    if (low < high) {
        // 1. DIVIDIR: Particionar el arreglo y obtener el índice del pivote
        int pivotIndex = partition(arr, low, high);
        
        // 2. CONQUISTAR: Ordenar recursivamente las sublistas
        // Ordenar sublista izquierda (menores que pivote)
        quickSort(arr, low, pivotIndex - 1);
        
        // Ordenar sublista derecha (mayores que pivote)
        quickSort(arr, pivotIndex + 1, high);
    }
}

// Función para imprimir arreglo
void printArray(const std::vector<int>& arr) {
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
}

int main() {
    // Arreglo de ejemplo
    std::vector<int> arr = {10, 7, 8, 9, 1, 5};
    
    std::cout << "Arreglo original: ";
    printArray(arr);
    
    // Ejecutar QuickSort
    quickSort(arr, 0, arr.size() - 1);
    
    std::cout << "Arreglo ordenado: ";
    printArray(arr);
    
    return 0;
}
         `,
                csharp: `
using System;

class QuickSort {
    // Función para particionar el arreglo
    static int Partition(int[] arr, int low, int high) {
        // Seleccionar el último elemento como pivote
        int pivot = arr[high];
        
        // Índice del elemento más pequeño
        int i = low - 1;
        
        // Recorrer todos los elementos del subarreglo
        for (int j = low; j < high; j++) {
            // Si el elemento actual es menor o igual al pivote
            if (arr[j] <= pivot) {
                // Incrementar índice de elementos pequeños
                i++;
                
                // Intercambiar elementos
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        // Colocar pivote en posición correcta
        int tempPivot = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = tempPivot;
        
        // Devolver índice del pivote
        return i + 1;
    }

    // Función QuickSort recursiva
    static void QuickSortMethod(int[] arr, int low, int high) {
        // Verificar si hay más de un elemento para ordenar
        if (low < high) {
            // 1. DIVIDIR: Particionar el arreglo y obtener el índice del pivote
            int pivotIndex = Partition(arr, low, high);
            
            // 2. CONQUISTAR: Ordenar recursivamente las sublistas
            // Ordenar sublista izquierda (menores que pivote)
            QuickSortMethod(arr, low, pivotIndex - 1);
            
            // Ordenar sublista derecha (mayores que pivote)
            QuickSortMethod(arr, pivotIndex + 1, high);
        }
    }

    // Función para imprimir arreglo
    static void PrintArray(int[] arr) {
        foreach (int num in arr) {
            Console.Write(num + " ");
        }
        Console.WriteLine();
    }

    static void Main() {
        // Arreglo de ejemplo
        int[] arr = {10, 7, 8, 9, 1, 5};
        
        Console.WriteLine("Arreglo original:");
        PrintArray(arr);
        
        // Ejecutar QuickSort
        QuickSortMethod(arr, 0, arr.Length - 1);
        
        Console.WriteLine("Arreglo ordenado:");
        PrintArray(arr);
    }
}
         `,
            },
        },
        {
            title: t("sort.card6.subtitle"),
            description: t("sort.card6.desc"),
            temporalComplexity: t("sort.card6.temporal.desc"),
            spatialComplexity: t("sort.card6.spatial.desc"),
            implementation: {
                java: `
/* HeapSort en Java */
// Este algoritmo utiliza un heap máximo para ordenar el arreglo.
public class HeapSort {
    // Método para ajustar el subárbol con raíz en 'i'
    public static void heapify(int arr[], int n, int i) {
        int largest = i;           // Inicializa 'largest' como raíz
        int left = 2 * i + 1;        // Índice del hijo izquierdo
        int right = 2 * i + 2;       // Índice del hijo derecho

        // Si el hijo izquierdo es mayor que la raíz
        if (left < n && arr[left] > arr[largest])
            largest = left;

        // Si el hijo derecho es mayor que el mayor actual
        if (right < n && arr[right] > arr[largest])
            largest = right;

        // Si el mayor no es la raíz
        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            // Heapifica recursivamente el subárbol afectado
            heapify(arr, n, largest);
        }
    }

    // Método principal para realizar HeapSort
    public static void heapSort(int arr[]) {
        int n = arr.length;
        // Construir el heap máximo
        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);
        // Extraer elementos del heap uno a uno
        for (int i = n - 1; i >= 0; i--) {
            // Mueve la raíz actual al final
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            // Heapifica el heap reducido
            heapify(arr, i, 0);
        }
    }

    public static void main(String args[]) {
        int arr[] = { 12, 11, 13, 5, 6, 7 };
        System.out.println("Array original:");
        for (int num : arr)
            System.out.print(num + " ");
        System.out.println();
        heapSort(arr);
        System.out.println("Array ordenado:");
        for (int num : arr)
            System.out.print(num + " ");
    }
}

         `,
                python: `
# HeapSort en Python
def heapify(arr, n, i):
    # Inicializa 'largest' como raíz
    largest = i
    left = 2 * i + 1   # Hijo izquierdo
    right = 2 * i + 2  # Hijo derecho

    # Si el hijo izquierdo es mayor que la raíz
    if left < n and arr[left] > arr[largest]:
        largest = left
    # Si el hijo derecho es mayor que el mayor actual
    if right < n and arr[right] > arr[largest]:
        largest = right
    # Si el mayor no es la raíz, se intercambian y se heapifica recursivamente
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heapSort(arr):
    n = len(arr)
    # Construir el heap máximo
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    # Extraer elementos uno a uno
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]  # Intercambio
        heapify(arr, i, 0)

# Ejemplo de uso
if __name__ == "__main__":
    arr = [12, 11, 13, 5, 6, 7]
    print("Array original:", arr)
    heapSort(arr)
    print("Array ordenado:", arr)

         `,
                javascript: `
/* HeapSort en JavaScript */
// Utiliza un heap máximo para ordenar el arreglo.
function heapify(arr, n, i) {
    let largest = i;          // Inicializa 'largest' como raíz
    let left = 2 * i + 1;       // Índice del hijo izquierdo
    let right = 2 * i + 2;      // Índice del hijo derecho

    // Si el hijo izquierdo es mayor que la raíz
    if (left < n && arr[left] > arr[largest])
        largest = left;
    // Si el hijo derecho es mayor que el mayor actual
    if (right < n && arr[right] > arr[largest])
        largest = right;
    // Si 'largest' no es la raíz, se realiza el intercambio y se heapifica
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;
    // Construir el heap máximo
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    // Extraer elementos uno a uno
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}

// Ejemplo de uso:
let arr = [12, 11, 13, 5, 6, 7];
console.log("Array original:", arr);
console.log("Array ordenado:", heapSort(arr));

         `,
                typescript: `
/* HeapSort en TypeScript */
function heapify(arr: number[], n: number, i: number): void {
    let largest: number = i;      // Inicializa 'largest' como raíz
    let left: number = 2 * i + 1;   // Índice del hijo izquierdo
    let right: number = 2 * i + 2;  // Índice del hijo derecho

    // Comprueba si el hijo izquierdo es mayor que la raíz
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    // Comprueba si el hijo derecho es mayor que el mayor actual
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    // Si 'largest' no es la raíz, se intercambian los elementos y se llama recursivamente a heapify
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr: number[]): number[] {
    const n: number = arr.length;
    // Construir el heap máximo
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    // Extraer elementos uno a uno
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}

// Ejemplo de uso:
const arr: number[] = [12, 11, 13, 5, 6, 7];
console.log("Array original:", arr);
console.log("Array ordenado:", heapSort(arr));

         `,
                go: `
/* HeapSort en Go */
package main

import "fmt"

// Función heapify ajusta el subárbol con raíz en 'i'
func heapify(arr []int, n int, i int) {
    largest := i             // Inicializa 'largest' como raíz
    left := 2*i + 1          // Hijo izquierdo
    right := 2*i + 2         // Hijo derecho

    // Si el hijo izquierdo es mayor que la raíz
    if left < n && arr[left] > arr[largest] {
        largest = left
    }
    // Si el hijo derecho es mayor que el mayor actual
    if right < n && arr[right] > arr[largest] {
        largest = right
    }
    // Si 'largest' no es la raíz, intercambia y heapifica recursivamente
    if largest != i {
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)
    }
}

// Función heapSort que ordena el arreglo usando HeapSort
func heapSort(arr []int) {
    n := len(arr)
    // Construir el heap máximo
    for i := n/2 - 1; i >= 0; i-- {
        heapify(arr, n, i)
    }
    // Extraer elementos uno a uno del heap
    for i := n - 1; i >= 0; i-- {
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
    }
}

func main() {
    arr := []int{12, 11, 13, 5, 6, 7}
    fmt.Println("Array original:", arr)
    heapSort(arr)
    fmt.Println("Array ordenado:", arr)
}

         `,
                c: `
/* HeapSort en C */
#include <stdio.h>

// Función para intercambiar dos elementos
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Heapify ajusta el subárbol con raíz en 'i'
void heapify(int arr[], int n, int i) {
    int largest = i;           // Inicializa 'largest' como raíz
    int left = 2 * i + 1;        // Hijo izquierdo
    int right = 2 * i + 2;       // Hijo derecho

    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;
    if (largest != i) {
        swap(&arr[i], &arr[largest]);
        heapify(arr, n, largest);
    }
}

// Función principal de HeapSort
void heapSort(int arr[], int n) {
    // Construir el heap máximo
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    // Extraer elementos uno a uno
    for (int i = n - 1; i >= 0; i--) {
        swap(&arr[0], &arr[i]);
        heapify(arr, i, 0);
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6, 7};
    int n = sizeof(arr)/sizeof(arr[0]);
    printf("Array original: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
    heapSort(arr, n);
    printf("Array ordenado: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
    return 0;
}

         `,
                cpp: `
/* HeapSort en C++ */
#include <iostream>
#include <vector>
using namespace std;

// Función heapify que ajusta el subárbol con raíz en 'i'
void heapify(vector<int>& arr, int n, int i) {
    int largest = i;  // Inicializa 'largest' como raíz
    int left = 2 * i + 1;   // Hijo izquierdo
    int right = 2 * i + 2;  // Hijo derecho

    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;
    if (largest != i) {
        swap(arr[i], arr[largest]);  // Intercambio
        heapify(arr, n, largest);
    }
}

// Función principal de HeapSort
void heapSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (int i = n - 1; i >= 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

int main() {
    vector<int> arr = {12, 11, 13, 5, 6, 7};
    cout << "Array original: ";
    for (int num : arr)
        cout << num << " ";
    cout << endl;
    heapSort(arr);
    cout << "Array ordenado: ";
    for (int num : arr)
        cout << num << " ";
    cout << endl;
    return 0;
}

         `,
                csharp: `
/* HeapSort en C# */
using System;

public class HeapSortClass {
    // Método para heapificar el subárbol con raíz en 'i'
    public static void Heapify(int[] arr, int n, int i) {
        int largest = i;  // Inicializa 'largest' como raíz
        int left = 2 * i + 1;  // Hijo izquierdo
        int right = 2 * i + 2; // Hijo derecho

        if (left < n && arr[left] > arr[largest])
            largest = left;
        if (right < n && arr[right] > arr[largest])
            largest = right;
        if (largest != i) {
            int temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;
            Heapify(arr, n, largest);
        }
    }

    // Método principal para HeapSort
    public static void HeapSort(int[] arr) {
        int n = arr.Length;
        for (int i = n / 2 - 1; i >= 0; i--)
            Heapify(arr, n, i);
        for (int i = n - 1; i >= 0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            Heapify(arr, i, 0);
        }
    }

    public static void Main() {
        int[] arr = {12, 11, 13, 5, 6, 7};
        Console.WriteLine("Array original: " + string.Join(" ", arr));
        HeapSort(arr);
        Console.WriteLine("Array ordenado: " + string.Join(" ", arr));
    }
}

         `,
            },
        },
        {
            title: t("sort.card7.subtitle"),
            description: t("sort.card7.desc"),
            temporalComplexity: t("sort.card7.temporal.desc"),
            spatialComplexity: t("sort.card7.spatial.desc"),
            implementation: {
                java: `
/* Bucket Sort en Java */
// Este algoritmo distribuye los elementos en 'n' buckets y luego ordena cada uno.
import java.util.ArrayList;
import java.util.Collections;

public class BucketSort {
    public static void bucketSort(float[] arr) {
        int n = arr.length;
        if (n <= 0)
            return;
        // Crear 'n' buckets
        ArrayList<Float>[] buckets = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            buckets[i] = new ArrayList<Float>();
        }
        // Distribuir los elementos en sus respectivos buckets
        for (int i = 0; i < n; i++) {
            int bucketIndex = (int)(n * arr[i]);
            buckets[bucketIndex].add(arr[i]);
        }
        // Ordenar cada bucket y concatenar
        int index = 0;
        for (int i = 0; i < n; i++) {
            Collections.sort(buckets[i]);
            for (float value : buckets[i]) {
                arr[index++] = value;
            }
        }
    }

    public static void main(String[] args) {
        float[] arr = {0.42f, 0.32f, 0.33f, 0.52f, 0.25f, 0.47f, 0.51f};
        System.out.println("Array original:");
        for (float num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
        bucketSort(arr);
        System.out.println("Array ordenado:");
        for (float num : arr) {
            System.out.print(num + " ");
        }
    }
}
`,
                python: `
# Bucket Sort en Python
def bucketSort(arr):
    n = len(arr)
    if n <= 0:
        return arr
    # Crear n buckets
    buckets = [[] for _ in range(n)]
    # Insertar cada elemento en su bucket correspondiente
    for num in arr:
        index = int(n * num)
        buckets[index].append(num)
    # Ordenar cada bucket y concatenar los resultados
    sorted_arr = []
    for bucket in buckets:
        sorted_arr.extend(sorted(bucket))
    return sorted_arr

if __name__ == "__main__":
    arr = [0.42, 0.32, 0.33, 0.52, 0.25, 0.47, 0.51]
    print("Array original:", arr)
    sorted_arr = bucketSort(arr)
    print("Array ordenado:", sorted_arr)

`,
                javascript: `
/* Bucket Sort en JavaScript */
// Distribuye los elementos en buckets y ordena cada bucket.
function bucketSort(arr) {
    const n = arr.length;
    if (n <= 0) return arr;
    // Crear buckets
    let buckets = Array.from({ length: n }, () => []);
    // Distribuir elementos en buckets
    for (let i = 0; i < n; i++) {
        let index = Math.floor(n * arr[i]);
        buckets[index].push(arr[i]);
    }
    // Ordenar cada bucket y concatenar los resultados
    let sortedArr = [];
    for (let bucket of buckets) {
        bucket.sort((a, b) => a - b);
        sortedArr = sortedArr.concat(bucket);
    }
    return sortedArr;
}

// Ejemplo de uso:
let arr = [0.42, 0.32, 0.33, 0.52, 0.25, 0.47, 0.51];
console.log("Array original:", arr);
console.log("Array ordenado:", bucketSort(arr));

`,
                typescript: `
/* Bucket Sort en TypeScript */
function bucketSort(arr: number[]): number[] {
    const n: number = arr.length;
    if (n <= 0) return arr;
    // Crear buckets
    let buckets: number[][] = Array.from({ length: n }, () => []);
    // Distribuir los elementos en sus respectivos buckets
    for (let i = 0; i < n; i++) {
        let index: number = Math.floor(n * arr[i]);
        buckets[index].push(arr[i]);
    }
    // Ordenar cada bucket y concatenar los resultados
    let sortedArr: number[] = [];
    for (let bucket of buckets) {
        bucket.sort((a, b) => a - b);
        sortedArr = sortedArr.concat(bucket);
    }
    return sortedArr;
}

// Ejemplo de uso:
const arr: number[] = [0.42, 0.32, 0.33, 0.52, 0.25, 0.47, 0.51];
console.log("Array original:", arr);
console.log("Array ordenado:", bucketSort(arr));

`,
                go: `
/* Bucket Sort en Go */
package main

import (
    "fmt"
    "sort"
)

// bucketSort ordena un slice de float64 usando Bucket Sort
func bucketSort(arr []float64) {
    n := len(arr)
    if n <= 0 {
        return
    }
    // Crear n buckets
    buckets := make([][]float64, n)
    for i := range buckets {
        buckets[i] = []float64{}
    }
    // Distribuir elementos en buckets
    for i := 0; i < n; i++ {
        index := int(float64(n) * arr[i])
        buckets[index] = append(buckets[index], arr[i])
    }
    // Ordenar cada bucket y concatenar resultados
    idx := 0
    for i := 0; i < n; i++ {
        sort.Float64s(buckets[i])
        for _, num := range buckets[i] {
            arr[idx] = num
            idx++
        }
    }
}

func main() {
    arr := []float64{0.42, 0.32, 0.33, 0.52, 0.25, 0.47, 0.51}
    fmt.Println("Array original:", arr)
    bucketSort(arr)
    fmt.Println("Array ordenado:", arr)
}
`,
                c: `
/* Bucket Sort en C (para números en el rango [0,1)) */
#include <stdio.h>
#include <stdlib.h>

// Función de comparación para qsort
int compare(const void *a, const void *b) {
    float fa = *(const float*)a;
    float fb = *(const float*)b;
    return (fa > fb) - (fa < fb);
}

// Bucket Sort para un arreglo de floats
void bucketSort(float arr[], int n) {
    int bucketCount = n;
    // Crear array de buckets
    float** buckets = (float**)malloc(bucketCount * sizeof(float*));
    int* bucketSizes = (int*)calloc(bucketCount, sizeof(int));
    int* bucketCapacities = (int*)malloc(bucketCount * sizeof(int));

    // Inicializar cada bucket
    for (int i = 0; i < bucketCount; i++) {
        bucketCapacities[i] = 5; // capacidad inicial
        buckets[i] = (float*)malloc(bucketCapacities[i] * sizeof(float));
    }
    
    // Distribuir elementos en buckets
    for (int i = 0; i < n; i++) {
        int index = (int)(arr[i] * bucketCount);
        if (bucketSizes[index] == bucketCapacities[index]) {
            bucketCapacities[index] *= 2;
            buckets[index] = (float*)realloc(buckets[index], bucketCapacities[index] * sizeof(float));
        }
        buckets[index][bucketSizes[index]++] = arr[i];
    }
    
    // Ordenar cada bucket y copiar al arreglo original
    int idx = 0;
    for (int i = 0; i < bucketCount; i++) {
        if (bucketSizes[i] > 0) {
            qsort(buckets[i], bucketSizes[i], sizeof(float), compare);
            for (int j = 0; j < bucketSizes[i]; j++) {
                arr[idx++] = buckets[i][j];
            }
        }
        free(buckets[i]);
    }
    free(buckets);
    free(bucketSizes);
    free(bucketCapacities);
}

int main() {
    float arr[] = {0.42, 0.32, 0.33, 0.52, 0.25, 0.47, 0.51};
    int n = sizeof(arr)/sizeof(arr[0]);
    printf("Array original: ");
    for (int i = 0; i < n; i++) {
        printf("%.2f ", arr[i]);
    }
    printf("\n");
    bucketSort(arr, n);
    printf("Array ordenado: ");
    for (int i = 0; i < n; i++) {
        printf("%.2f ", arr[i]);
    }
    printf("\n");
    return 0;
}
`,
                cpp: `
/* Bucket Sort en C++ (para números en el rango [0,1)) */
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void bucketSort(vector<float>& arr) {
    int n = arr.size();
    vector<vector<float>> buckets(n);
    
    // Distribuir cada elemento en su bucket
    for (int i = 0; i < n; i++) {
        int index = n * arr[i];
        buckets[index].push_back(arr[i]);
    }
    
    // Ordenar cada bucket y concatenar los resultados
    arr.clear();
    for (int i = 0; i < n; i++) {
        sort(buckets[i].begin(), buckets[i].end());
        for (float num : buckets[i]) {
            arr.push_back(num);
        }
    }
}

int main() {
    vector<float> arr = {0.42, 0.32, 0.33, 0.52, 0.25, 0.47, 0.51};
    cout << "Array original: ";
    for (float num : arr)
        cout << num << " ";
    cout << endl;
    
    bucketSort(arr);
    
    cout << "Array ordenado: ";
    for (float num : arr)
        cout << num << " ";
    cout << endl;
    return 0;
}
`,
                csharp: `
/* Bucket Sort en C# (para números en el rango [0,1)) */
using System;
using System.Collections.Generic;

public class BucketSortClass {
    public static void BucketSort(float[] arr) {
        int n = arr.Length;
        if (n <= 0) return;
        // Crear buckets
        List<float>[] buckets = new List<float>[n];
        for (int i = 0; i < n; i++) {
            buckets[i] = new List<float>();
        }
        // Distribuir cada elemento en su bucket
        for (int i = 0; i < n; i++) {
            int index = (int)(arr[i] * n);
            buckets[index].Add(arr[i]);
        }
        // Ordenar cada bucket y copiar de vuelta al arreglo
        int idx = 0;
        for (int i = 0; i < n; i++) {
            buckets[i].Sort();
            foreach (float num in buckets[i]) {
                arr[idx++] = num;
            }
        }
    }

    public static void Main() {
        float[] arr = {0.42f, 0.32f, 0.33f, 0.52f, 0.25f, 0.47f, 0.51f};
        Console.WriteLine("Array original: " + string.Join(" ", arr));
        BucketSort(arr);
        Console.WriteLine("Array ordenado: " + string.Join(" ", arr));
    }
}
`,
            },
        },
        {
            title: t("sort.card8.subtitle"),
            description: t("sort.card8.desc"),
            temporalComplexity: t("sort.card8.temporal.desc"),
            spatialComplexity: t("sort.card8.spatial.desc"),
            implementation: {
                java: `
/* Radix Sort en Java */
// Este algoritmo utiliza Count Sort de forma repetida para cada dígito.
public class RadixSort {
    // Encuentra el valor máximo en el arreglo
    public static int getMax(int arr[]) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++)
            if (arr[i] > max)
                max = arr[i];
        return max;
    }

    // Count Sort aplicado según el dígito representado por 'exp'
    public static void countSort(int arr[], int exp) {
        int n = arr.length;
        int output[] = new int[n];
        int count[] = new int[10];
        
        // Contar las ocurrencias del dígito
        for (int i = 0; i < n; i++)
            count[(arr[i] / exp) % 10]++;
        
        // Actualizar count para posiciones acumuladas
        for (int i = 1; i < 10; i++)
            count[i] += count[i - 1];
        
        // Construir el arreglo de salida
        for (int i = n - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
        }
        
        // Copiar el arreglo de salida a arr[]
        for (int i = 0; i < n; i++)
            arr[i] = output[i];
    }
    
    // Función principal de RadixSort
    public static void radixSort(int arr[]) {
        int m = getMax(arr);
        // Aplicar Count Sort para cada dígito
        for (int exp = 1; m / exp > 0; exp *= 10)
            countSort(arr, exp);
    }
    
    public static void main(String args[]) {
        int arr[] = {170, 45, 75, 90, 802, 24, 2, 66};
        System.out.println("Array original:");
        for (int num : arr)
            System.out.print(num + " ");
        System.out.println();
        radixSort(arr);
        System.out.println("Array ordenado:");
        for (int num : arr)
            System.out.print(num + " ");
    }
}
`,
                python: `
# Radix Sort en Python
def countingSort(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10
    
    # Contar ocurrencias del dígito en 'exp'
    for i in range(n):
        index = (arr[i] // exp) % 10
        count[index] += 1
    
    # Actualizar count para posiciones acumuladas
    for i in range(1, 10):
        count[i] += count[i - 1]
    
    # Construir el arreglo de salida
    i = n - 1
    while i >= 0:
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1
        i -= 1
    
    # Copiar el arreglo de salida a arr
    for i in range(n):
        arr[i] = output[i]

def radixSort(arr):
    max_val = max(arr)
    exp = 1
    while max_val // exp > 0:
        countingSort(arr, exp)
        exp *= 10

if __name__ == "__main__":
    arr = [170, 45, 75, 90, 802, 24, 2, 66]
    print("Array original:", arr)
    radixSort(arr)
    print("Array ordenado:", arr)

`,
                javascript: `
/* Radix Sort en JavaScript */
// Utiliza Count Sort para cada dígito.
function countingSort(arr, exp) {
    let n = arr.length;
    let output = new Array(n).fill(0);
    let count = new Array(10).fill(0);
    
    // Contar ocurrencias del dígito actual
    for (let i = 0; i < n; i++) {
        let index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }
    
    // Actualizar count para posiciones acumuladas
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    // Construir el arreglo de salida
    for (let i = n - 1; i >= 0; i--) {
        let index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }
    
    // Copiar el arreglo de salida a arr
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    let maxVal = Math.max(...arr);
    for (let exp = 1; Math.floor(maxVal / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }
    return arr;
}

// Ejemplo de uso:
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Array original:", arr);
console.log("Array ordenado:", radixSort(arr));

`,
                typescript: `
/* Radix Sort en TypeScript */
function countingSort(arr: number[], exp: number): void {
    const n: number = arr.length;
    let output: number[] = new Array(n).fill(0);
    let count: number[] = new Array(10).fill(0);
    
    // Contar ocurrencias del dígito
    for (let i = 0; i < n; i++) {
        let index: number = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }
    
    // Actualizar count para posiciones acumuladas
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    // Construir el arreglo de salida
    for (let i = n - 1; i >= 0; i--) {
        let index: number = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }
    
    // Copiar el arreglo de salida a arr
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr: number[]): number[] {
    let maxVal: number = Math.max(...arr);
    for (let exp: number = 1; Math.floor(maxVal / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }
    return arr;
}

// Ejemplo de uso:
const arr: number[] = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Array original:", arr);
console.log("Array ordenado:", radixSort(arr));

`,
                go: `
/* Radix Sort en Go */
package main

import (
    "fmt"
)

// Función countingSort usada por radixSort
func countingSort(arr []int, exp int) {
    n := len(arr)
    output := make([]int, n)
    count := make([]int, 10)
    
    // Contar ocurrencias de dígitos
    for i := 0; i < n; i++ {
        index := (arr[i] / exp) % 10
        count[index]++
    }
    
    // Actualizar count
    for i := 1; i < 10; i++ {
        count[i] += count[i-1]
    }
    
    // Construir el arreglo de salida
    for i := n - 1; i >= 0; i-- {
        index := (arr[i] / exp) % 10
        output[count[index]-1] = arr[i]
        count[index]--
    }
    
    // Copiar salida en arr
    for i := 0; i < n; i++ {
        arr[i] = output[i]
    }
}

func radixSort(arr []int) {
    maxVal := arr[0]
    for i := 1; i < len(arr); i++ {
        if arr[i] > maxVal {
            maxVal = arr[i]
        }
    }
    exp := 1
    for maxVal/exp > 0 {
        countingSort(arr, exp)
        exp *= 10
    }
}

func main() {
    arr := []int{170, 45, 75, 90, 802, 24, 2, 66}
    fmt.Println("Array original:", arr)
    radixSort(arr)
    fmt.Println("Array ordenado:", arr)
}
`,
                c: `
/* Radix Sort en C */
#include <stdio.h>
#include <stdlib.h>

// Función para obtener el máximo del arreglo
int getMax(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++)
        if (arr[i] > max)
            max = arr[i];
    return max;
}

// Count Sort basado en el dígito representado por 'exp'
void countSort(int arr[], int n, int exp) {
    int *output = (int*)malloc(n * sizeof(int));
    int count[10] = {0};
    
    // Contar ocurrencias
    for (int i = 0; i < n; i++)
        count[(arr[i] / exp) % 10]++;
    
    // Actualizar count
    for (int i = 1; i < 10; i++)
        count[i] += count[i - 1];
    
    // Construir el arreglo de salida
    for (int i = n - 1; i >= 0; i--) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }
    
    // Copiar el arreglo de salida a arr[]
    for (int i = 0; i < n; i++)
        arr[i] = output[i];
    
    free(output);
}

void radixSort(int arr[], int n) {
    int m = getMax(arr, n);
    // Aplicar Count Sort para cada dígito
    for (int exp = 1; m / exp > 0; exp *= 10)
        countSort(arr, n, exp);
}

int main() {
    int arr[] = {170, 45, 75, 90, 802, 24, 2, 66};
    int n = sizeof(arr)/sizeof(arr[0]);
    printf("Array original: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
    radixSort(arr, n);
    printf("Array ordenado: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
    return 0;
}
`,
                cpp: `
/* Radix Sort en C++ */
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int getMax(const vector<int>& arr) {
    int mx = arr[0];
    for (int i = 1; i < arr.size(); i++)
        mx = max(mx, arr[i]);
    return mx;
}

void countSort(vector<int>& arr, int exp) {
    int n = arr.size();
    vector<int> output(n);
    vector<int> count(10, 0);
    
    // Contar ocurrencias del dígito
    for (int i = 0; i < n; i++)
        count[(arr[i] / exp) % 10]++;
    
    // Actualizar count
    for (int i = 1; i < 10; i++)
        count[i] += count[i - 1];
    
    // Construir el arreglo de salida
    for (int i = n - 1; i >= 0; i--) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }
    
    // Copiar salida en arr
    for (int i = 0; i < n; i++)
        arr[i] = output[i];
}

void radixSort(vector<int>& arr) {
    int m = getMax(arr);
    for (int exp = 1; m/exp > 0; exp *= 10)
        countSort(arr, exp);
}

int main() {
    vector<int> arr = {170, 45, 75, 90, 802, 24, 2, 66};
    cout << "Array original: ";
    for (int num : arr)
        cout << num << " ";
    cout << endl;
    radixSort(arr);
    cout << "Array ordenado: ";
    for (int num : arr)
        cout << num << " ";
    cout << endl;
    return 0;
}
`,
                csharp: `
/* Radix Sort en C# */
using System;

public class RadixSortClass {
    // Función para obtener el máximo del arreglo
    public static int GetMax(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.Length; i++)
            if (arr[i] > max)
                max = arr[i];
        return max;
    }
    
    // Count Sort basado en el dígito representado por 'exp'
    public static void CountSort(int[] arr, int exp) {
        int n = arr.Length;
        int[] output = new int[n];
        int[] count = new int[10];
        
        // Contar ocurrencias del dígito
        for (int i = 0; i < n; i++)
            count[(arr[i] / exp) % 10]++;
        
        // Actualizar count
        for (int i = 1; i < 10; i++)
            count[i] += count[i - 1];
        
        // Construir el arreglo de salida
        for (int i = n - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
        }
        
        // Copiar el arreglo de salida a arr
        for (int i = 0; i < n; i++)
            arr[i] = output[i];
    }
    
    public static void RadixSort(int[] arr) {
        int m = GetMax(arr);
        for (int exp = 1; m/exp > 0; exp *= 10)
            CountSort(arr, exp);
    }
    
    public static void Main() {
        int[] arr = {170, 45, 75, 90, 802, 24, 2, 66};
        Console.WriteLine("Array original: " + string.Join(" ", arr));
        RadixSort(arr);
        Console.WriteLine("Array ordenado: " + string.Join(" ", arr));
    }
}
`,
            },
        },
        {
            title: t("sort.card9.subtitle"),
            description: t("sort.card9.desc"),
            temporalComplexity: t("sort.card9.temporal.desc"),
            spatialComplexity: t("sort.card9.spatial.desc"),
            implementation: {
                java: `
/* TimSort en Java */
// Implementación simplificada de TimSort: se utiliza Insertion Sort en runs y luego se fusionan.
public class TimSort {
    static int MIN_RUN = 32;
    
    // Insertion Sort para ordenar un subarreglo de 'left' a 'right'
    public static void insertionSort(int[] arr, int left, int right) {
        for (int i = left + 1; i <= right; i++) {
            int temp = arr[i];
            int j = i - 1;
            while (j >= left && arr[j] > temp) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = temp;
        }
    }
    
    // Fusiona dos subarreglos: arr[l...m] y arr[m+1...r]
    public static void merge(int[] arr, int l, int m, int r) {
        int len1 = m - l + 1, len2 = r - m;
        int[] left = new int[len1];
        int[] right = new int[len2];
        for (int x = 0; x < len1; x++)
            left[x] = arr[l + x];
        for (int x = 0; x < len2; x++)
            right[x] = arr[m + 1 + x];
        
        int i = 0, j = 0, k = l;
        while (i < len1 && j < len2) {
            if (left[i] <= right[j])
                arr[k++] = left[i++];
            else
                arr[k++] = right[j++];
        }
        while (i < len1)
            arr[k++] = left[i++];
        while (j < len2)
            arr[k++] = right[j++];
    }
    
    // Función principal de TimSort
    public static void timSort(int[] arr) {
        int n = arr.length;
        // Ordenar pequeños segmentos con Insertion Sort
        for (int i = 0; i < n; i += MIN_RUN) {
            insertionSort(arr, i, Math.min(i + MIN_RUN - 1, n - 1));
        }
        // Fusionar runs de tamaño 'minRun'
        for (int size = MIN_RUN; size < n; size = 2 * size) {
            for (int left = 0; left < n; left += 2 * size) {
                int mid = left + size - 1;
                int right = Math.min(left + 2 * size - 1, n - 1);
                if (mid < right)
                    merge(arr, left, mid, right);
            }
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {5, 21, 7, 23, 19, 10, 3, 15, 1, 9};
        System.out.println("Array original:");
        for (int num : arr)
            System.out.print(num + " ");
        System.out.println();
        timSort(arr);
        System.out.println("Array ordenado:");
        for (int num : arr)
            System.out.print(num + " ");
    }
}
`,
                python: `
# TimSort en Python (versión simplificada)
def insertionSort(arr, left, right):
    for i in range(left+1, right+1):
        key = arr[i]
        j = i - 1
        while j >= left and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key

def merge(arr, l, m, r):
    left = arr[l:m+1]
    right = arr[m+1:r+1]
    i = j = 0
    k = l
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            arr[k] = left[i]
            i += 1
        else:
            arr[k] = right[j]
            j += 1
        k += 1
    while i < len(left):
        arr[k] = left[i]
        i += 1; k += 1
    while j < len(right):
        arr[k] = right[j]
        j += 1; k += 1

def timSort(arr):
    n = len(arr)
    minRun = 32
    # Ordenar cada segmento pequeño usando Insertion Sort
    for start in range(0, n, minRun):
        end = min(start+minRun-1, n-1)
        insertionSort(arr, start, end)
    size = minRun
    # Fusionar los segmentos ordenados
    while size < n:
        for left in range(0, n, 2*size):
            mid = min(n-1, left+size-1)
            right = min((left+2*size-1), n-1)
            if mid < right:
                merge(arr, left, mid, right)
        size *= 2

if __name__ == "__main__":
    arr = [5, 21, 7, 23, 19, 10, 3, 15, 1, 9]
    print("Array original:", arr)
    timSort(arr)
    print("Array ordenado:", arr)

`,
                javascript: `
/* TimSort en JavaScript (versión simplificada) */
function insertionSort(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}

function merge(arr, l, m, r) {
    let left = arr.slice(l, m+1);
    let right = arr.slice(m+1, r+1);
    let i = 0, j = 0, k = l;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }
    while (i < left.length) {
        arr[k++] = left[i++];
    }
    while (j < right.length) {
        arr[k++] = right[j++];
    }
}

function timSort(arr) {
    const MIN_RUN = 32;
    let n = arr.length;
    // Ordenar segmentos pequeños con Insertion Sort
    for (let i = 0; i < n; i += MIN_RUN) {
        insertionSort(arr, i, Math.min(i + MIN_RUN - 1, n - 1));
    }
    // Fusionar los segmentos ordenados
    for (let size = MIN_RUN; size < n; size = 2 * size) {
        for (let left = 0; left < n; left += 2 * size) {
            let mid = left + size - 1;
            let right = Math.min(left + 2 * size - 1, n - 1);
            if (mid < right) {
                merge(arr, left, mid, right);
            }
        }
    }
    return arr;
}

// Ejemplo de uso:
let arr = [5, 21, 7, 23, 19, 10, 3, 15, 1, 9];
console.log("Array original:", arr);
console.log("Array ordenado:", timSort(arr));

`,
                typescript: `
/* TimSort en TypeScript (versión simplificada) */
function insertionSort(arr: number[], left: number, right: number): void {
    for (let i = left + 1; i <= right; i++) {
        let temp: number = arr[i];
        let j: number = i - 1;
        while (j >= left && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}

function merge(arr: number[], l: number, m: number, r: number): void {
    let left: number[] = arr.slice(l, m+1);
    let right: number[] = arr.slice(m+1, r+1);
    let i = 0, j = 0, k = l;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }
    while (i < left.length) {
        arr[k++] = left[i++];
    }
    while (j < right.length) {
        arr[k++] = right[j++];
    }
}

function timSort(arr: number[]): number[] {
    const MIN_RUN: number = 32;
    let n: number = arr.length;
    for (let i = 0; i < n; i += MIN_RUN) {
        insertionSort(arr, i, Math.min(i + MIN_RUN - 1, n - 1));
    }
    for (let size = MIN_RUN; size < n; size *= 2) {
        for (let left = 0; left < n; left += 2 * size) {
            let mid: number = left + size - 1;
            let right: number = Math.min(left + 2 * size - 1, n - 1);
            if (mid < right) {
                merge(arr, left, mid, right);
            }
        }
    }
    return arr;
}

// Ejemplo de uso:
const arr: number[] = [5, 21, 7, 23, 19, 10, 3, 15, 1, 9];
console.log("Array original:", arr);
console.log("Array ordenado:", timSort(arr));

`,
                go: `
/* TimSort en Go (versión simplificada) */
package main

import "fmt"

func insertionSort(arr []int, left, right int) {
    for i := left + 1; i <= right; i++ {
        temp := arr[i]
        j := i - 1
        for j >= left && arr[j] > temp {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = temp
    }
}

func merge(arr []int, l, m, r int) {
    leftArr := make([]int, m-l+1)
    rightArr := make([]int, r-m)
    copy(leftArr, arr[l:m+1])
    copy(rightArr, arr[m+1:r+1])
    i, j, k := 0, 0, l
    for i < len(leftArr) && j < len(rightArr) {
        if leftArr[i] <= rightArr[j] {
            arr[k] = leftArr[i]
            i++
        } else {
            arr[k] = rightArr[j]
            j++
        }
        k++
    }
    for i < len(leftArr) {
        arr[k] = leftArr[i]
        i++; k++
    }
    for j < len(rightArr) {
        arr[k] = rightArr[j]
        j++; k++
    }
}

func timSort(arr []int) {
    n := len(arr)
    const MIN_RUN = 32
    for i := 0; i < n; i += MIN_RUN {
        end := i + MIN_RUN - 1
        if end >= n {
            end = n - 1
        }
        insertionSort(arr, i, end)
    }
    size := MIN_RUN
    for size < n {
        for left := 0; left < n; left += 2 * size {
            mid := left + size - 1
            right := left + 2*size - 1
            if right >= n {
                right = n - 1
            }
            if mid < right {
                merge(arr, left, mid, right)
            }
        }
        size *= 2
    }
}

func main() {
    arr := []int{5, 21, 7, 23, 19, 10, 3, 15, 1, 9}
    fmt.Println("Array original:", arr)
    timSort(arr)
    fmt.Println("Array ordenado:", arr)
}
`,
                c: `
/* TimSort en C (versión simplificada) */
#include <stdio.h>
#include <stdlib.h>
#define MIN_RUN 32

// Insertion Sort para un subarreglo de 'left' a 'right'
void insertionSort(int arr[], int left, int right) {
    for (int i = left + 1; i <= right; i++) {
        int temp = arr[i];
        int j = i - 1;
        while (j >= left && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}

// Merge de dos subarreglos: arr[l..m] y arr[m+1..r]
void merge(int arr[], int l, int m, int r) {
    int len1 = m - l + 1, len2 = r - m;
    int *left = (int*)malloc(len1 * sizeof(int));
    int *right = (int*)malloc(len2 * sizeof(int));
    for (int i = 0; i < len1; i++)
        left[i] = arr[l + i];
    for (int i = 0; i < len2; i++)
        right[i] = arr[m + 1 + i];
    int i = 0, j = 0, k = l;
    while (i < len1 && j < len2) {
        if (left[i] <= right[j])
            arr[k++] = left[i++];
        else
            arr[k++] = right[j++];
    }
    while (i < len1)
        arr[k++] = left[i++];
    while (j < len2)
        arr[k++] = right[j++];
    free(left);
    free(right);
}

void timSort(int arr[], int n) {
    for (int i = 0; i < n; i += MIN_RUN) {
        int right = (i + MIN_RUN - 1 < n) ? i + MIN_RUN - 1 : n - 1;
        insertionSort(arr, i, right);
    }
    for (int size = MIN_RUN; size < n; size = 2 * size) {
        for (int left = 0; left < n; left += 2 * size) {
            int mid = left + size - 1;
            int right = (left + 2 * size - 1 < n) ? left + 2 * size - 1 : n - 1;
            if (mid < right)
                merge(arr, left, mid, right);
        }
    }
}

int main() {
    int arr[] = {5, 21, 7, 23, 19, 10, 3, 15, 1, 9};
    int n = sizeof(arr)/sizeof(arr[0]);
    printf("Array original: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
    timSort(arr, n);
    printf("Array ordenado: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
    return 0;
}
`,
                cpp: `
/* TimSort en C++ (versión simplificada) */
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int MIN_RUN = 32;

void insertionSort(vector<int>& arr, int left, int right) {
    for (int i = left + 1; i <= right; i++) {
        int temp = arr[i];
        int j = i - 1;
        while (j >= left && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}

void merge(vector<int>& arr, int l, int m, int r) {
    int len1 = m - l + 1, len2 = r - m;
    vector<int> left(arr.begin() + l, arr.begin() + m + 1);
    vector<int> right(arr.begin() + m + 1, arr.begin() + r + 1);
    int i = 0, j = 0, k = l;
    while (i < len1 && j < len2) {
        if (left[i] <= right[j])
            arr[k++] = left[i++];
        else
            arr[k++] = right[j++];
    }
    while (i < len1)
        arr[k++] = left[i++];
    while (j < len2)
        arr[k++] = right[j++];
}

void timSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n; i += MIN_RUN) {
        insertionSort(arr, i, min(i + MIN_RUN - 1, n - 1));
    }
    for (int size = MIN_RUN; size < n; size *= 2) {
        for (int left = 0; left < n; left += 2 * size) {
            int mid = left + size - 1;
            int right = min(left + 2 * size - 1, n - 1);
            if (mid < right)
                merge(arr, left, mid, right);
        }
    }
}

int main() {
    vector<int> arr = {5, 21, 7, 23, 19, 10, 3, 15, 1, 9};
    cout << "Array original: ";
    for (int num : arr)
        cout << num << " ";
    cout << endl;
    timSort(arr);
    cout << "Array ordenado: ";
    for (int num : arr)
        cout << num << " ";
    cout << endl;
    return 0;
}
`,
                csharp: `
/* TimSort en C# (versión simplificada) */
using System;

public class TimSortClass {
    const int MIN_RUN = 32;
    
    // Insertion Sort para ordenar un subarreglo de 'left' a 'right'
    public static void InsertionSort(int[] arr, int left, int right) {
        for (int i = left + 1; i <= right; i++) {
            int temp = arr[i];
            int j = i - 1;
            while (j >= left && arr[j] > temp) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = temp;
        }
    }
    
    // Fusiona dos subarreglos: arr[l..m] y arr[m+1..r]
    public static void Merge(int[] arr, int l, int m, int r) {
        int len1 = m - l + 1, len2 = r - m;
        int[] left = new int[len1];
        int[] right = new int[len2];
        Array.Copy(arr, l, left, 0, len1);
        Array.Copy(arr, m+1, right, 0, len2);
        int i = 0, j = 0, k = l;
        while (i < len1 && j < len2) {
            if (left[i] <= right[j])
                arr[k++] = left[i++];
            else
                arr[k++] = right[j++];
        }
        while (i < len1)
            arr[k++] = left[i++];
        while (j < len2)
            arr[k++] = right[j++];
    }
    
    // Función principal de TimSort
    public static void TimSort(int[] arr) {
        int n = arr.Length;
        for (int i = 0; i < n; i += MIN_RUN) {
            InsertionSort(arr, i, Math.Min(i + MIN_RUN - 1, n - 1));
        }
        for (int size = MIN_RUN; size < n; size *= 2) {
            for (int left = 0; left < n; left += 2 * size) {
                int mid = left + size - 1;
                int right = Math.Min(left + 2 * size - 1, n - 1);
                if (mid < right)
                    Merge(arr, left, mid, right);
            }
        }
    }
    
    public static void Main() {
        int[] arr = {5, 21, 7, 23, 19, 10, 3, 15, 1, 9};
        Console.WriteLine("Array original: " + string.Join(" ", arr));
        TimSort(arr);
        Console.WriteLine("Array ordenado: " + string.Join(" ", arr));
    }
}
`,
            },
        },
        {
            title: t("sort.card10.subtitle"),
            description: t("sort.card10.desc"),
            temporalComplexity: t("sort.card10.temporal.desc"),
            spatialComplexity: t("sort.card10.spatial.desc"),
            implementation: {
                java: `
/* ShellSort en Java */
// Implementa ShellSort utilizando una secuencia decreciente de gap.
public class ShellSort {
    public static void shellSort(int arr[]) {
        int n = arr.length;
        // Inicializa gap y lo reduce progresivamente
        for (int gap = n / 2; gap > 0; gap /= 2) {
            // Realiza Insertion Sort para elementos con separacion 'gap'
            for (int i = gap; i < n; i++) {
                int temp = arr[i];
                int j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                }
                arr[j] = temp;
            }
        }
    }
    
    public static void main(String[] args) {
        int arr[] = {12, 34, 54, 2, 3};
        System.out.println("Array original:");
        for (int num : arr)
            System.out.print(num + " ");
        System.out.println();
        shellSort(arr);
        System.out.println("Array ordenado:");
        for (int num : arr)
            System.out.print(num + " ");
    }
}
`,
                python: `
# ShellSort en Python
def shellSort(arr):
    n = len(arr)
    gap = n // 2
    while gap > 0:
        for i in range(gap, n):
            temp = arr[i]
            j = i
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
            arr[j] = temp
        gap //= 2

if __name__ == "__main__":
    arr = [12, 34, 54, 2, 3]
    print("Array original:", arr)
    shellSort(arr)
    print("Array ordenado:", arr)

`,
                javascript: `
/* ShellSort en JavaScript */
// Ordena el arreglo utilizando una secuencia decreciente de gap.
function shellSort(arr) {
    let n = arr.length;
    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
    }
    return arr;
}

// Ejemplo de uso:
let arr = [12, 34, 54, 2, 3];
console.log("Array original:", arr);
console.log("Array ordenado:", shellSort(arr));

`,
                typescript: `
/* ShellSort en TypeScript */
function shellSort(arr: number[]): number[] {
    let n: number = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp: number = arr[i];
            let j: number = i;
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
    }
    return arr;
}

// Ejemplo de uso:
const arr: number[] = [12, 34, 54, 2, 3];
console.log("Array original:", arr);
console.log("Array ordenado:", shellSort(arr));

`,
                go: `
/* ShellSort en Go */
package main

import "fmt"

func shellSort(arr []int) {
    n := len(arr)
    for gap := n / 2; gap > 0; gap /= 2 {
        for i := gap; i < n; i++ {
            temp := arr[i]
            j := i
            for j >= gap && arr[j-gap] > temp {
                arr[j] = arr[j-gap]
                j -= gap
            }
            arr[j] = temp
        }
    }
}

func main() {
    arr := []int{12, 34, 54, 2, 3}
    fmt.Println("Array original:", arr)
    shellSort(arr)
    fmt.Println("Array ordenado:", arr)
}
`,
                c: `
/* ShellSort en C */
#include <stdio.h>

void shellSort(int arr[], int n) {
    for (int gap = n / 2; gap > 0; gap /= 2) {
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
}

int main() {
    int arr[] = {12, 34, 54, 2, 3};
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("Array original: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
    shellSort(arr, n);
    printf("Array ordenado: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
    return 0;
}
`,
                cpp: `
/* ShellSort en C++ */
#include <iostream>
#include <vector>
using namespace std;

void shellSort(vector<int>& arr) {
    int n = arr.size();
    for (int gap = n / 2; gap > 0; gap /= 2) {
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j = i;
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
    }
}

int main() {
    vector<int> arr = {12, 34, 54, 2, 3};
    cout << "Array original: ";
    for (int num : arr)
        cout << num << " ";
    cout << endl;
    shellSort(arr);
    cout << "Array ordenado: ";
    for (int num : arr)
        cout << num << " ";
    cout << endl;
    return 0;
}
`,
                csharp: `
/* ShellSort en C# */
using System;

public class ShellSortClass {
    public static void ShellSort(int[] arr) {
        int n = arr.Length;
        for (int gap = n / 2; gap > 0; gap /= 2) {
            for (int i = gap; i < n; i++) {
                int temp = arr[i];
                int j = i;
                while (j >= gap && arr[j - gap] > temp) {
                    arr[j] = arr[j - gap];
                    j -= gap;
                }
                arr[j] = temp;
            }
        }
    }
    
    public static void Main() {
        int[] arr = {12, 34, 54, 2, 3};
        Console.WriteLine("Array original: " + string.Join(" ", arr));
        ShellSort(arr);
        Console.WriteLine("Array ordenado: " + string.Join(" ", arr));
    }
}
`,
            },
        },
    ]
}