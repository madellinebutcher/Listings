function JobController(){
    //private
    var jobService = new JobService(drawJobs)

    function drawJobs(jobs){
        var template = ''
        for (let i = 0; i < jobs.length; i++) {
            var job = jobs[i];
            template += `
            <div>
        
            <h3>Company: ${job.company}</h3>
            <h3>Job Title: ${job.jobTitle}</h3>
            <h3>Hours: ${job.hours} HRS</h3>
            <h3>Rate: $${job.rate} </h3><button onclick="app.controllers.jobController.increaseRate('${job._id}', ${job.rate})">Increase Rate</button>
            <p>${job.description}</p>
            <button onclick="app.controllers.jobController.deleteJob('${job._id}')">Delete</button>
            
            </div>
            
            
            `
        }
        document.getElementById('jobs').innerHTML = template
    }

    //PUBLIC
    this.addJob = function addJob(e){
        e.preventDefault();
        var data = e.target
        var newJob = {
            company: data.company.value,
            jobTitle: data.jobTitle.value,
            hours: data.hours.value,
            rate: data.rate.value,
            description: data.description.value
        }
        jobService.addJob(newJob)
        data.reset()
    }
    this.deleteJob = function deleteJob(id){
        jobService.deleteJob(id)
    }
    this.increaseRate = function increaseRate(id, rate){
        jobService.increaseRate(id, rate)
    }


}