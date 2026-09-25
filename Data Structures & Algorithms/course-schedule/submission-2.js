class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // console.log(numCourses, prerequisites)

        const indegreeMap = {};
        const preReqMap = {};

        for (var i = 0; i < numCourses; i++){
            preReqMap[i] = [];
            indegreeMap[i] = 0;
        }

        for(let [course, preReq] of prerequisites){
            preReqMap[preReq].push(course);
            indegreeMap[course]++;
        }

        console.log(preReqMap)
        let q = [];
        for(let [course, degrees] of Object.entries(indegreeMap)){
            if (degrees === 0) q.push(course)
        } 

        let takenCourses = 0;
        while(q.length > 0){
            let course = q.shift();
            takenCourses++;

            for (let nextCourse of preReqMap[course]){
                indegreeMap[nextCourse]--;

                if(indegreeMap[nextCourse] === 0){
                    q.push(nextCourse)
                }
            }
        }

        return takenCourses === numCourses;
    }
}
