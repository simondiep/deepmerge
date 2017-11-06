interface Deepmerge {
  all(arrayOfObjectsToBeMerged: Array<Object>): Object;
}

declare let deepmerge: Deepmerge;

export default deepmerge;