# 🗳️ Digital Voting System and CPU Scheduling Simulation

## 📌 Overview

This project contains two core components:

1. **Zombie Process Risk Evaluation in Electronic Voting Systems**: 
   An analysis of the impact of zombie processes in large-scale digital voting platforms and a proposed fail-proof system design.
   
2. **Preemptive Priority Scheduling Simulation**:
   A CPU scheduling problem solved using Preemptive Priority Scheduling with Gantt chart, turnaround time, and waiting time calculations.

---

## 🧠 Part I – Zombie Process Risks in Voting Systems

### ⚠️ Problem Statement

A digital voting platform creates child processes for vote submissions. If these child processes are not managed correctly, **zombie processes** accumulate, leading to system slowdowns and casting doubts on the **transparency and integrity** of the election.

### 🔍 What are Zombie Processes?

- Processes that have completed execution but still remain in the process table.
- Caused when the parent process does not read the child's exit status using `wait()` or `waitpid()`.
- Waste system resources and process IDs.

### ⚠️ Risks in a Voting System

- 🐌 **System Slowdown**: Too many zombies fill the process table, blocking new vote submissions.
- 🛑 **Denial of Service (DoS)**: Attackers could flood the system to halt voting.
- 🔒 **Loss of Trust**: Delays raise doubts about vote integrity.
- ⚙️ **Poor Resource Utilization**: Degraded performance of backend services.

### ✅ Solution: Designing a Fail-Proof Voting System

#### 1. **Process Management**
- Reap child processes using `wait()` or `waitpid()` properly.
- Use `SIGCHLD` signal with `SA_NOCLDWAIT` to auto-reap children.

#### 2. **Architecture Best Practices**
- Use **thread-based** or **asynchronous** models to reduce child process creation.
- Implement **queue-based submission** (e.g., Kafka or AWS SQS).
- Use **microservices** for vote submission, verification, and tallying.

#### 3. **Scalability**
- Auto-scale backend services.
- Use **container orchestration tools** like Kubernetes.

#### 4. **Monitoring**
- Track zombie process counts and alert on thresholds.
- Use system monitoring tools like Prometheus and Grafana.

---

## ⚙️ Part II – Preemptive Priority Scheduling

### 📊 Input Table

| Process | Arrival Time | Burst Time | Priority |
|---------|--------------|------------|----------|
| P1      | 1            | 5          | 4        |
| P2      | 2            | 3          | 2        |
| P3      | 3            | 7          | 1        |
| P4      | 5            | 6          | 3        |

### 📈 Gantt Chart



### 📅 Completion, Turnaround, and Waiting Times

| Process | Arrival | Burst | Completion | Turnaround | Waiting |
|---------|---------|-------|------------|------------|---------|
| P1      | 1       | 5     | 25         | 24         | 19      |
| P2      | 2       | 3     | 14         | 12         | 9       |
| P3      | 3       | 7     | 13         | 10         | 3       |
| P4      | 5       | 6     | 20         | 15         | 9       |

### 📌 Final Calculations

- **Average Waiting Time (AWT)** = (19 + 9 + 3 + 9) / 4 = **10**
- **Average Turnaround Time (ATAT)** = (24 + 12 + 10 + 15) / 4 = **15.25**

---

## 📁 Files

- `README.md`: This documentation file.
- `voting_system_analysis.txt`: Contains detailed theory section.
- `scheduling_simulation.py`: Optional script file (if implemented in code) for scheduling simulation.
- `Gantt_chart.png`: Optional visual chart image.

---

## ✅ Conclusion

This assignment provides both a real-world challenge (managing processes in a digital voting system) and practical application (scheduling processes using Preemptive Priority Scheduling). Together, they highlight the importance of system performance, process management, and operational integrity in mission-critical systems.

---

## 🧑‍💻 Author

**Mahesh Kumar S**

Aspiring Cloud & DevOps Engineer | Focused on Cloud, AWS, Linux, DevOps, and System Architecture

---

