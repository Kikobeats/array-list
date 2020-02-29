declare module 'array-list' {
  interface ArrayList<T> {
    /**
     * Returns how many elements are stored in the array list.
     */
    size(): number;

    /**
     * Adds a new element in the array list.
     * @param element
     */
    push(element: T): ArrayList<T>;

    /**
     * Gets the elements in the array list. You can specify an index, in other case the methods will return all the elements.
     * @param index 
     */
    get(index?: number): T | ArrayList<T>;

    /**
     * Removes all the elements in the array list.
     */
    clear(): ArrayList<T>;

    /**
     * Returns a copy of the elements in array list.
     */
    flush(): Array<T>;

    /**
     * Returns true if the .size is 0; false in other case.
     */
    isEmpty(): boolean;

    /**
     * Returns true if the .size is equal to limit; false in other case.
     */
    isFull(): boolean;
  }
  export default function arrayList<T>(limit?: number): ArrayList<T>;
}