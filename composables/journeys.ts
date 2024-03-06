import type { JourneyData } from "~/types";

export const getJourneys = async () => {
  const graphql = useStrapiGraphQL();

  let journeys: JourneyData = {};
  try {
    const query = `
    query {
        journeys {
          data {
            id
            attributes {
              title
              date
              location
              blog {
                data{
                  id
                  attributes{
                    title
                  }
                }
              }
            }
          }
        }
      }
    `;

    journeys = await graphql(query);
  } catch (err) {
    console.log(err);
    return false;
  }
  return journeys;
};
