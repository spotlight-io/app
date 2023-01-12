import {
  IconAt,
  IconLock,
  IconUser,
  IconConfetti,
  IconWoman,
  IconWorld,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandLinkedin as IconBrandLinkedIn,
  IconSortAscendingNumbers,
  IconRuler2,
  IconScale,
  IconShirt,
  IconEye,
  IconCut,
} from '@tabler/icons';

const user = {
  email: {
    type: 'string',
    icon: IconAt,
    label: 'Email',
    length: {
      min: 4,
      max: 320,
    },
    match: /^.*$/,
  },
  password: {
    type: 'string',
    icon: IconLock,
    label: 'Password',
    length: {
      min: 6,
      max: 60,
    },
    match: /^.*$/,
  },
};

export default {
  user,
  sign: {
    in: user,
    up: {
      ...user,
      confirmPassword: {
        ...user.password,
        label: 'Confirm Password',
      },
    },
  },
  profiles: {
    personal: {
      details: {
        name: {
          first: {
            type: 'string',
            icon: IconUser,
            label: 'First Name',
            length: {
              min: 1,
              max: 30,
            },
            match: /^.*$/,
          },
          last: {
            type: 'string',
            icon: IconUser,
            label: 'Last Name',
            length: {
              min: 1,
              max: 30,
            },
            match: /^.*$/,
          },
        },
        dateOfBirth: {
          type: 'date',
          icon: IconConfetti,
          label: 'Date of Birth',
        },
        genderIdentities: {
          type: 'array',
          icon: IconWoman,
          label: 'Gender Identities',
          length: {
            min: 1,
            max: 3,
          },
          options: [
            {
              value: 'male',
              label: 'Male',
            },
            {
              value: 'female',
              label: 'Female',
            },
            {
              value: 'agender',
              label: 'Agender',
            },
            {
              value: 'androgyne',
              label: 'Androgyne',
            },
            {
              value: 'bigender',
              label: 'Bigender',
            },
            {
              value: 'demiboy',
              label: 'Demiboy',
            },
            {
              value: 'demigirl',
              label: 'Demigirl',
            },
            {
              value: 'epicene',
              label: 'Epicene',
            },
            {
              value: 'femme',
              label: 'Femme',
            },
            {
              value: 'genderfluid',
              label: 'Genderfluid',
            },
            {
              value: 'genderless',
              label: 'Genderless',
            },
            {
              value: 'genderqueer',
              label: 'Genderqueer',
            },
            {
              value: 'hermaphrodite',
              label: 'Hermaphrodite',
            },
            {
              value: 'intergernder',
              label: 'Intergernder',
            },
            {
              value: 'neutrois',
              label: 'Neutrois',
            },
            {
              value: 'transgender',
              label: 'Transgender',
            },
            {
              value: 'travesti',
              label: 'Travesti',
            },
          ],
        },
        username: {
          type: 'string',
          icon: IconWorld,
          label: 'Username',
          length: {
            min: 1,
            max: 30,
          },
          match: /^.*$/,
        },
      },
      socialMediaHandles: {
        instagram: {
          type: 'string',
          icon: IconBrandInstagram,
          label: 'Instagram',
          length: {
            min: 0,
            max: 30,
          },
          match: /^.*$/,
        },
        twitter: {
          type: 'string',
          icon: IconBrandTwitter,
          label: 'Twitter',
          length: {
            min: 0,
            max: 30,
          },
          match: /^.*$/,
        },
        facebook: {
          type: 'string',
          icon: IconBrandFacebook,
          label: 'Facebook',
          length: {
            min: 0,
            max: 30,
          },
          match: /^.*$/,
        },
        linkedIn: {
          type: 'string',
          icon: IconBrandLinkedIn,
          label: 'LinkedIn',
          length: {
            min: 0,
            max: 30,
          },
          match: /^.*$/,
        },
      },
    },
    actor: {
      appearance: {
        active: {
          type: 'boolean',
          icon: IconWorld,
          label: 'Allow this profile to be discovered',
        },
        bio: {
          type: 'string',
          label: 'Bio',
          length: {
            min: 0,
            max: 300,
          },
          match: /^.*$/,
        },
        age: {
          type: 'range',
          icon: IconSortAscendingNumbers,
          label: 'Age',
          range: {
            min: 1,
            max: 100,
          },
        },
        height: {
          type: 'number',
          icon: IconRuler2,
          label: 'Height',
          range: {
            min: 20,
            max: 180,
          },
        },
        weight: {
          type: 'number',
          icon: IconScale,
          label: 'Weight',
          range: {
            min: 20,
            max: 120,
          },
        },
        body: {
          type: 'index',
          icon: IconShirt,
          label: 'Body',
          options: [
            {
              value: 'athletic',
              label: 'Athletic',
            },
            {
              value: 'average',
              label: 'Average',
            },
            {
              value: 'curvy',
              label: 'Curvy',
            },
            {
              value: 'muscular',
              label: 'Muscular',
            },
            {
              value: 'plus-sized',
              label: 'Plus Sized',
            },
            {
              value: 'slim',
              label: 'Slim',
            },
            {
              value: 'stocky',
              label: 'Stocky',
            },
          ],
        },
        ethnicities: {
          type: 'array',
          icon: IconWorld,
          label: 'Ethnicities',
          length: {
            min: 1,
            max: 3,
          },
          options: [
            {
              value: 'asian',
              label: 'Asian',
            },
            {
              value: 'african',
              label: 'African',
            },
            {
              value: 'hispanic',
              label: 'Hispanic',
            },
            {
              value: 'indian',
              label: 'Indian',
            },
            {
              value: 'indigenous',
              label: 'Indigenous',
            },
            {
              value: 'latino',
              label: 'Latino',
            },
            {
              value: 'middle-eastern',
              label: 'Middle Eastern',
            },
            {
              value: 'multiracial',
              label: 'Multiracial',
            },
            {
              value: 'white',
              label: 'White',
            },
          ],
        },
        colors: {
          eye: {
            type: 'index',
            icon: IconEye,
            label: 'Eye Color',
            options: [
              {
                value: 'amber',
                label: 'Amber',
                hex: '#FFBF00',
              },
              {
                value: 'blue',
                label: 'Blue',
                hex: '#4267B2',
              },
              {
                value: 'brown',
                label: 'Brown',
                hex: '#964B00',
              },
              {
                value: 'gray',
                label: 'Gray',
                hex: '#2E2E2E',
              },
              {
                value: 'green',
                label: 'Green',
                hex: '#075E54',
              },
              {
                value: 'hazel',
                label: 'Hazel',
                hex: '#8E7618',
              },
              {
                value: 'red',
                label: 'Red',
                hex: '#DD5044',
              },
            ],
          },
          hair: {
            type: 'index',
            icon: IconCut,
            label: 'Hair Color',
            options: [
              {
                value: 'black',
                label: 'Black',
                hex: '#242424',
              },
              {
                value: 'blonde',
                label: 'Blonde',
                hex: '#FAF0BE',
              },
              {
                value: 'brunette',
                label: 'Brunette',
                hex: '#2D170E',
              },
              {
                value: 'burgundy',
                label: 'Burgundy',
                hex: '#800020',
              },
              {
                value: 'gray',
                label: 'Gray',
                hex: '#2E2E2E',
              },
              {
                value: 'white',
                label: 'White',
                hex: '#F1F1F1',
              },
            ],
          },
          skin: {
            type: 'index',
            icon: IconUser,
            label: 'Skin',
            options: [
              {
                value: 'black',
                label: 'Black',
                hex: '#3B2219',
              },
              {
                value: 'brown',
                label: 'Brown',
                hex: '#A16E4B',
              },
              {
                value: 'olive',
                label: 'Olive',
                hex: '#D4AA78',
              },
              {
                value: 'medium',
                label: 'Medium',
                hex: '#E6BC98',
              },
              {
                value: 'fair',
                label: 'Fair',
                hex: '#FFE7D1',
              },
            ],
          },
        },
      },
    },
  },
};

function getDefaultValueOfType(type, field) {
  switch (type) {
    case 'string':
      return '';
    case 'array':
      return [];
    case 'date':
      return new Date('1999-07-03');
    case 'boolean':
      return false;
    case 'range':
      return [
        field.range.min,
        field.range.max,
      ];
    case 'number':
      return field.range.min;
    case 'index':
      return '';
    default:
      throw new Error(`Unknown field type '${type}'`);
  }
}

function getValues(sketch, data) {
  const values = {};

  Object.keys(sketch).forEach((field) => {
    if (sketch[field].type === undefined) {
      if (data === undefined) {
        values[field] = getValues(sketch[field], undefined);
      } else {
        values[field] = getValues(sketch[field], data[field]);
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (data === undefined) {
        values[field] = getDefaultValueOfType(sketch[field].type, sketch[field]);
      } else {
        // eslint-disable-next-line no-lonely-if
        if (sketch[field].type === 'date') {
          values[field] = new Date(data[field]);
        } else {
          values[field] = data[field];
        }
      }
    }
  });

  return values;
}

export {
  getDefaultValueOfType,
  getValues,
};
