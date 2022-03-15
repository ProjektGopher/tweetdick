type Metric = {
  id: number,
  stat: string,
  emphasis: string,
  rest: string
}

export const metrics: Metric[] = [
  { id: 1, stat: '0', emphasis: 'Women and non-males', rest: 'are still on the waitlist.' },
  { id: 2, stat: '0', emphasis: 'Incidents', rest: 'have been resolved and/or reported.' },
  { id: 3, stat: '0', emphasis: 'Total', rest: 'people having us watch their DMs.' },
  { id: 4, stat: '0', emphasis: 'Generous sponsors', rest: 'paying on others\' behalf.' },
  { id: 5, stat: '0', emphasis: 'Monthly spend', rest: 'to keep this service running.' },
  { id: 6, stat: '0', emphasis: 'Monthly cost', rest: 'per user for all services and APIs.' },
]