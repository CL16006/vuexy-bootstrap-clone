<script setup>
const chartOptions = {
  chart: {
    id: 'basic-line',
    toolbar: {
      show: false
    }
  },
  xaxis: {
    categories: [1, 2, 3, 4, 5,6]
  }
}

const series = [
  {
    name: 'Sales',
    data: [30, 40, 35, 50, 49,50]
  }
]
</script>
<template>
  <div class="row mt-4">
    <div class="col col-4">
      <div class="card shadow">
        <div class="card-body mx-3">
          <div class="row align-items-center">
            <div class="col-8">
              <p class="text-dark h5">Congratulations John!🎉</p>
              <p class="text-secondary">Best seller of the month</p>
              <h4 class="text-primary">$48.9k</h4>
              <div class="btn btn-primary text-light">View Sales</div>
            </div>
            <div class="col-4 text-end">
              <img src="/assets/img/celebrating.svg" alt="user" style="max-width: 100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-8">
      <div class="card shadow">
        <div class="card-body mx-3">
          <h5 class="card-title text-dark mt-3 mb-2">Statistics</h5>
          <div class="row mt-5 mb-3">
            <div class="col">
              <div class="row align-items-center">
                <div class="col-auto bg-custom-primary">
                  <i class="bi bi-pie-chart text-primary" style="font-size: 1.5rem"></i>
                </div>
                <div class="col ps-0">
                  <h6 class="text-dark mb-0">230k</h6>
                  <p class="text-secondary mb-0"><small>Sales</small></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row align-items-center">
                <div class="col-auto bg-custom-info">
                  <i class="bi bi-people text-info" style="font-size: 1.5rem"></i>
                </div>
                <div class="col ps-0">
                  <h6 class="text-dark mb-0">8.549k</h6>
                  <p class="text-secondary mb-0"><small>Customers</small></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row align-items-center">
                <div class="col-auto bg-custom-danger">
                  <i class="bi bi-bag text-danger" style="font-size: 1.5rem"></i>
                </div>
                <div class="col ps-0">
                  <h6 class="text-dark mb-0">1.423k</h6>
                  <p class="text-secondary mb-0"><small>Products</small></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row align-items-center">
                <div class="col-auto bg-custom-success">
                  <i class="bi bi-currency-dollar text-success" style="font-size: 1.5rem"></i>
                </div>
                <div class="col ps-0">
                  <h6 class="text-dark mb-0">$9745</h6>
                  <p class="text-secondary mb-0"><small>Revenue</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col col-6">
      <div class="card shadow">
        <div class="card-body">
          <p class="text-dark h5">Profit</p>
          <p class="text-secondary">Last Month</p>
          <apexchart type="line" height="350" :options="chartOptions" :series="series" />
          <div class="row">
            <div class="col"><p class="h3 text-dark">624k</p></div>
            <div class="col"><p class="text-info">+8.24%</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-6">
      <div class="card">
        <h1>grafico 2</h1>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-custom-primary {
  background-color: #d3e4fc;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
}
.bg-custom-info {
  background-color: #cfeefc;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
}
.bg-custom-success {
  background-color: #ccffda;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
}
.bg-custom-danger {
  background-color: #ffe2e0;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
}
</style>
