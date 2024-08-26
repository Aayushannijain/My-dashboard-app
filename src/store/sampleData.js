export const sampleCategories = [
  {
    name: 'CSPM Executive Dashboard',
    widgets: [
      {
        id: 1,
        name: 'Cloud Accounts',
        content: 'Connected (2)',
        color: 'bg-light text-dark',
        chart: {
          type: 'doughnut',
          data: {
            labels: ['Connected', 'Disconnected'],
            datasets: [
              {
                data: [2, 0],
                backgroundColor: ['#36A2EB', '#FF6384'],
              },
            ],
          },
        },
      },
      {
        id: 2,
        name: 'Risk Assessment',
        content: 'Failed: 9639',
        color: ' bg-info text-dark',
        chart: {
          type: 'bar',
          data: {
            labels: ['Passed', 'Failed'],
            datasets: [
              {
                label: 'Assessment',
                data: [1, 9639],
                backgroundColor: ['#fe2674', '#fe3000'],
              },
            ],
          },
        },
      },
      
    ],
  },
  {
    name: 'CNAPP Dashboard',
    widgets: [
      {
        id: 3,
        name: 'Registry Scan',
        content: 'Critical: 1479',
        color: 'bg-warning text-dark',
        chart: {
          type: 'pie',
          data: {
            labels: ['Critical', 'Non-Critical'],
            datasets: [
              {
                data: [1479, 300],
                backgroundColor: ['#ff6384', '#36a2eb'],
              },
            ],
          },
        },
      },
      {
        id: 4,
        name: 'Workload Alerts',
        content: 'Critical Alerts: 23',
        color: 'bg-dark text-dark',
      },
      
    ],
  },
];