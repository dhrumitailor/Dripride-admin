// export const sectionMeta = {
//   title: 'Operations & Support',
//   subtitle:
//     'Users, captains, trips, documents, payments, scheduling, support, reviews, onboarding, safety, zones, and comms.',
//   accent: 'emerald',
//   modules: [
//     'User management',
//     'Captain management',
//     'Trip management',
//     'Document verification queue',
//     'Payment management',
//     'Scheduled rides manager',
//     'Support ticket system',
//     'Review & rating moderation',
//     'Captain onboarding funnel',
//     'Safety & incident center',
//     'City & zone management',
//     'User comms log',
//   ],
// }
// edit 1 - update modules to have name + path for routing
export const sectionMeta = {
  title: 'Operations & Support',
  subtitle:
    'Users, captains, trips, documents, payments, scheduling, support, reviews, onboarding, safety, zones, and comms.',
  accent: 'emerald',

  modules: [
    { name: 'Rider Profile', path: '/rider-profile' },
    { name: 'Captain Profile', path: '/captain-profile' },
    { name: 'Ride Detail', path: '/ride-detail' },
    { name: 'Document Approval', path: '/document-approval' },
    { name: 'Payments & Refunds', path: '/payments' },
    { name: 'Scheduled Rides', path: '/scheduled-rides' },
    { name: 'Support Tickets', path: '/support-tickets' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Onboarding', path: '/onboarding' },
    { name: 'Safety Alerts', path: '/safety' },
    { name: 'City Settings', path: '/city-settings' },
    { name: 'Refund Requests', path: '/refund-requests' },

  ],
}