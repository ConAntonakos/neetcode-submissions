/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Can we traverse and know when its nth from the end?
        // 0, 1, 2, 3, len 4, 4 - 2 = 2
        // 1,2,len 2, 2 -2 = 0
        // We need to know length
        let dummy = new ListNode();

        let cur = head;
        let len = 0;
        while(cur){
            len++;
            // console.log(len)
            cur = cur.next
        }

        let removeIndex = len - n;
        if (removeIndex === 0) {
            return head.next;
        }

        cur = head;
        let i = 0;
        while(i < len){
            if (i + 1 === removeIndex) {
                cur.next = cur.next.next;
                break;
            }
            i++;
            cur = cur.next
        }

        return head
    }
}
