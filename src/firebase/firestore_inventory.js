import { db } from './firebase-config';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';

