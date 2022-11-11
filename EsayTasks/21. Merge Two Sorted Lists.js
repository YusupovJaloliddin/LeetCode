let mergeTwoLists = function (l1, l2) {
  // If either list is empty, return the other list's node
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  // If l1 is lower
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  // If l2 is lower
  else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
