# Write your MySQL query statement below
SELECT Name Employee FROM Employee a
WHERE Salary > (SELECT Salary FROM Employee b WHERE a.ManagerId = b.Id)