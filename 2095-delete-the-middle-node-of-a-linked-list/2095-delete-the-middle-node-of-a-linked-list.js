/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
     const getLength = (list, count) => {
        if (list.next) {
            return getLength(list.next, count + 1);
        }
        
        return count;
    }
    
    const mid = Math.floor(getLength(head, 1) / 2);
    
    if (!mid) {
        return null;
    }
    
    const loop = (list, count) => {
        if (list?.next) {
            
            if (count + 1 === mid) {
                if (list.next?.next) {
                    list.next.val = list.next.next.val;
                    list.next.next = list.next.next.next;
                    return head;
                } else {
                    list.next = null;
                }
            } else {
                loop(list.next, count + 1);
            }
        }
    }
    
    loop(head, 0);
    
    return head;
};