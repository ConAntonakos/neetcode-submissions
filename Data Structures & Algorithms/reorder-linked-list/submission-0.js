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
     * @return {void}
     */
    reorderList(head) {
        // [0, 1, 2, 3, 4, 5, 6]
        // [0, 6, 1, 5, 2, 4, 3]
        // console.log("head", head, head.val)
        let nodes = [];
        let cur = head;
        while(cur){
            nodes.push(cur)
            cur = cur.next;
        }

        let i = 0, j = nodes.length - 1;

        while(i < j){
            // console.log(i, j, nodes[i], nodes[j])
            nodes[i].next = nodes[j]
            i++;
            if (i >= j) break;
            // console.log(i, j, nodes[i], nodes[j])
            nodes[j].next = nodes[i]
            j--
        }

        nodes[i].next = null;

    }
}
