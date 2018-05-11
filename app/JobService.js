function JobService(cb){

//PRIVATE
    var baseUrl = "https://bcw-gregslist.herokuapp.com/api/jobs"
    var jobs =[]

    function Job(company, jobTitle, hours, rate, description){
        this.company = company
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description 
    }
    function getJobs(){
        $.get(baseUrl)
            .then(res =>{
                cb(res.data)
            })
    }
    getJobs()
    //PUBLIC

    this.addJob = function addJob(job){
        var newJob = new Job(job.company, job.jobTitle, job.hours, job.rate, job.description)
        $.post(baseUrl, newJob)
            .then(res =>{
                getJobs()
            })
    }

    this.deleteJob = function deleteJob(id){
        $.ajax({
            method:'DELETE',
            url: baseUrl + '/' + id
        })
            .then(res=>{
                getJobs()
            })
    }
    this.increaseRate = function increaseRate(id, rate){
        $.ajax({
            method:'PUT',
            url: baseUrl + '/' + id,
            contentType: 'application/JSON',
            data: JSON.stringify({
                rate:rate + 3
            })
        }).then(res=>{
                getJobs()   
        })
    }
}