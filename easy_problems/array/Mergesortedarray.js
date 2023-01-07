//https://leetcode.com/problems/merge-two-sorted-lists/

const mergeTwoLists = (list1, list2) => {

    if (list1 === null) return list2
    if (list2 === null) return list1

    let head = new ListNode(0)
    let res = head

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            head.next = list1
            list1 = list1.next
        }
        else {
            head.next = list2
            list2 = list2.next
        }
        head = head.next
    }
    if (list1 === null) head.next = list2
    if (list2 === null) head.next = list1

    return res.next
};